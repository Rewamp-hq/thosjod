// Browser client for the AX_Chat_Be backend (FastAPI). Used by the /login, /signup and /app/* pages.
// Tokens live in localStorage; a 401 triggers one refresh attempt, then a redirect to /login.

const RAW = (import.meta.env.PUBLIC_API_URL as string | undefined) || 'http://localhost:8000';
export const API_ORIGIN = RAW.replace(/\/+$/, '').replace(/\/api\/v1$/, '');
export const API_BASE = `${API_ORIGIN}/api/v1`;
export const WS_BASE = API_ORIGIN.replace(/^http/, 'ws') + '/ws/chat';
// Host that serves the embeddable widget.js (the AX_Chat_Fe app)
export const WIDGET_ORIGIN = ((import.meta.env.PUBLIC_WIDGET_URL as string | undefined) || 'http://localhost:5173').replace(/\/+$/, '');

const K = { access: 'tj-access', refresh: 'tj-refresh', user: 'tj-user', ws: 'tj-workspace' };

const store = {
  get: (k: string) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k: string, v: string) => { try { localStorage.setItem(k, v); } catch {} },
  del: (k: string) => { try { localStorage.removeItem(k); } catch {} },
};

export type User = { id: string; name: string; email: string; tenant_id?: string | null; tenant_slug?: string | null };

export const session = {
  token: () => store.get(K.access),
  user: (): User | null => { try { return JSON.parse(store.get(K.user) || 'null'); } catch { return null; } },
  save(data: { access_token: string; refresh_token: string; user?: User }) {
    store.set(K.access, data.access_token);
    store.set(K.refresh, data.refresh_token);
    if (data.user) store.set(K.user, JSON.stringify(data.user));
  },
  clear() { Object.values(K).forEach(store.del); },
  workspace: () => store.get(K.ws),
  setWorkspace: (slug: string) => store.set(K.ws, slug),
};

export class ApiError extends Error {
  constructor(public status: number, message: string) { super(message); }
}

const detail = (data: any, fallback: string) => {
  const d = data?.detail;
  if (Array.isArray(d)) return d.map((e) => e.msg ?? String(e)).join('; ');
  return typeof d === 'string' ? d : fallback;
};

async function refresh(): Promise<boolean> {
  const rt = store.get(K.refresh);
  if (!rt) return false;
  const res = await fetch(`${API_BASE}/auth/refresh`, { method: 'POST', headers: { Authorization: `Bearer ${rt}` } });
  if (!res.ok) return false;
  session.save(await res.json());
  return true;
}

export function logout() {
  session.clear();
  location.href = '/login';
}

type Opts = { method?: string; body?: unknown; raw?: boolean; auth?: boolean };

export async function api<T = any>(path: string, { method = 'GET', body, raw = false, auth = true }: Opts = {}, retry = true): Promise<T> {
  const isForm = body instanceof FormData;
  const headers: Record<string, string> = {};
  if (body !== undefined && !isForm) headers['Content-Type'] = 'application/json';
  const token = session.token();
  if (auth && token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(path.startsWith('http') ? path : `${API_BASE}${path}`, {
    method, headers, body: body === undefined ? undefined : isForm ? body : JSON.stringify(body),
  });

  if (res.status === 401 && auth && retry) {
    if (await refresh()) return api<T>(path, { method, body, raw, auth }, false);
    logout();
    throw new ApiError(401, 'Session expired. Please log in again.');
  }
  if (raw) {
    if (!res.ok) throw new ApiError(res.status, `Request failed (${res.status})`);
    return res as unknown as T;
  }
  const data = res.status === 204 ? null : await res.json().catch(() => null);
  if (!res.ok) throw new ApiError(res.status, detail(data, `Request failed (${res.status})`));
  return data as T;
}

// ---------- small DOM helpers shared by the app pages ----------

export const $ = <E extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<E>(sel)!;
export const $$ = <E extends Element = HTMLElement>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<E>(sel)];

export const esc = (v: unknown) =>
  String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

export const fmtDate = (v?: string | null) => (v ? new Date(v).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' }) : '-');

export const toast = (msg: string) => (window as any).tjToast?.(msg);
export const confirmAction = (title: string, body: string, ok = 'Delete'): Promise<boolean> =>
  (window as any).tjConfirm?.(title, body, ok) ?? Promise.resolve(window.confirm(title));

export const pill = (s: string | null | undefined) => {
  const v = String(s ?? '-');
  const tone = /complete|success|active|ready|indexed|converted|done|live/i.test(v) ? 'green'
    : /pending|process|queued|crawl|running|new|draft|contacted/i.test(v) ? 'amber'
    : /fail|error|archived|disabled/i.test(v) ? 'red' : '';
  return `<span class="pill ${tone}">${esc(v)}</span>`;
};

/** The workspace picked in the AppShell switcher, once GET /workspaces has resolved. */
export const currentWorkspace = (): Promise<any> => {
  const list = (window as any).tjWorkspaces as any[] | undefined;
  if (list) return Promise.resolve(list.find((w) => w.slug === session.workspace()));
  return new Promise((resolve) => document.addEventListener('tj:workspace', (e) => resolve((e as CustomEvent).detail), { once: true }));
};

/** Assistant id from ?id= - every /app/assistants/* sub-page is keyed by it. */
export const assistantId = () => new URLSearchParams(location.search).get('id') ?? '';

/** Run an async action on a button: disables it and toasts the error message on failure. */
export async function busy<T>(btn: HTMLButtonElement | null, fn: () => Promise<T>): Promise<T | undefined> {
  if (btn) btn.disabled = true;
  try { return await fn(); }
  catch (e) { toast((e as Error).message); }
  finally { if (btn) btn.disabled = false; }
}

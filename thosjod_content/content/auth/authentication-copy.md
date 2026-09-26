# OUTPUT 26 - Authentication UX Copy

## `/login`

Heading: Log in to Thosjod
Supporting text: Access your dashboard, conversations, and analytics.
Form labels: Work Email · Password
Error states: "That email/password combination doesn't match our records." · "Too many attempts - try again in {5} minutes."
Success state: Redirect to `/app/dashboard`
CTA: Log In · Secondary: "Forgot password?" → `/forgot-password` · "New here? Sign up" → `/signup`
Security messaging: "Your connection is encrypted. Never share your password with anyone, including Thosjod support."

## `/signup`

Heading: Create your Thosjod account
Supporting text: Set up your first AI agent in minutes - no credit card required for `[PRICING INPUT REQUIRED: confirm if a free/trial tier exists]`.
Form labels: Work Email · Company Name · Password · Confirm Password
Error states: "This email is already registered - log in instead?" · "Password must be at least 8 characters."
Success state: "Check your email to verify your account." → triggers `/verify-email`
CTA: Create Account · Secondary: "Already have an account? Log in"

## `/forgot-password`

Heading: Reset your password
Supporting text: Enter your work email and we'll send a reset link.
Form labels: Work Email
Success state: "If an account exists for that email, a reset link is on its way." (deliberately non-committal to avoid confirming account existence - standard security practice)
CTA: Send Reset Link

## `/reset-password`

Heading: Set a new password
Form labels: New Password · Confirm New Password
Error states: "Passwords don't match." · "This reset link has expired - request a new one."
Success state: "Password updated. Log in with your new password." → redirect to `/login`
CTA: Update Password

## `/verify-email`

Heading: Verify your email
Supporting text: We sent a verification link to {email}. Click it to activate your account.
Empty/waiting state: "Didn't get it? Check spam, or resend." CTA: Resend Verification Email
Success state: "Email verified - welcome to Thosjod." → redirect to `/app/onboarding`

## `/invite`

Heading: You've been invited to Thosjod
Supporting text: {Inviter name} invited you to join {Company name}'s Thosjod workspace.
CTA: Accept Invite → `/accept-invite`
Error state: "This invite has expired - ask {Inviter name} to resend it."

## `/accept-invite`

Heading: Join {Company name} on Thosjod
Form labels: Full Name · Password · Confirm Password
Success state: Redirect to `/app/dashboard` with role/permissions pre-assigned by inviter (see `/app/settings/permissions`).

## `/sso`

Heading: Log in with SSO
Supporting text: Available on Scale and Enterprise plans.
Form label: Company Domain (e.g., "yourcompany.com")
Error state: "SSO isn't configured for this domain - contact your admin, or `/login` with email instead."
Security messaging: "You'll be redirected to your company's identity provider to complete login."

## Global Auth Notes

- All auth pages should include a persistent link to `/help` for account-access support issues.
- Loading states across all forms: skeleton/spinner on the submit button with the button label temporarily replaced by "Please wait…", not a blocking full-page spinner.

## CONTENT NOTES

Source: standard SaaS auth UX patterns; no product-specific auth requirements found in the 62-feature source (SSO is confirmed as a real feature - Pillar 2/6 - the rest follows conventional practice).

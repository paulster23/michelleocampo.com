# Site Monitoring

Automated health checks run every 6 hours via GitHub Actions. No third-party paid service is required.

---

## What is monitored

| Check | What it verifies | Frequency |
|-------|-----------------|-----------|
| **Site uptime** | `https://michelleocampo.com` returns HTTP 200 | Every 6 hours |
| **SSL certificate** | Cert is valid and does not expire within 14 days | Every 6 hours |
| **EmailJS reachability** | `api.emailjs.com` responds to a network request | Every 6 hours |

The workflow file is at `.github/workflows/site-monitor.yml`.

---

## How to get notified

When a check fails, the workflow opens a **GitHub Issue** in this repository. GitHub automatically sends an email notification to anyone who is **watching** the repository.

To make sure you receive these emails:

1. Go to the repository on GitHub: `https://github.com/paulster23/michelleocampo.com`
2. Click **Watch** (top-right) → **All Activity** (or at minimum **Issues**).
3. Confirm your notification email address is set correctly under **GitHub Settings → Notifications**.

When the problem resolves (detected on the next 6-hour run), the workflow closes the issue automatically and posts a comment confirming the fix.

---

## Alert types and how to fix them

### Site is down (HTTP error)

**Issue title:** `[Monitor] Site down — HTTP <code>`

The site returned an unexpected HTTP status code. Common codes and what they mean:

- **000** — No response at all. DNS may have stopped resolving, or Netlify's CDN is not serving the site.
- **404** — The built site files were not found. The last deploy may have failed or published an empty directory.
- **503 / 502** — Netlify is serving an error page. The site may have exceeded bandwidth limits, or the build is in a broken state.

**Steps to fix:**

1. Open the [Netlify dashboard](https://app.netlify.com) and select the site.
2. Go to the **Deploys** tab and check whether the most recent deploy succeeded (green) or failed (red).
3. If the deploy failed, read the build log to find the error, fix it in the codebase, and push to `main` — Netlify will redeploy automatically.
4. If the deploy succeeded but the site is still down, check [Netlify status](https://www.netlifystatus.com) for an active incident.
5. To verify DNS, run `dig michelleocampo.com` or check [dnschecker.org](https://dnschecker.org/#A/michelleocampo.com). The A record should point to Netlify's load balancer IP range (`75.2.x.x` or `99.83.x.x`).

---

### SSL certificate expiring

**Issue title:** `[Monitor] SSL cert expires in N days — renew soon` (warning, < 14 days remaining)
**Issue title:** `[Monitor] SSL cert expires in N days — CRITICAL` (critical, < 3 days remaining)
**Issue title:** `[Monitor] SSL cert — could not be retrieved` (certificate unreachable or already invalid)

Netlify uses Let's Encrypt certificates that expire every 90 days. Netlify normally renews them automatically, but renewal can fail if DNS was recently changed or if there was a Let's Encrypt service disruption.

**Steps to renew manually on Netlify:**

1. Log in to [app.netlify.com](https://app.netlify.com).
2. Select the **michelleocampo.com** site.
3. Go to **Site configuration → Domain management → HTTPS**.
4. Click **"Renew certificate"**.
5. Wait 1–2 minutes, then reload the page to confirm the updated expiry date.

**If the renew button is greyed out or fails:**

- Confirm that the DNS records for `michelleocampo.com` and `www.michelleocampo.com` still point to Netlify (use [dnschecker.org](https://dnschecker.org)).
- Check [Netlify status](https://www.netlifystatus.com) for any active certificate provisioning incidents.
- If DNS was recently changed, wait up to 48 hours for propagation before retrying.
- Contact Netlify support through the dashboard if the problem persists.

---

### EmailJS unreachable

**Issue title:** `[Monitor] EmailJS unreachable — no response from api.emailjs.com`

The monitor could not reach the EmailJS API at all, which means the contact form cannot send emails.

Note: this check only confirms that the EmailJS API is reachable over the network. It does not test your specific service ID or template ID. If those are misconfigured, the contact form will fail with a different kind of error (visible in the browser console, not caught by this monitor).

**Steps to fix:**

1. Visit [emailjs.com](https://www.emailjs.com) — if the site itself is down, this is a service outage outside your control. Wait and monitor their status.
2. Log in to the [EmailJS dashboard](https://dashboard.emailjs.com) and confirm:
   - The email service is connected and active under **Email Services** (Service ID: `service_dizvkpg`).
   - The template exists and is enabled under **Email Templates** (Template ID: `template_zbmk72p`).
3. Check that the free-tier monthly email limit has not been exceeded (200 emails/month on the free plan). If it has, emails will fail until the counter resets at the start of the next month.
4. If the outage is prolonged, consider temporarily displaying your email address directly on the contact page so visitors can still reach you.

---

## Running the monitor manually

To trigger a check immediately without waiting for the next scheduled run:

1. Go to the repository on GitHub.
2. Click **Actions** in the top navigation.
3. Select **Site Monitor** from the workflow list on the left.
4. Click **Run workflow** → **Run workflow**.

The results will appear in the Actions log within about 30 seconds. Any new issues will be opened automatically if checks fail.

---

## Adjusting the schedule

The check frequency is controlled by the `cron` expression in `.github/workflows/site-monitor.yml`:

```yaml
on:
  schedule:
    - cron: '0 */6 * * *'   # every 6 hours
```

Common alternatives:

| Schedule | Cron expression |
|----------|----------------|
| Every hour | `0 * * * *` |
| Every 2 hours | `0 */2 * * *` |
| Every 6 hours (current) | `0 */6 * * *` |
| Once daily at 8 AM UTC | `0 8 * * *` |
| Twice daily (8 AM + 8 PM UTC) | `0 8,20 * * *` |

To change the schedule, edit the cron expression in the workflow file and commit to `main`.

Note: GitHub Actions cron jobs on free accounts may run up to a few minutes late during periods of high load. This is normal and does not affect the accuracy of the checks.

---

## Free tier limits

This solution uses only free services:

- **GitHub Actions** — Public repositories get unlimited free Actions minutes. Private repositories get 2,000 minutes/month. At 4 runs/day with an average run time under 1 minute, this monitor uses approximately 120 minutes/month — well within the free tier.
- **GitHub Issues** — Unlimited on all plans.
- No external monitoring service accounts required.

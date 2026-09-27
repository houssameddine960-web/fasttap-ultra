# FastTap Ultra 4.2 — Real HTTPS Deployment

## Recommended: Render
1. Create a GitHub repository and upload this project.
2. In Render, create a **Web Service** from the repository.
3. Root directory: `server`
4. Build command: `npm install`
5. Start command: `npm start`
6. Health check: `/health`
7. Environment variables:
   - `NODE_ENV=production`
   - `PUBLIC_ORIGIN=https://YOUR-SERVICE.onrender.com`
8. Deploy. Render provides an HTTPS address automatically.

## Custom domain
In Render: Settings → Custom Domains → add your domain. Follow the DNS records Render shows. HTTPS is provisioned automatically after DNS verification.

## Important
The current server keeps users, rooms, matchmaking and MMR in memory. Restarting the service clears active rooms and temporary users. For persistent accounts/rankings, add a database (PostgreSQL/Redis) before treating Ranked as a production competitive service.

# Deployment Guide — Digital Wellness Academy Documentation

This documentation site is deployed on the VPS via Dokploy, accessible at `docs.digitalwellness.academy`.

## Dokploy Deployment

### Prerequisites
- Dokploy installed on VPS (46.202.88.248)
- DNS record: `docs.digitalwellness.academy` → VPS IP
- GitHub repository access

### Setup Steps

#### 1. Create Dokploy Application

1. Log into Dokploy dashboard (https://46.202.88.248:3000)
2. Click "New Application"
3. Configure:
   - **Name**: `dwa-docs`
   - **Type**: Docker (Dockerfile)
   - **Repository**: `https://github.com/SoloFrameHub/mental-health-education-platform`
   - **Branch**: `main` (or create dedicated `docs` branch)
   - **Context Path**: `/` (if docs in separate repo) or `/docs/` (if in monorepo)
   - **Dockerfile Path**: `./Dockerfile`
   - **Port**: 3000 (internal container port)

#### 2. Configure Environment Variables

None required for basic deployment. Optional:
- `NODE_ENV=production` (already set in Dockerfile)

#### 3. Configure Domain

1. In Dokploy app settings, go to "Domains"
2. Add domain: `docs.digitalwellness.academy`
3. Enable HTTPS (Let's Encrypt auto-cert)
4. Save

#### 4. Deploy

1. Click "Deploy" in Dokploy
2. Monitor build logs
3. Verify deployment at `https://docs.digitalwellness.academy`

### Auto-Deploy on Push

Dokploy watches the repository. Any push to `main` triggers auto-rebuild.

**Workflow:**
1. Update docs locally
2. Commit + push to GitHub main branch
3. Dokploy auto-detects change
4. Rebuilds Docker image
5. Deploys new version (zero-downtime rolling update)

## Local Development

```bash
cd /Volumes/ext-data/github/digitalwellness-academy-docs
npm install
npm run dev
```

Access at http://localhost:3000

## Deployment Checklist

- [ ] GitHub repo created/configured
- [ ] Dockerfile present
- [ ] next.config.js set to `output: 'standalone'`
- [ ] DNS A record for `docs.digitalwellness.academy` → VPS IP
- [ ] Dokploy app created and connected to repo
- [ ] Domain configured in Dokploy with HTTPS
- [ ] Initial deploy successful
- [ ] Auto-deploy verified (push to main → rebuild)

## Troubleshooting

### Build Fails

Check Dokploy build logs. Common issues:
- Missing dependencies: `npm ci` failing → check package.json
- Build errors: `npm run build` failing → check pages/*.mdx syntax

### Site Not Accessible

- Verify DNS: `dig docs.digitalwellness.academy` → should return VPS IP
- Check Dokploy app status: Should show "Running"
- Check container logs: Look for Next.js server start message
- Verify port mapping: Internal 3000 → external 80/443

### Auto-Deploy Not Working

- Check Dokploy webhook configuration
- Verify GitHub repo connection
- Check Dokploy logs for webhook events

## Manual Deployment (Alternative)

If Dokploy unavailable, deploy manually:

```bash
# On VPS
cd /opt/dwa-docs
git pull origin main
docker build -t dwa-docs .
docker stop dwa-docs || true
docker rm dwa-docs || true
docker run -d --name dwa-docs -p 3001:3000 --restart unless-stopped dwa-docs
```

Then configure Nginx reverse proxy:
```nginx
server {
    listen 80;
    server_name docs.digitalwellness.academy;
    
    location / {
        proxy_pass http://localhost:3001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Maintenance

### Updating Content

1. Edit `.mdx` files in `/pages/` directory
2. Commit + push to GitHub
3. Dokploy auto-deploys

### Adding New Sections

1. Create new directory in `/pages/`
2. Add `meta.json` for navigation
3. Create `.mdx` files
4. Commit + push

### Updating Navigation

Edit `/pages/meta.json` and section-specific `meta.json` files.

## Performance

- Nextra generates static pages at build time (fast page loads)
- Search index pre-built (instant search)
- Images optimized during build
- Docker image ~150MB (lightweight)

## Backup

Documentation is version-controlled in Git. No separate backup needed — restore from GitHub if needed.

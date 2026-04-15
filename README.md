# Digital Wellness Academy Documentation

Comprehensive technical documentation for the Digital Wellness Academy platform and all its services, built with [Nextra](https://nextra.site).

**Live Site:** https://docs.digitalwellness.academy

## Overview

This documentation site covers all Dokploy projects/services in the Digital Wellness Academy ecosystem:

- **Platform** — Main Next.js application (learning platform, provider coordination, assessments)
- **Distress Classifier** — ML service for real-time crisis detection (DistilBERT)
- **Forum** — Flarum integration for community engagement
- **Infrastructure** — VPS, Dokploy, networking, deployment
- **Operations** — Deployment guides, monitoring, incident response

## Structure

```
docs.digitalwellness.academy/
├── Platform
│   ├── Capabilities (complete feature inventory)
│   ├── API Reference (all endpoints documented)
│   ├── Architecture (system design, database schema)
│   └── Guides (provider, admin, developer)
├── Distress Classifier
│   ├── Model Architecture (DistilBERT fine-tuning)
│   ├── API Endpoints (classification, health checks)
│   └── Deployment (Docker, Dokploy)
├── Forum
│   ├── Integration (Flarum JSON:API)
│   ├── Moderation (AI-powered)
│   └── Customization
├── Infrastructure
│   ├── Dokploy Setup
│   ├── VPS Configuration
│   └── Networking
└── Operations
    ├── Deployment Guides
    ├── Monitoring
    └── Incident Response
```

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Access at http://localhost:3000
```

## Adding Documentation

### Create a New Page

1. Add `.mdx` file in appropriate directory:
   ```bash
   # Example: new API endpoint documentation
   touch pages/platform/api/auth.mdx
   ```

2. Update `meta.json` for navigation:
   ```json
   // pages/platform/api/meta.json
   {
     "overview": "Overview",
     "auth": "Authentication",  // <-- Add this
     "endpoints": "Endpoints"
   }
   ```

3. Write content using MDX:
   ```mdx
   # Authentication

   The platform uses Lucia session-based authentication.

   ## Endpoints

   ### POST /api/auth/signup
   ...
   ```

### Navigation Structure

Navigation is controlled by `meta.json` files in each directory:

```
pages/
├── meta.json (top-level nav)
├── platform/
│   ├── meta.json (platform sub-nav)
│   └── capabilities/
│       └── meta.json (capabilities sub-nav)
```

### Auto-Generated Docs

Some docs are auto-generated from code. Run scripts to update:

```bash
# Generate API docs from JSDoc comments
npm run docs:api

# Generate schema docs from Drizzle schema
npm run docs:schema

# Generate route inventory
npm run docs:routes
```

(Scripts not yet implemented — add to package.json)

## Content Guidelines

### Writing Style

- **Clear & Concise**: Get to the point quickly
- **Code Examples**: Include working code snippets
- **Diagrams**: Use Mermaid for architecture diagrams
- **Cross-Links**: Link to related docs liberally

### MDX Features

Nextra supports:

```mdx
import { Callout } from 'nextra-theme-docs'

<Callout type="warning">
  Important safety information goes here.
</Callout>

<Callout type="info">
  Helpful tips go here.
</Callout>

## Code Blocks

```typescript filename="example.ts"
const example = "code with syntax highlighting";
```

## Tables

| Feature | Status |
|---------|--------|
| Feature 1 | ✅ Complete |
| Feature 2 | 🚧 In Progress |
```

### Documentation Maintenance

**When adding a feature to the platform:**
1. Update capability docs (`/pages/platform/capabilities/`)
2. Add API docs if new endpoints (`/pages/platform/api/`)
3. Update architecture docs if structure changes
4. Add to guides if user-facing

**Quarterly Audit:**
- Review docs against actual codebase
- Update anything that's drifted
- Check for broken links
- Verify code examples still work

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for full deployment guide.

**Quick Deploy to Dokploy:**

1. Create new app in Dokploy:
   - Name: `dwa-docs`
   - Type: Docker (Dockerfile)
   - Repository: This repo
   - Branch: `main`

2. Configure domain: `docs.digitalwellness.academy`

3. Deploy

Auto-deploys on every push to `main`.

## Technology Stack

- **Framework**: Next.js 14
- **Docs Engine**: Nextra 2.x
- **Theme**: nextra-theme-docs
- **Search**: Built-in FlexSearch
- **Deployment**: Docker + Dokploy

## Current Status

### ✅ Complete

- Nextra setup and configuration
- Multi-project structure (Platform, Distress Classifier, Forum, Infrastructure, Operations)
- Platform capability inventory migrated
- Deployment configuration (Dockerfile, next.config.js)
- Auto-deploy via Dokploy

### 🚧 In Progress

- API reference documentation (needs JSDoc extraction)
- Architecture diagrams (Mermaid)
- Provider/Admin/Developer guides
- Distress Classifier documentation
- Forum integration documentation
- Infrastructure documentation
- Operations runbooks

### 📋 To Do

- Automated doc generation scripts (API, schema, routes)
- CI check (fail build if docs stale)
- Code example validation
- Screenshot automation
- Changelog automation from git commits
- Search optimization

## Contributing

1. Create feature branch
2. Add/update documentation
3. Test locally: `npm run dev`
4. Commit with clear message: "docs: add provider assignment guide"
5. Push to GitHub
6. Dokploy auto-deploys

## Need Help?

- **Platform Questions**: Check [Platform Overview](/pages/platform/index.mdx)
- **Deployment Issues**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Nextra Help**: [Nextra Documentation](https://nextra.site)

---

Built with [Nextra](https://nextra.site) • Deployed on VPS via Dokploy • © 2026 Digital Wellness Academy


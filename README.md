# Good Stir

A fast, static marketing website built with Astro and Tailwind CSS.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

This site is configured for static deployment and can be deployed to:

### Cloudflare Pages (Recommended)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
2. Click "Create a project" → "Connect to Git"
3. Select your GitHub repository: `seanymal/GoodStir`
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: `22` (or latest)
5. Click "Save and Deploy"

The site will automatically deploy on every push to the `main` branch.

### GitHub Pages

1. Go to your repository settings → Pages
2. Under "Source", select "GitHub Actions"
3. The included workflow (`.github/workflows/deploy.yml`) will automatically deploy your site
4. Your site will be available at: `https://seanymal.github.io/GoodStir`

**Note**: For GitHub Pages, you may need to update the `base` path in `astro.config.mjs` if deploying to a subdirectory.

### Custom Domain

For custom domain setup:
1. Edit the `public/CNAME` file with your domain name (e.g., `www.yourdomain.com`)
2. Configure DNS settings in your hosting provider
3. Update the `site` URL in `astro.config.mjs` to match your domain

# portfolio

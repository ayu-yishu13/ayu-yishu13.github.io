# Priyanshu's Portfolio

This is a modern portfolio website built with [Next.js](https://nextjs.org), optimized for deployment on Vercel.

## 🚀 Getting Started

First, clone the repository:

```bash
git clone https://github.com/PRIYANSHU2026/Portfolio.git
cd Portfolio/main-portfolio
```

Then, install the dependencies:

```bash
# Using npm
npm install

# Using Yarn
yarn

# Using pnpm
pnpm install

# Using Bun (recommended)
bun install
```

Run the development server:

```bash
# Using npm
npm run dev

# Using Yarn
yarn dev

# Using pnpm
pnpm dev

# Using Bun (recommended)
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Building for Production

To build the project for production:

```bash
# Using npm
npm run build

# Using Yarn
yarn build

# Using pnpm
pnpm build

# Using Bun (recommended)
bun run build
```

## 🌐 Deployment to Vercel

### Option 1: Using the Vercel Dashboard (Recommended)

1. Go to [Vercel](https://vercel.com/import)
2. Click "Import Project"
3. Select "Import Git Repository"
4. Enter your GitHub repository URL: `https://github.com/PRIYANSHU2026/Portfolio`
5. Select the `main-portfolio` directory
6. Deploy!

### Option 2: Using the Vercel CLI

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

### Option 3: Using the Setup Script

We've provided a setup script to make deployment easier:

```bash
# Make the script executable
chmod +x setup.sh

# Run the script
./setup.sh
```

Then follow the on-screen instructions to deploy to Vercel.

## 📁 Project Structure

The project is structured for optimal performance and easy maintenance:

- `src/app` - The main application pages
- `src/components` - Reusable UI components
- `src/lib` - Utility functions and hooks
- `public` - Static assets like images

## ⚙️ Configuration

- `next.config.js` - Next.js configuration
- `vercel.json` - Vercel deployment configuration
- `tailwind.config.ts` - Tailwind CSS configuration

## 📝 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

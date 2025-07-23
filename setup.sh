#!/bin/bash

# Portfolio setup script for Vercel deployment
echo "🚀 Setting up Priyanshu's Portfolio for Vercel deployment"

# Install dependencies
echo "📦 Installing dependencies..."
if command -v bun &> /dev/null; then
  bun install
elif command -v npm &> /dev/null; then
  npm install
else
  echo "❌ Error: Neither bun nor npm found. Please install one of them."
  exit 1
fi

# Build project
echo "🏗️ Building project..."
if command -v bun &> /dev/null; then
  bun run build
else
  npm run build
fi

echo "✅ Setup complete! You can now deploy to Vercel."
echo ""
echo "To deploy to Vercel, run:"
echo "  1. Install Vercel CLI: npm install -g vercel"
echo "  2. Login to Vercel: vercel login"
echo "  3. Deploy: vercel"
echo ""
echo "Or visit https://vercel.com/import to deploy via the Vercel dashboard."

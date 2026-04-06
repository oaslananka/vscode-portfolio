# oaslananka-portfolio
[![Open is Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/oaslananka/oaslananka-portfolio)

A Visual Studio Code themed developer portfolio website built with Next.js and deployed on Vercel.

![oaslananka-portfolio banner](https://imgur.com/JXJ9mpO.gif)

## Attribution

This version was forked from and built on top of the original open-source
[`itsnitinr/vscode-portfolio`](https://github.com/itsnitinr/vscode-portfolio)
project by [Nitin Ranganath](https://github.com/itsnitinr), then adapted for my
own portfolio content, GitHub data, and deployment setup.

## Features Roadmap

- [ ] Themes and customizations
  - [x] GitHub Dark (default)
  - [ ] One Dark Pro
  - [x] Dracula
  - [x] Ayu
  - [x] Nord
- [x] Interactive custom terminal

For other features and themes suggestions, please open an issue.

## Environment Variables

For fetching your articles from dev.to, create an `.env` or `.env.local` file inside the project directory. Check the `.env.example` file for the expected variables.

## Running Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Managing Portfolio Content

Most personal content now lives in `data/site.ts`.

- Edit `data/site.ts` for name, bio, SEO, links, skills, contact items, and terminal copy.
- Edit `data/projects.ts` for featured projects.
- Keep secrets and API keys in `.env` or `.env.local`.

## Next.js Resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

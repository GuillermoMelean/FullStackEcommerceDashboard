This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Helps

## Prismadb

### How to generate new models

```
npx prisma generate
```

### How to push changes

```
npx prisma db push
```

## Vocabulary

### Self Closing Tag

A traditional HTML tag such as `<p>`, `<div>`, `<section>`, etc., had an opening tag and a closing tag. However, due to their fundamental structure, void components in HTML, such as images and links, do not technically require closing tags. Images and links cannot have content - they are pointers to an element installed on the website.
Instead of including independent opening and closing tags in more modern HTML variants such as XHTML, developers employ a self-closing tag that includes a "/" within the carets (\<>). For example – `<img src="image/circle" alt="example" />`

```
<!DOCTYPE html>
<html>
<head>
   <title>Self-closing tags</title>
</head>
 <body>
	<img src="https://cdn.pixabay.com/photo/2021/09/15/11/44/insect-6626635__340.jpg" alt="insect-bee"/>
  </body>
</html>

```

### Unauthorized vs Unauthenticated

<b>401 Unauthorized:</b>

If the request already included Authorization credentials, then the 401 response indicates that authorization has been refused for those credentials.

<b>403 Forbidden:</b>

The server understood the request, but is refusing to fulfill it.

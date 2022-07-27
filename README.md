This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Frond End Architecture

Typical NextJs app has two parts: a front-end component and a node server. 

Front-end component is separated into `pages` that you can access through different urls in your browser. For example: `localhost:3000` will give you access to the React functional component in the folder `/pages/index.tsx`. If the application has multiple pages, you can structure your app like this: `localhost:3000/schedules` will display component inside the folder `/pages/schedules/index.tsx` or `localhost:3000/schedules/1` will display component inside the folder `/pages/schedules/[id].tsx`

There are multiple ways to fetch data for these `pages`, such as `SSR` `SSG` `CSR` `Dynamic Routing` `ISR`. You can read more on this [page]( https://nextjs.org/docs/basic-features/data-fetching/overview)

The method I choose to fetch data for this app is `CSR` or `ClientSideRendering`. The reason I choose this method is because we do not need Google to crawl the content of our employee stock vesting schedules. The data are unique to each employee and should be confidential. In NextJs, this is equivalent of calling `useEffect` in the React component once to render the data. 

To make the app more efficient in fetching data, I use `useSWR` hook provided by NextJS to handle caching, revalidation, focus tracking, refetching on intervals. You can read more about it [here](https://nextjs.org/docs/basic-features/data-fetching/client-side).

Node server is structured into separate [API routes](https://nextjs.org/docs/api-routes/introduction) that can be accessed on `http://localhost:3000/api/<route-name>`. In this particular exercise, the api route is called `localhost:3000/api/vesting-schedule` which can be edited in `pages/api/vesting-schedule.ts`. 

The convenient aspect of this light weight Node server is you can aggregate data from the backend to fit with how you want to display them in the front-end (making it easier to shape data to fit mobile vs desktop display).

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

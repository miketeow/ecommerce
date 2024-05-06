# Project Log

## Overview

This project is an e-commerce dashboard CMS developed with Next.js, based on a slightly modified version of the tutorial by Code With Antonio [Full Stack E-Commerce + Dashboard & CMS: Next.js 13 App Router, React, Tailwind, Prisma, MySQL, 2023](https://www.youtube.com/watch?v=5miHyP6lExg&t=16208s).

## Initial Plan for Tools

1. Next.js
2. Drizzle
3. Postgres from Docker
4. Shadcn
5. ~~Auth JS~~
6. Clerk

## Tool Selection

- **Drizzle:** Chosen over Prisma for its suitability to project needs.
- **Postgres from Docker:** Opted for Dockerized Postgres instead of Planetscale due to the latter's cancellation of free tiers.
- ~~**Auth JS:** Initially considering Auth JS for authentication and authorization. Clerk will be an alternative option if Auth JS proves to be overly complex.~~
- **Clerk:** Chosen over Auth JS due to its ease of use and integration with Next.js.
- **zustand:** Not going to use it.

Note: Other databases such as Supabase or Neon are free but may have limitations, such as storage limits or inactivity after a certain period.

## Updates

- **[2024-05-03]**: Created initial project log structure.
- **[2023-05-06]**: Use Clerk instead of Auth JS for authentication and authorization.

---

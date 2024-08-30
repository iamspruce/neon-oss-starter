# NEON OSS Starter Kit

Welcome to the NEON OSS Starter Kit! This project demonstrates a powerful full-stack application using cutting-edge technologies, with NEON as the centerpiece for database management.

## Tech Stack

- **[Next.js 14](https://nextjs.org/)**: React framework for building web applications
- **[NEON](https://neon.tech/)**: Serverless PostgreSQL database
- **[Prisma](https://www.prisma.io/)**: Next-generation ORM for Node.js and TypeScript
- **[NextAuth v5](https://next-auth.js.org/)**: Authentication for Next.js
- **[shadcn/ui](https://ui.shadcn.com/)**: Re-usable components built with Radix UI and Tailwind CSS
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework

## Features

- User authentication (sign up, login, logout)
- Protected routes (both client-side and server-side)
- CRUD operations with NEON database
- Responsive design with dark mode support
- Serverless architecture

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A NEON account (sign up at https://neon.tech if you don't have one)

### Quick Start

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/neon-oss-starter.git
   cd neon-oss-starter
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables:

   - Copy `.env.example` to `.env.local`
   - Update the variables in `.env.local` with your NEON database URL and other required values

4. Run Prisma migrations:

   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Do It Yourself: Setting Up From Scratch

If you want to set up this starter kit from scratch, follow these steps:

1. Create a new Next.js project:

   ```bash
   npx create-next-app@latest neon-oss-starter
   cd neon-oss-starter
   ```

2. Install dependencies:

   ```bash
   npm install @prisma/client @auth/prisma-adapter next-auth@beta
   npm install -D prisma tailwindcss postcss autoprefixer
   ```

3. Set up Tailwind CSS:

   ```bash
   npx tailwindcss init -p
   ```

4. Initialize Prisma:

   ```bash
   npx prisma init
   ```

5. Set up your NEON database:

   - Create a new project in the NEON console
   - Copy the database connection string

6. Update your `.env` file with the NEON database URL:

   ```
   DATABASE_URL="your-neon-database-url"
   ```

7. Create your Prisma schema in `prisma/schema.prisma`:

   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }

   generator client {
     provider = "prisma-client-js"
   }

   model User {
     id        String   @id @default(cuid())
     name      String?
     email     String   @unique
     createdAt DateTime @default(now())
     updatedAt DateTime @updatedAt
   }
   ```

8. Run Prisma migrations:

   ```bash
   npx prisma migrate dev
   ```

9. Set up NextAuth:

   - Create `app/api/auth/[...nextauth]/route.ts`
   - Configure your authentication providers

10. Install shadcn/ui:

    ```bash
    npx shadcn-ui@latest init
    ```

11. Create your pages and components:

    - Set up your app layout in `app/layout.tsx`
    - Create pages like `app/page.tsx`, `app/protected/page.tsx`
    - Add components for user management, authentication, etc.

12. Implement your API routes for CRUD operations

13. Style your components using Tailwind CSS and shadcn/ui

14. Test your application and refine as needed

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [NEON](https://neon.tech/) for providing an excellent serverless PostgreSQL solution
- [Vercel](https://vercel.com/) for their amazing Next.js framework and deployment platform
- All the open-source projects that make this starter kit possible

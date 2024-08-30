import { auth } from "@/auth";
import AddUserForm from "@/components/AddUserForm";
import DeleteUserButton from "@/components/DeleteUserButton";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import Link from "next/link";
import { ArrowRight, Database, Zap, GitBranch, DollarSign } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { User } from "next-auth";

export default async function Home() {
  const session = await auth();

  let users: any = [];

  if (session) {
    users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  }

  return (
    <div className="container mx-auto max-w-3xl py-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl">
            Welcome to the NEON OSS Starter Kit
          </CardTitle>
        </CardHeader>
        <CardContent>
          {session ? (
            <p className="text-lg">
              You are logged in as {session.user?.email}
            </p>
          ) : (
            <p className="text-lg">
              Please log in to manage users and explore the full functionality
              of this demo.
            </p>
          )}
        </CardContent>
      </Card>

      {!session && (
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">About NEON OSS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                NEON is a fully managed serverless PostgreSQL database service.
                This starter kit demonstrates how to integrate NEON with
                Next.js, Prisma, and NextAuth for a powerful full-stack
                application.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="mr-2" />
                      Serverless
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Scales to zero and grows infinitely to meet your needs.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <GitBranch className="mr-2" />
                      Branching
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Create instant database clones for development and testing.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Database className="mr-2" />
                      PostgreSQL-native
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    100% compatible with PostgreSQL for seamless integration.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <DollarSign className="mr-2" />
                      Cost-effective
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Pay only for what you use with autoscaling capabilities.
                  </CardContent>
                </Card>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link
                  href="https://neon.tech/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more about NEON <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Getting Started</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>To explore the full functionality of this starter kit:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Sign up for a NEON account</li>
                <li>Create a new project in the NEON console</li>
                <li>Set up your environment variables</li>
                <li>Run Prisma migrations</li>
                <li>Start the development server</li>
              </ol>
              <p>
                For detailed instructions, check out the README.md file in the
                project repository.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline">
                <Link
                  href="https://github.com/your-repo-url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}

      {session && (
        <>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Add New User</CardTitle>
            </CardHeader>
            <CardContent>
              <AddUserForm />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Users in NEON Database</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {users.map((user: User) => (
                  <Card key={user.id} className="flex flex-col justify-between">
                    <CardContent className="pt-6">
                      <p>
                        <strong>Name:</strong> {user.name}
                      </p>
                      <p>
                        <strong>Email:</strong> {user.email}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <DeleteUserButton userId={user.id!} />
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}

import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ProtectedServerPage() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Protected Server Page</h1>
      <p>You can only see this page if you are logged in.</p>
      <p>This page is protected on the server side.</p>
    </div>
  );
}

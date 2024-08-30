import { auth } from "@/auth";
import Link from "next/link";

export default async function Header() {
  const session = await auth();
  return (
    <header className="bg-gray-800 text-white ">
      <div className="container">
        <nav className="p-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/protected-client">Protected Client</Link>
            </li>
            <li>
              <Link href="/protected-server">Protected Server</Link>
            </li>
            {session ? (
              <li>
                <Link href="/api/auth/signout">Logout</Link>
              </li>
            ) : (
              <li>
                <Link href="/api/auth/signin">Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

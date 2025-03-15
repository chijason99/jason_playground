import Link from "next/link";

export default function Header() {
  return (
    <header className="py-10">
      <div className="container">
        <nav>
          <ul className="flex items-center justify-center gap-10 text-lg font-bold uppercase tracking-wider text-gray-500">
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/dashboard/settings">Settings</Link>
            </li>
            <li>
              <Link href="/photos">Photos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
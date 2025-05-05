import Link from "next/link";
import { useRouter } from "next/router";

export default function FranchiseSidebar() {
  const router = useRouter();

  const menuItems = [
    { path: "/franchise", label: "Dashboard" },
    { path: "/franchise/orders", label: "Orders" },
    { path: "/franchise/complaints", label: "Complaints" },
    { path: "/franchise/revenue", label: "Revenue" },
  ];

  return (
    <aside className="w-full md:w-64 bg-gray-100 p-4 h-full min-h-screen">
      <h2 className="text-lg font-bold mb-4">📊 Franchise Panel</h2>
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>
              <span
                className={`block p-2 rounded cursor-pointer ${
                  router.pathname === item.path
                    ? "bg-blue-600 text-white"
                    : "hover:underline text-blue-600"
                }`}
              >
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

import Footer from "../../components/Footer";
import FranchiseSidebar from "../../components/FranchiseSidebar";

export default function OrdersPage() {
  return (
    <div>
      <div className="md:flex">
        <FranchiseSidebar />
        <main className="flex-1 p-6">
          <h1 className="text-xl font-bold mb-4">📦 Orders</h1>
          <p>Yahan se aap sare placed orders dekh sakte hain.</p>

          <ul className="mt-4 space-y-2">
            <li className="p-3 border rounded">Order #12345 - Pending</li>
            <li className="p-3 border rounded">Order #12346 - Delivered</li>
            <li className="p-3 border rounded">Order #12347 - Cancelled</li>
          </ul>
        </main>
      </div>
      <Footer />
    </div>
  );
}

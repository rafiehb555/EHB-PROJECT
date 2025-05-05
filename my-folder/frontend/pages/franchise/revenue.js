import Footer from "../../components/Footer";
import FranchiseSidebar from "../../components/FranchiseSidebar";

export default function RevenuePage() {
  return (
    <div>
      <div className="md:flex">
        <FranchiseSidebar />
        <main className="flex-1 p-6">
          <h1 className="text-xl font-bold mb-4">💰 Revenue</h1>
          <p>Franchise income overview & analytics.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 border rounded shadow">Total Revenue: $2,500</div>
            <div className="p-4 border rounded shadow">Last 7 Days: $700</div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
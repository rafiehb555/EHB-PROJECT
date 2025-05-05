import Footer from "../../components/Footer";
import FranchiseSidebar from "../../components/FranchiseSidebar";

export default function ComplaintsPage() {
  return (
    <div>
      <div className="md:flex">
        <FranchiseSidebar />
        <main className="flex-1 p-6">
          <h1 className="text-xl font-bold mb-4">⚠️ Complaints</h1>
          <p>Yahan pending aur resolved complaints ka record hoga.</p>

          <ul className="mt-4 space-y-2">
            <li className="p-3 border rounded">Complaint #001 - Pending</li>
            <li className="p-3 border rounded">Complaint #002 - Resolved</li>
          </ul>
        </main>
      </div>
      <Footer />
    </div>
  );
}

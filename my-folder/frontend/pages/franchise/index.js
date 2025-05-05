import Footer from "../../components/Footer";
import FranchiseSidebar from "../../components/FranchiseSidebar";

export default function FranchiseDashboard() {
  return (
    <div>
      <div className="md:flex">
        <FranchiseSidebar />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">🏢 Franchise Dashboard</h1>
          <p>
            Yahan se aap apni sub-franchises, orders, aur complaints manage
            karenge.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="p-4 border rounded shadow">Total Orders</div>
            <div className="p-4 border rounded shadow">Pending Complaints</div>
            <div className="p-4 border rounded shadow">Revenue Stats</div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import FranchiseSidebar from "../../components/FranchiseSidebar";

// export default function FranchiseDashboard() {
//   return (
//     <div>
//       <Navbar />
//       <div className="md:flex">
//         <FranchiseSidebar />
//         <main className="flex-1 p-6">
//           <h1 className="text-2xl font-bold mb-4">🏢 Franchise Dashboard</h1>
//           <p>Yahan se aap apni sub-franchises, orders, aur complaints manage karenge.</p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
//             <div className="p-4 border rounded shadow">Total Orders</div>
//             <div className="p-4 border rounded shadow">Pending Complaints</div>
//             <div className="p-4 border rounded shadow">Revenue Stats</div>
//           </div>
//         </main>
//       </div>
//       <Footer />
//     </div>
//   );
// }

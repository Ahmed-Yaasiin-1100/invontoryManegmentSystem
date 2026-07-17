import {
  Package,
  DollarSign,
  ShoppingCart,
  AlertTriangle,
} from "lucide-react";

import StatCard from "../../components/dashboard/StatCard";
import SalesChart from "../../components/dashboard/SalesChart";


import { useInventory } from "../../context/ InventoryContext";



const Dashboard = () => {

  const { products, purchases } = useInventory();

  const totalProducts = products.length;

  const totalOrders = purchases.length;

  const totalRevenue = purchases.reduce(
    (sum, item) => sum + item.total,
    0
  );

  const lowStock = products.filter(
    (item) => item.stock <= 10
  ).length;

  const stats = [
    {
      title: "Total Products",
      value: totalProducts,
      subtitle: "Products",
      icon: Package,
      gradient: "bg-gradient-to-r from-blue-500 to-indigo-600",
      badgeColor: "bg-blue-100 text-blue-700",
    },
    {
      title: "Revenue",
      value: `$${totalRevenue.toLocaleString()}`,
      subtitle: "Total Revenue",
      icon: DollarSign,
      gradient: "bg-gradient-to-r from-emerald-500 to-green-600",
      badgeColor: "bg-green-100 text-green-700",
    },
    {
      title: "Orders",
      value: totalOrders,
      subtitle: "Purchase Orders",
      icon: ShoppingCart,
      gradient: "bg-gradient-to-r from-orange-500 to-amber-500",
      badgeColor: "bg-orange-100 text-orange-700",
    },
    {
      title: "Low Stock",
      value: lowStock,
      subtitle: "Need Restock",
      icon: AlertTriangle,
      gradient: "bg-gradient-to-r from-red-500 to-rose-600",
      badgeColor: "bg-red-100 text-red-700",
    },
  ];


  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Welcome back, Ahmed 👋
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <StatCard key={item.title} {...item} />
        ))}
      </div>

      {/* Sales Chart + Recent Activity */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Sales Chart */}
        <div className="xl:col-span-2">
          <SalesChart />
        </div>

     
      </div>

     
    </div>
  );
};

export default Dashboard;
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Truck,
  Users,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

  import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
 const menuItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Inventory",
    path: "/inventory",
    icon: Package,
  },
  {
    title: "Purchase Orders",
    path: "/purchase-orders",
    icon: ShoppingCart,
  },
  {
    title: "Suppliers",
    path: "/suppliers",
    icon: Truck,
  },
  {
    title: "Customers",
    path: "/customers",
    icon: Users,
  },
  {
    title: "Reports",
    path: "/reports",
    icon: BarChart3,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];



const Sidebar = () => {



const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  navigate("/login");
};
  return (
    <aside className="w-72 min-h-screen bg-[#0F172A] flex flex-col text-white">

      {/* Logo */}
      <div className="px-7 pt-8 pb-6 border-b border-slate-800">
        <h1 className="text-4xl font-extrabold text-indigo-500">EIMS</h1>

        <p className="text-slate-400 mt-1 text-sm">
          Enterprise Inventory
        </p>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6">

        <div className="space-y-2">

          {menuItems.map((item) => {

            const Icon = item.icon;

            return (
                    <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              `flex w-full items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
                isActive
                  ? "bg-indigo-600 shadow-lg"
                  : "hover:bg-slate-800"
              }`
            }
          >
            <Icon size={22} />
            <span className="font-medium">{item.title}</span>
          </NavLink>
            );
          })}
        </div>

      </nav>

      {/* User */}

      <div className="p-5 border-t border-slate-800">

        <div className="bg-slate-800 rounded-2xl p-4">

          <div className="flex items-center gap-3">

            <img
              src="https://i.pravatar.cc/100"
              alt=""
              className="w-12 h-12 rounded-full"
            />

            <div>

              <h3 className="font-semibold">
                Ahmed Mohamed
              </h3>

              <p className="text-slate-400 text-sm">
                Administrator
              </p>

            </div>

          </div>

          <button
            onClick={handleLogout}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 py-3 transition hover:bg-red-600"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>

      </div>

    </aside>
  );
};

export default Sidebar;
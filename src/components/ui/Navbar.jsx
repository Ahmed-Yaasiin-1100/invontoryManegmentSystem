import { Bell, Grid2x2, Search, Plus } from "lucide-react";

const Navbar = () => {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">

      {/* Search */}

      <div className="relative w-[430px]">

        <Search
          size={18}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search products, orders..."
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        {/* Notification */}

        <button className="relative">

          <Bell size={22} />

          <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-red-500"></span>

        </button>

        {/* Apps */}

        <button className="hover:text-indigo-600 transition">

          <Grid2x2 size={22} />

        </button>

        {/* New Product */}

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700 transition">

          <Plus size={18} />

          New Product

        </button>

        {/* User */}

        <div className="flex items-center gap-3 border-l pl-6">

          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="h-12 w-12 rounded-full"
          />

          <div>

            <h4 className="font-semibold">
              Ahmed Mohamed
            </h4>

            <p className="text-sm text-slate-500">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;
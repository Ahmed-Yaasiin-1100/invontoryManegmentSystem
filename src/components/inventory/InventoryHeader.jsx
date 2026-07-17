import { Search, Plus } from "lucide-react";

const InventoryHeader = ({
  search,
  setSearch,
  category,
  setCategory,
  onAddProduct,
}) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Top */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Product Inventory
          </h1>

          <p className="mt-1 text-slate-500">
            Manage all products in your warehouse.
          </p>
        </div>

        <button
          onClick={onAddProduct}
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          <Plus size={20} />
          Add Product
        </button>
      </div>

      {/* Search + Category */}
      <div className="mt-6 flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none transition focus:border-indigo-500 focus:bg-white"
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:bg-white"
        >
          <option>All Categories</option>
          <option>Laptop</option>
          <option>Phone</option>
          <option>Monitor</option>
        </select>
      </div>
    </div>
  );
};

export default InventoryHeader;
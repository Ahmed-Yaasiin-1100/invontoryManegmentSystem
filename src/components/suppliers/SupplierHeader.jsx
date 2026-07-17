import { Search, Plus } from "lucide-react";

const SupplierHeader = ({
  search,
  setSearch,
  status,
  setStatus,
  onAddSupplier,
}) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Suppliers
          </h1>

          <p className="mt-1 text-slate-500">
            Manage all suppliers.
          </p>
        </div>

        <button
          onClick={onAddSupplier}
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          <Plus size={20} />
          Add Supplier
        </button>

      </div>

      <div className="mt-6 flex flex-col gap-4 md:flex-row">

        <div className="relative flex-1">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search supplier..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none focus:border-indigo-500"
          />

        </div>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-indigo-500"
        >
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

      </div>

    </div>
  );
};

export default SupplierHeader;
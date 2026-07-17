import { Pencil, Trash2 } from "lucide-react";

const CustomerTable = ({
  customers,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 p-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Customers List
        </h2>

        <p className="mt-1 text-slate-500">
          Manage all registered customers.
        </p>
      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left">Customer</th>
              <th className="px-6 py-4 text-left">Phone</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Address</th>
              <th className="px-6 py-4 text-center">Orders</th>
              <th className="px-6 py-4 text-center">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>

            {customers.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="py-10 text-center text-slate-500"
                >
                  No customers found.
                </td>
              </tr>
            ) : (

              customers.map((customer) => (

                <tr
                  key={customer.id}
                  className="border-t border-slate-200 hover:bg-slate-50"
                >

                  <td className="px-6 py-4 font-semibold">
                    {customer.name}
                  </td>

                  <td className="px-6 py-4">
                    {customer.phone}
                  </td>

                  <td className="px-6 py-4">
                    {customer.email}
                  </td>

                  <td className="px-6 py-4">
                    {customer.address}
                  </td>

                  <td className="px-6 py-4 text-center">
                    {customer.orders}
                  </td>

                  <td className="px-6 py-4 text-center">

                    <span
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${
                        customer.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {customer.status}
                    </span>

                  </td>

                  <td className="px-6 py-4">

                    <div className="flex justify-center gap-3">

                      <button
                        onClick={() => onEdit(customer)}
                        className="rounded-lg bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-200"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        onClick={() => onDelete(customer.id)}
                        className="rounded-lg bg-red-100 p-2 text-red-600 transition hover:bg-red-200"
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default CustomerTable;
import { Eye, Pencil, Trash2 } from "lucide-react";

const PurchaseTable = ({
  purchases,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 px-6 py-5">
        <h2 className="text-xl font-bold text-slate-800">
          Purchase Orders
        </h2>
      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-6 py-4 text-left">PO Number</th>

              <th className="px-6 py-4 text-left">Supplier</th>

              <th className="px-6 py-4 text-left">Date</th>

              <th className="px-6 py-4 text-left">Total</th>

              <th className="px-6 py-4 text-left">Status</th>

              <th className="px-6 py-4 text-center">Actions</th>

            </tr>

          </thead>

          <tbody>
            {purchases.length === 0 && (
                <tr>
                    <td
                    colSpan="6"
                    className="py-12 text-center text-slate-500"
                    >
                    No purchase orders found.
                    </td>
                </tr>
            )}
            {purchases.map((purchase) => (

              <tr
                key={purchase.id}
                className="border-t hover:bg-slate-50"
              >

                <td className="px-6 py-4 font-semibold">
                  {purchase.number}
                </td>

                <td className="px-6 py-4">
                  {purchase.supplier}
                </td>

                <td className="px-6 py-4">
                  {purchase.date}
                </td>

                <td className="px-6 py-4 font-semibold">
                  ${purchase.total}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium
                      ${
                        purchase.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : purchase.status === "Received"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }
                    `}
                  >
                    {purchase.status}
                  </span>

                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-3">

                    <button className="rounded-lg bg-indigo-100 p-2 text-indigo-600 hover:bg-indigo-200">
                      <Eye size={18} />
                    </button>

                   <button
                    onClick={() => onEdit(purchase)}
                    className="rounded-lg bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-200"
                    >
                    <Pencil size={18} />
                    </button>

                    <button
                        onClick={() => onDelete(purchase.id)}
                        className="rounded-lg bg-red-100 p-2 text-red-600 transition hover:bg-red-200"
                    >
                    <Trash2 size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default PurchaseTable;
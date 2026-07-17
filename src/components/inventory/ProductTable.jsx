import { Pencil, Trash2 } from "lucide-react";
// import { products } from "../../data/inventoryData";
import { Eye } from "lucide-react";

const ProductTable = ({
  products,
  onEdit,
  onDelete,
  onView,
}) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-6 py-4 text-left">Image</th>
            <th className="px-6 py-4 text-left">Product</th>
            <th className="px-6 py-4 text-left">SKU</th>
            <th className="px-6 py-4 text-left">Category</th>
            <th className="px-6 py-4 text-left">Price</th>
            <th className="px-6 py-4 text-left">Stock</th>
            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-t hover:bg-slate-50">
              <td className="px-6 py-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-12 w-12 rounded-xl object-cover"
                />
              </td>

              <td className="px-6 py-4 font-semibold">{product.name}</td>

              <td className="px-6 py-4">{product.sku}</td>

              <td className="px-6 py-4">{product.category}</td>

              <td className="px-6 py-4">${product.price}</td>

              <td className="px-6 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    product.stock <= 10
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {product.stock}
                </span>
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-center gap-3">

                <button
                    onClick={() => onView(product)}
                    className="rounded-lg bg-indigo-100 p-2 text-indigo-600 transition hover:bg-indigo-200"
                >
                <Eye size={18} />
                </button>  
                
                <button
                    onClick={() => onEdit(product)}
                    className="rounded-lg bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-200"
                >
                <Pencil size={18} />
                </button>

                <button
                    onClick={() => onDelete(product)}
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
  );
};

export default ProductTable;
import { X, Package, Tag, DollarSign, Boxes } from "lucide-react";

const ProductDetails = ({ isOpen, product, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40"
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 z-50 h-screen w-full max-w-md bg-white shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b p-6">
          <h2 className="text-2xl font-bold">
            Product Details
          </h2>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-slate-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Image */}
        <div className="p-6">

          <img
            src={product.image}
            alt={product.name}
            className="h-60 w-full rounded-2xl object-cover"
          />

          <h1 className="mt-6 text-3xl font-bold">
            {product.name}
          </h1>

          <div className="mt-8 space-y-5">

            <div className="flex items-center gap-3">
              <Package className="text-indigo-600" />
              <span>{product.sku}</span>
            </div>

            <div className="flex items-center gap-3">
              <Tag className="text-green-600" />
              <span>{product.category}</span>
            </div>

            <div className="flex items-center gap-3">
              <DollarSign className="text-amber-600" />
              <span>${product.price}</span>
            </div>

            <div className="flex items-center gap-3">
              <Boxes className="text-red-600" />
              <span>{product.stock} Units</span>
            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default ProductDetails;
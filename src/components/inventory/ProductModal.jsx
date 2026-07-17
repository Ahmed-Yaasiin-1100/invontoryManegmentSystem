import { useState, useEffect } from "react";
import { X } from "lucide-react";

const initialFormData = {
  name: "",
  sku: "",
  category: "Laptop",
  price: "",
  stock: "",
  image: "",
};

const ProductModal = ({
  isOpen,
  onClose,
  onSave,
  product,
}) => {
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        sku: product.sku || "",
        category: product.category || "Laptop",
        price: product.price || "",
        stock: product.stock || "",
        image: product.image || "",
      });
    } else {
      setFormData(initialFormData);
    }
  }, [product, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.sku.trim() ||
      formData.price === "" ||
      formData.stock === ""
    ) {
      alert("Please fill all required fields.");
      return;
    }

    onSave({
      ...product,
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
      image:
        formData.image ||
        "https://picsum.photos/60?" + Date.now(),
    });

    setFormData(initialFormData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              {product ? "Edit Product" : "Add New Product"}
            </h2>

            <p className="text-slate-500">
              Fill in the product information.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 transition hover:bg-slate-100"
          >
            <X size={22} />
          </button>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >

          <div>
            <label className="mb-2 block font-medium">
              Product Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="MacBook Pro"
              className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              SKU
            </label>

            <input
              type="text"
              name="sku"
              value={formData.sku}
              onChange={handleChange}
              placeholder="LP1001"
              className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 p-3 outline-none"
            >
              <option>Laptop</option>
              <option>Phone</option>
              <option>Monitor</option>
              <option>Accessories</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Price
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="1200"
              className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Stock
            </label>

            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              placeholder="50"
              className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Image URL
            </label>

            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-indigo-500"
            />
          </div>

          <div className="col-span-1 mt-6 flex justify-end gap-4 md:col-span-2">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              {product ? "Update Product" : "Save Product"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default ProductModal;
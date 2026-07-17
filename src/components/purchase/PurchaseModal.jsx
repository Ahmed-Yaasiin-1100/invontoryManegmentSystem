import { useState, useEffect } from "react";
import { X } from "lucide-react";

const initialData = {
  supplier: "",
  total: "",
  status: "Pending",
};

const PurchaseModal = ({
  isOpen,
  onClose,
  onSave,
  purchase,
}) => {
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    if (purchase) {
      setFormData({
        supplier: purchase.supplier,
        total: purchase.total,
        status: purchase.status,
      });
    } else {
      setFormData(initialData);
    }
  }, [purchase, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.supplier || !formData.total) {
      alert("Please fill all fields.");
      return;
    }

    onSave({
      id: purchase?.id || Date.now(),
      number:
        purchase?.number ||
        `PO-${Math.floor(Math.random() * 9000) + 1000}`,
      supplier: formData.supplier,
      total: Number(formData.total),
      status: formData.status,
      date:
        purchase?.date ||
        new Date().toLocaleDateString(),
    });

    setFormData(initialData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-2xl">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            {purchase ? "Edit Purchase Order" : "New Purchase Order"}
          </h2>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-slate-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="mb-2 block font-medium">
              Supplier
            </label>

            <input
              type="text"
              name="supplier"
              value={formData.supplier}
              onChange={handleChange}
              placeholder="Tech Supplier Ltd"
              className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Total Amount
            </label>

            <input
              type="number"
              name="total"
              value={formData.total}
              onChange={handleChange}
              placeholder="5000"
              className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-500"
            >
              <option>Pending</option>
              <option>Received</option>
              <option>Cancelled</option>
            </select>
          </div>

          <div className="mt-6 flex justify-end gap-4">
            <button
              type="button"
              onClick={() => {
                setFormData(initialData);
                onClose();
              }}
              className="rounded-xl border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              {purchase ? "Update Purchase" : "Save Purchase"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default PurchaseModal;
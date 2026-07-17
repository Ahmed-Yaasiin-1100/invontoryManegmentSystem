import { useState, useEffect } from "react";
import { X } from "lucide-react";

const initialData = {
  company: "",
  contact: "",
  phone: "",
  email: "",
  address: "",
  status: "Active",
};

const SupplierModal = ({
  isOpen,
  onClose,
  onSave,
  supplier,
}) => {
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    if (supplier) {
      setFormData(supplier);
    } else {
      setFormData(initialData);
    }
  }, [supplier, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.company ||
      !formData.contact ||
      !formData.phone ||
      !formData.email
    ) {
      alert("Please fill all required fields.");
      return;
    }

    onSave({
      ...formData,
      id: supplier ? supplier.id : Date.now(),
    });

    setFormData(initialData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">

      <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl">

        <div className="mb-6 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              {supplier ? "Edit Supplier" : "Add Supplier"}
            </h2>

            <p className="text-slate-500">
              Enter supplier information.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-slate-100"
          >
            <X size={22} />
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >

          <div>
            <label className="mb-2 block font-medium">
              Company Name
            </label>

            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Contact Person
            </label>

            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Phone
            </label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block font-medium">
              Address
            </label>

            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block font-medium">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 p-3"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div className="mt-4 flex justify-end gap-4 md:col-span-2">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-300 px-6 py-3 hover:bg-slate-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
            >
              Save Supplier
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default SupplierModal;
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const initialData = {
  name: "",
  phone: "",
  email: "",
  address: "",
  orders: "",
  status: "Active",
};

const CustomerModal = ({
  isOpen,
  onClose,
  onSave,
  customer,
}) => {
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    if (customer) {
      setFormData(customer);
    } else {
      setFormData(initialData);
    }
  }, [customer, isOpen]);

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
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.address
    ) {
      alert("Please fill all required fields.");
      return;
    }

    onSave({
      ...formData,
      id: customer ? customer.id : Date.now(),
      orders: Number(formData.orders),
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
              {customer ? "Edit Customer" : "Add Customer"}
            </h2>

            <p className="text-slate-500">
              Fill in customer information.
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
              Customer Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
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

          <div>
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

          <div>
            <label className="mb-2 block font-medium">
              Total Orders
            </label>

            <input
              type="number"
              name="orders"
              value={formData.orders}
              onChange={handleChange}
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
              Save Customer
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default CustomerModal;
import { Trash2 } from "lucide-react";

const DeleteModal = ({
  isOpen,
  onClose,
  onDelete,
  product,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">

          <Trash2
            size={38}
            className="text-red-600"
          />

        </div>

        <h2 className="mt-6 text-center text-2xl font-bold">
          Delete Product
        </h2>

        <p className="mt-3 text-center text-slate-500">
          Are you sure you want to delete
        </p>

        <p className="mt-1 text-center font-bold text-slate-800">
          {product?.name}
        </p>

        <div className="mt-8 flex gap-4">

          <button
            onClick={onClose}
            className="flex-1 rounded-xl border border-slate-300 py-3 font-semibold hover:bg-slate-100"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="flex-1 rounded-xl bg-red-600 py-3 font-semibold text-white hover:bg-red-700"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
};

export default DeleteModal;
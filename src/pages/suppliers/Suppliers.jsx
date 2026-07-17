import { useState } from "react";

import SupplierHeader from "../../components/suppliers/SupplierHeader";
import SupplierTable from "../../components/suppliers/SupplierTable";
import SupplierModal from "../../components/suppliers/SupplierModal";

const Suppliers = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSupplier, setEditingSupplier] = useState(null);

  const [suppliers, setSuppliers] = useState([
    {
      id: 1,
      company: "Tech Supplier Ltd",
      contact: "Ahmed Ali",
      phone: "+252615000001",
      email: "tech@gmail.com",
      address: "Mogadishu",
      status: "Active",
    },
    {
      id: 2,
      company: "Global Electronics",
      contact: "Mohamed Hassan",
      phone: "+252615000002",
      email: "global@gmail.com",
      address: "Hargeisa",
      status: "Inactive",
    },
  ]);

  const handleSave = (supplier) => {
    if (editingSupplier) {
      setSuppliers(
        suppliers.map((item) =>
          item.id === supplier.id ? supplier : item
        )
      );
    } else {
      setSuppliers([...suppliers, supplier]);
    }

    setEditingSupplier(null);
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this supplier?")) {
      setSuppliers(
        suppliers.filter((item) => item.id !== id)
      );
    }
  };

  const handleEdit = (supplier) => {
    setEditingSupplier(supplier);
    setIsModalOpen(true);
  };

  const filteredSuppliers = suppliers.filter((supplier) => {
    const matchesSearch =
      supplier.company
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      supplier.contact
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      status === "All Status" ||
      supplier.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8">

      <SupplierHeader
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        onAddSupplier={() => {
          setEditingSupplier(null);
          setIsModalOpen(true);
        }}
      />

      <SupplierTable
        suppliers={filteredSuppliers}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <SupplierModal
        isOpen={isModalOpen}
        onClose={() => {
          setEditingSupplier(null);
          setIsModalOpen(false);
        }}
        onSave={handleSave}
        supplier={editingSupplier}
      />

    </div>
  );
};

export default Suppliers;
import { useState } from "react";

import CustomerHeader from "../../components/customers/CustomerHeader";
import CustomerTable from "../../components/customers/CustomerTable";
import CustomerModal from "../../components/customers/CustomerModal";

const Customers = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);

  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Ahmed Mohamed",
      phone: "+252615000001",
      email: "ahmed@gmail.com",
      address: "Mogadishu",
      orders: 12,
      status: "Active",
    },
    {
      id: 2,
      name: "Mohamed Ali",
      phone: "+252615000002",
      email: "mohamed@gmail.com",
      address: "Hargeisa",
      orders: 7,
      status: "Active",
    },
    {
      id: 3,
      name: "Fatima Hassan",
      phone: "+252615000003",
      email: "fatima@gmail.com",
      address: "Bosaso",
      orders: 3,
      status: "Inactive",
    },
  ]);

  const handleSave = (customer) => {
    if (editingCustomer) {
      setCustomers(
        customers.map((item) =>
          item.id === customer.id ? customer : item
        )
      );
    } else {
      setCustomers([...customers, customer]);
    }

    setEditingCustomer(null);
    setIsModalOpen(false);
  };

  const handleEdit = (customer) => {
    setEditingCustomer(customer);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this customer?")) {
      setCustomers(
        customers.filter((item) => item.id !== id)
      );
    }
  };

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      customer.email
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      status === "All Status" ||
      customer.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8">

      <CustomerHeader
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        onAddCustomer={() => {
          setEditingCustomer(null);
          setIsModalOpen(true);
        }}
      />

      <CustomerTable
        customers={filteredCustomers}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <CustomerModal
        isOpen={isModalOpen}
        onClose={() => {
          setEditingCustomer(null);
          setIsModalOpen(false);
        }}
        onSave={handleSave}
        customer={editingCustomer}
      />

    </div>
  );
};

export default Customers;
import { useState } from "react";

import PurchaseHeader from "../../components/purchase/PurchaseHeader";
import PurchaseTable from "../../components/purchase/PurchaseTable";
import PurchaseModal from "../../components/purchase/PurchaseModal";

import { useInventory } from "../../context/ InventoryContext";

const PurchaseOrders = () => {
  const { purchases, setPurchases } = useInventory();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPurchase, setEditingPurchase] = useState(null);

  // Add / Update Purchase
  const savePurchase = (purchaseData) => {
    if (purchaseData.id) {
      setPurchases((prev) =>
        prev.map((item) =>
          item.id === purchaseData.id ? purchaseData : item
        )
      );
    } else {
      setPurchases((prev) => [
        ...prev,
        {
          ...purchaseData,
          id: Date.now(),
        },
      ]);
    }

    setEditingPurchase(null);
    setIsModalOpen(false);
  };

  // Delete Purchase
  const deletePurchase = (id) => {
    if (window.confirm("Delete this purchase?")) {
      setPurchases((prev) =>
        prev.filter((item) => item.id !== id)
      );
    }
  };

  // Edit Purchase
  const editPurchase = (purchase) => {
    setEditingPurchase(purchase);
    setIsModalOpen(true);
  };

  // Search + Filter
  const filteredPurchases = purchases.filter((purchase) => {
    const matchesSearch =
      purchase.number
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      purchase.supplier
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      status === "All Status" ||
      purchase.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8">
      <PurchaseHeader
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        onAddPurchase={() => {
          setEditingPurchase(null);
          setIsModalOpen(true);
        }}
      />

      <PurchaseTable
        purchases={filteredPurchases}
        onEdit={editPurchase}
        onDelete={deletePurchase}
      />

      <PurchaseModal
        isOpen={isModalOpen}
        purchase={editingPurchase}
        onClose={() => {
          setEditingPurchase(null);
          setIsModalOpen(false);
        }}
        onSave={savePurchase}
      />
    </div>
  );
};

export default PurchaseOrders;
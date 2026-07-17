import { createContext, useContext, useState } from "react";

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  // Products
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "MacBook Pro",
      sku: "LP1001",
      category: "Laptop",
      price: 1800,
      stock: 20,
      image: "https://picsum.photos/60?1",
    },
    {
      id: 2,
      name: "iPhone 16",
      sku: "PH1001",
      category: "Phone",
      price: 1200,
      stock: 5,
      image: "https://picsum.photos/60?2",
    },
  ]);

  // Purchase Orders
  const [purchases, setPurchases] = useState([
    {
      id: 1,
      number: "PO-1001",
      supplier: "Tech Supplier Ltd",
      total: 5200,
      status: "Pending",
      date: "10 Jul 2026",
    },
  ]);

  // Suppliers
  const [suppliers, setSuppliers] = useState([]);

  // Customers
  const [customers, setCustomers] = useState([]);

  return (
    <InventoryContext.Provider
      value={{
        products,
        setProducts,

        purchases,
        setPurchases,

        suppliers,
        setSuppliers,

        customers,
        setCustomers,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => {
  return useContext(InventoryContext);
};
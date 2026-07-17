import { useState } from "react";

import InventoryHeader from "../../components/inventory/InventoryHeader";
import ProductTable from "../../components/inventory/ProductTable";
import ProductModal from "../../components/inventory/ProductModal";
import DeleteModal from "../../components/inventory/DeleteModal";
import ProductDetails from "../../components/inventory/ProductDetails";

import { useInventory } from "../../context/ InventoryContext";

const Inventory = () => {
  const { products, setProducts } = useInventory();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteProduct, setDeleteProduct] = useState(null);

  const [detailsOpen, setDetailsOpen] = useState(false);
  const [detailsProduct, setDetailsProduct] = useState(null);

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All Categories"
        ? true
        : product.category === category;

    return matchSearch && matchCategory;
  });

  const saveProduct = (productData) => {
    if (productData.id) {
      // Update Product
      setProducts((prevProducts) =>
        prevProducts.map((item) =>
          item.id === productData.id ? productData : item
        )
      );
    } else {
      // Add Product
      setProducts((prevProducts) => [
        ...prevProducts,
        {
          ...productData,
          id: Date.now(),
        },
      ]);
    }

    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const removeProduct = () => {
    setProducts((prevProducts) =>
      prevProducts.filter(
        (item) => item.id !== deleteProduct.id
      )
    );

    setDeleteModal(false);
    setDeleteProduct(null);
  };

  return (
    <div className="space-y-8">
      <InventoryHeader
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        onAddProduct={() => {
          setSelectedProduct(null);
          setIsModalOpen(true);
        }}
      />

      <ProductTable
        products={filteredProducts}
        onEdit={(product) => {
          setSelectedProduct(product);
          setIsModalOpen(true);
        }}
        onDelete={(product) => {
          setDeleteProduct(product);
          setDeleteModal(true);
        }}
        onView={(product) => {
          setDetailsProduct(product);
          setDetailsOpen(true);
        }}
      />

      <ProductModal
        isOpen={isModalOpen}
        product={selectedProduct}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }}
        onSave={saveProduct}
      />

      <DeleteModal
        isOpen={deleteModal}
        product={deleteProduct}
        onClose={() => {
          setDeleteModal(false);
          setDeleteProduct(null);
        }}
        onDelete={removeProduct}
      />

      <ProductDetails
        isOpen={detailsOpen}
        product={detailsProduct}
        onClose={() => {
          setDetailsOpen(false);
          setDetailsProduct(null);
        }}
      />
    </div>
  );
};

export default Inventory;
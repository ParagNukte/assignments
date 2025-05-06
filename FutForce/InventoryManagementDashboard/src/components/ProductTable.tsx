import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { deleteProduct, fetchProducts } from "../redux/slices/productsSlice";
import type { Product } from "../types/product.types";

const ProductTable = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.allProducts.products
  );
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const filterProducts = useSelector(
    (state: RootState) => state.allProducts.filteredProducts
  );
  const listItems = filterProducts.length > 0 ? filterProducts : products;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id: number) => {
    dispatch(deleteProduct(id));
  };

  const handleBatchDelete = () => {
    selectedRows.forEach((id) => {
      dispatch(deleteProduct(id));
    });
    setSelectedRows([]);
  };

  const toggleSelectRow = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  return (
    <div className="overflow-x-auto bg-white shadow rounded">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th>
              <button
                onClick={handleBatchDelete}
                className="px-4 py-2 text-white bg-red-500 rounded"
              >
                Delete Selected
              </button>
            </th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Stock Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listItems.map((product: Product) => (
            <tr key={product.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(product.id)}
                  onChange={() => toggleSelectRow(product.id)}
                />
              </td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.stock_quantity}</td>
              <td>{product.price}</td>
              <td>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="px-4 py-2 text-white bg-red-500 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;

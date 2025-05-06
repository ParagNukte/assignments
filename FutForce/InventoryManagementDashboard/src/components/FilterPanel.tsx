import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../redux/slices/productsSlice";
import { selectCategories, type Category } from "../redux/slices/categorySlice";

const FilterPanel = () => {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [inStock, setInStock] = useState(false);
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const handleFilter = () => {
    setIsFilterApplied(true);
    dispatch(
      filterProducts({ category: selectedCategory, inStock, isFilterApplied })
    );
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Filters</h2>
      <div>
        <label className="block">Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">All Categories</option>
          {categories &&
            categories.map((category, id) => (
              <option key={id} value={category.value}>
                {category.name}
              </option>
            ))}
        </select>
      </div>
      <div className="mt-4">
        <label className="block">In Stock</label>
        <input
          type="checkbox"
          checked={inStock}
          onChange={(e) => setInStock(e.target.checked)}
          className="mr-2"
        />
        Only show in-stock items
      </div>
      <button
        onClick={handleFilter}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterPanel;

import { Provider } from "react-redux";

import { store } from "./redux/store";
import ProductTable from "./components/ProductTable";
import FilterPanel from "./components/FilterPanel";
import CategoryChart from "./components/CategoryChart";
import ProductFormModal from "./components/ProductFormModal";
import AddProductForm from "./components/AddProduct";

export default function App() {
  return (
    <Provider store={store}>
      <main className="p-4 space-y-4">
        <h1 className="text-2xl font-bold">Inventory Management Dashboard</h1>
        <FilterPanel />
        <AddProductForm />
        <ProductTable />
        <CategoryChart />
        <ProductFormModal />
      </main>
    </Provider>
  );
}

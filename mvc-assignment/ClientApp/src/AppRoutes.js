import { Home } from "./components/Home";
import Products from "./components/Products";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/products',
    element: <Products />
  }
];

export default AppRoutes;

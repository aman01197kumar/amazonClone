import LandingPage from "../src/components/Screens/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Category from "./components/Screens/CategoryBoxes/CategoryBoxes";
import ItemSpecification from "./components/Screens/ItemSpecification/ItemSpecification";
import CartScreen from "./components/Screens/CartScreen/CartScreen";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Outlet />}>
            <Route index element={<LandingPage />} />
            <Route path="category/:category" element={<Category />}>
              <Route
                path="category/:category/:title"
                element={<ItemSpecification />}
              />
            </Route>
            <Route path="cart" element={<Outlet />}>
              <Route index element={<CartScreen />} />
            </Route>
          </Route> */}
          <Route path="/" element={<Outlet />}>
            <Route index element={<LandingPage />} />
            <Route path="category/:category" element={<Outlet />}>
              <Route index element={<Category />} />
            </Route>
            <Route path="category/:category/:title" element={<Outlet />}>
              <Route index element={<ItemSpecification />} />
            </Route>
          </Route>
          <Route path="cart" element={<Outlet />}>
            <Route index element={<CartScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

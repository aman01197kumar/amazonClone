import LandingPage from "../src/components/Screens/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Category from "./components/Screens/CategoryBoxes/CategoryBoxes";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<LandingPage />} />
            <Route path="category/:category" element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

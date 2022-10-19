import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeTemplate from "./containers/HomeTemplate/HomeTemplate";
import AdminTemplate from "./containers/AdminTemplate/AdminTemplate";
import HomePage from "./containers/HomeTemplate/pages/HomePage";
import Product from "./containers/HomeTemplate/pages/Product";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeTemplate />}>
                    <Route path="/" index element={<HomePage />} />
                    <Route path="/product" index element={<Product />} />
                </Route>
                <Route path="/admin" element={<AdminTemplate />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

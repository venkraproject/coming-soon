import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import WA from "./pages/wa";
import IG from "./pages/ig";
import FB from "./pages/fb";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/fb" element={<FB />} />
            <Route path="/wa" element={<WA />} />
            <Route path="/ig" element={<IG />} />
        </Routes>
    </BrowserRouter>
);

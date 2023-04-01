import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "../src/Components/Form";
import HomePage from "./Components/HomePage";
import Show from "./Components/Show";
import Blogs1 from "./Components/Blog1";
import Blogs2 from "./Components/Blog2";
import Blogs3 from "./Components/Blog3";
import Blogs4 from "./Components/Blog4";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/show" element={<Show/>} />
        <Route path="/blogs1" element={<Blogs1/>} />
        <Route path="/blogs2" element={<Blogs2/>} />
        <Route path="/blogs3" element={<Blogs3/>} />
        <Route path="/blogs4" element={<Blogs4/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/About";
import Blog from "./component/Blog";
import Contactus from "./component/Contactus";
import Home from "./component/Home";
import Myform from "./component/Myform";
import Navbar from "./component/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Myform />} />
        <Route path="/login" element={<Myform />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contactus />} />

      </Routes>
    </BrowserRouter>
  );
}

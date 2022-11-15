import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//SCSS
import "./styles/Layout.scss";

// Components
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import Events from "./components/pages/Events";
import Gallery from "./components/pages/Gallery";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="events" element={<Events />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//SCSS
import "./raw.css";
import "./styles/Layout.scss";

// Components
import Navbar from "./components/includes/Navbar";
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import Blog from "./components/pages/Blog";
import Events from "./components/pages/Events";
import Gallery from "./components/pages/Gallery";
import Results from "./components/pages/Results";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="blog" element={<Blog />} />
          <Route path="events" element={<Events />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="results" element={<Results />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

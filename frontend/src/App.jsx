
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./component/layout/navbar.jsx";
import { Home } from "./pages/home/home.jsx";
import { Gallery } from "./pages/gallery/gallery.jsx";
import { Service } from "./pages/service/service.jsx";
import { ClientGallery } from "./pages/clientGallery/clientGallery.jsx";
import { PageNotFound } from "./component/layout/pageNotFound.jsx"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Service />} />
        <Route path="/clientGallery" element={<ClientGallery />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

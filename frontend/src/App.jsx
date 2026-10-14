
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./component/layout/navbar.jsx";
import { Home } from "./pages/home/home.jsx";
import { Gallery } from "./pages/gallery/gallery.jsx";
import { Service } from "./pages/service/service.jsx";
import { ClientGallery } from "./pages/clientGallery/clientGallery.jsx";
import { PageNotFound } from "./component/layout/pageNotFound.jsx"
import { Layout } from "./component/layout/layout.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Service />} />
          <Route path="/clientGallery" element={<ClientGallery />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

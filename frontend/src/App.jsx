import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GalleryProvider } from "./component/GalleryContext.jsx";

import { Home } from "./pages/home/home.jsx";
import Gallery from "./pages/gallery/gallery.jsx";
import { Packages } from "./pages/Packages/Packages.jsx";
import { ClientGallery } from "./pages/clientGallery/clientGallery.jsx";

import AdminLayout from "./component/layout/admin/AdminLayout.jsx";
import AdminDashboard from "./pages/admin/dashboard/AdminDashboard.jsx";
import PublicGalleries from "./pages/admin/publicGallery/PublicGallery.jsx";

import PublicLayout from "./component/layout/public/PublicLayout.jsx";
import ClientLayout from "./component/layout/client/ClientLayout.jsx";
import { PageNotFound } from "./component/layout/pageNotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <GalleryProvider>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/clientGallery" element={<ClientGallery />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="public-galleries" element={<PublicGalleries />} />
          </Route>

          <Route path="/client" element={<ClientLayout />}>
            <Route path="dashboard" element={<h1>Client Dashboard</h1>} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </GalleryProvider>
    </BrowserRouter>
  );
}

export default App;
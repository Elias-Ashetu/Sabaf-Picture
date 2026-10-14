
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./component/layout/navbar.jsx";
import { Home } from "./pages/home/home.jsx";
import { Gallery } from "./pages/gallery/gallery.jsx";
import { Service } from "./pages/service/service.jsx";
import { ClientGallery } from "./pages/clientGallery/clientGallery.jsx";
import { PageNotFound } from "./component/layout/pageNotFound.jsx"

import AdminLayout from "./component/layout/admin/AdminLayout.jsx";
import AdminDashboard from "./pages/admin/dashboard/AdminDashboard.jsx";
import PublicLayout from "./component/layout/public/PublicLayout.jsx";
import ClientLayout from "./component/layout/client/ClientLayout.jsx";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Service />} />
          <Route path="/clientGallery" element={<ClientGallery />} />
        </Route>
        
        
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>

        <Route path="/client" element={<ClientLayout />}>
          <Route path="dashboard" element={<h1>Client Dashboard</h1>} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

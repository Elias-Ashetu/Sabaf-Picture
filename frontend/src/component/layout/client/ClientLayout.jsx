import { Outlet } from "react-router-dom";
import ClientSidebar from "./ClientSidebar";
import ClientNavbar from "./ClientNavbar";

import "./ClientLayout.css";

const ClientLayout = () => {
  return (
    <div className="client-layout">
      <ClientSidebar />
      <main className="client-main">
        <ClientNavbar />
        <div className="client-contents">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default ClientLayout;

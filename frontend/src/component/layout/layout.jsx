

import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import "./Layout.css";

export const Layout = () => {
  return (
    <div className="app-layout">
  
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

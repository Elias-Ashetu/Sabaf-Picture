import { Outlet } from "react-router-dom"

import "./AdminLayout.css"
import AdminSidebar from "./AdminSidebar"
import AdminNavbar from "./AdminNavbar"

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="admin-main">
        <AdminNavbar />
        <div className="admin-contents">
            <Outlet />
        </div>
      </main>
    </div>
  )
}

export default AdminLayout

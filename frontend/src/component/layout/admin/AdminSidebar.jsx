import { Link } from "react-router-dom";
import "./AdminSidebar.css";

const links = [
  { id: 1, label: "Dashboard", url: "/admin/dashboard", icon: "◉" },
  { id: 2, label: "Bookings", url: "/admin/booking", icon: "📋" },
  { id: 3, label: "Clients", url: "/admin/clients", icon: "👤" },
  {id: 4,label: "Public Galleries", url: "/admin/public-galleries", icon: "🖼️"},
  { id: 5, label: "Private Galleries", url: "/admin/ Private Galleries", icon: " ◉"},
  { id: 6, label: "Payments", url: "/admin/payments", icon: "💳" },
  { id: 7, label: "Services", url: "/admin/services", icon: "📷" },
  { id: 8, label: "Notification", url: "/admin/notification", icon: "✉️" },
  { id: 9, label: "Profile", url: "/admin/profile", icon: "⚙️" },
];

const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar">
      <div className="sidebar-header">
        <h1 className="title">Admin Panel</h1>
        <p className="sub-title">SABAF Picture Studio</p>
      </div>

      <nav className="sidebar-nav">
        {links.map((link) => (
          <Link key={link.id} to={link.url} className="sidebar-link">
            <span className="sidebar-icon">{link.icon}</span>
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default AdminSidebar

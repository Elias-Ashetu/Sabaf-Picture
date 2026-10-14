import { Link } from "react-router-dom";
import "./ClientSidebar.css"

const links = [
  { id: 1, label: "Dashboard", url: "/client/dashboard", icon: "◉" },
  { id: 2, label: "Bookings", url: "/client/my-booking", icon: "📋" },
  { id: 4, label: "Galleries", url: "/client/my-gallery", icon: "🖼️" },
  { id: 7, label: "Notification", url: "/client/notification", icon: "✉️" },
  { id: 8, label: "Profile", url: "/client/profile", icon: "⚙️" },
];


const ClientSidebar = () => {
  return (
    <aside className="client-sidebar">
      <header className="sidebar-header">
        <h1 className="title">Client Panel</h1>
        <p className="sub-title">SABAF Picture Studio</p>
      </header>

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

export default ClientSidebar

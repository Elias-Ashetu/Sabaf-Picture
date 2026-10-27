import "./AdminNavbar.css"

const name = "Sabafan Galata";

const AdminNavbar = () => {
    const firstName = name.split(" ")[0];
    
  return (
    <div className="admin-navbar">
      <div className="content">
        <div className="name-logo">{name[0].toUpperCase()}</div>
        <p>{firstName.charAt(0).toUpperCase() + firstName.slice(1)}</p>
      </div>
    </div>
  )
}

export default AdminNavbar

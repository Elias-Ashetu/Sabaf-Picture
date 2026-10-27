import "./ClientNavbar.css"

const name = "Sabafan Galata";

const ClientNavbar = () => {
    const firstName = name.split(" ")[0];
  return (
    <div className="client-navbar">
      <div className="content">
        <div className="name-logo">{name[0].toUpperCase()}</div>
        <p className="firstname">{firstName.charAt(0).toUpperCase() + firstName.slice(1)}</p>
      </div>
    </div>
  )
}

export default ClientNavbar

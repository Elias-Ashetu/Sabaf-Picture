import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.jpg";

export const Navbar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };
  return (
    <>
      <nav className="main-navbar">
       
        <NavLink to="/" className="logo"
         onClick={closeSideBar}>
          <img src={logo} alt="Logo" className="logo-img" />
          <span>
            <b>SABAF</b> <span className="picture"> PICTURE</span>
          </span>
        </NavLink>

       { /* DESKTOP NAVIGATION */}

        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/gallery" className="nav-link">
            Gallery
          </NavLink>
          <NavLink to="/packages" className="nav-link">
            Packages
          </NavLink>
          <NavLink to="/clientGallery" className="nav-link">
            Client Gallery
          </NavLink>
        </div>

        {/* DESKTOP BUTTONS */}

        <div className="nav-buttons">
          <NavLink to="/booking" className="book-btn">
            Book Now
          </NavLink>
          <NavLink to="/admin" className="admin-btn">
            Admin
          </NavLink>
        </div>

        { /* sidebar button */ }

        <button
          className="menu-btn"
          onClick={() => setIsSideBarOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </nav>

      {/* OVERLAY */}

      {isSideBarOpen && (
        <div className="sidebar-overlay" onClick={closeSideBar}>

        </div>
      )}

      <aside className={`sidebar ${isSideBarOpen ? "sidebar-open" : ""}`}>

       { /* SIDEBAR HEADER */}

        <div className="sidebar-header">
          <div className="sidebar-brand">
            <img src={logo} alt="Logo" />
            <span>
              <b>SABAF</b>
              <span className="picture">PICTURE</span>
            </span>
          </div>
          <button
            className="close-btn"
            onClick={closeSideBar}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

       { /* SIDEBAR LINKS */}

        <div className="sidebar-links">
          <NavLink to="/" className="sidebar-link"
           onClick={closeSideBar}>
            Home
          </NavLink>
          <NavLink
            to="/gallery"
            className="sidebar-link"
            onClick={closeSideBar}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/packages"
            className="sidebar-link"
            onClick={closeSideBar}
          >
            Packages
          </NavLink>
          <NavLink
            to="/client-gallery"
            className="sidebar-link"
            onClick={closeSideBar}
          >
            Client Gallery
          </NavLink>
          <NavLink
            to="/booking"
            className="sidebar-link booking-link"
            onClick={closeSideBar}
          >
            Book Now
          </NavLink>
          <NavLink to="/admin" className="sidebar-link" onClick={closeSideBar}>
            Admin
          </NavLink>
        </div>
      </aside>
    </>
  );
};


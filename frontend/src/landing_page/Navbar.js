import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL;

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check once on mount
    const auth = localStorage.getItem("auth");
    setIsLoggedIn(!!auth);

    // Function to handle changes in login/logout
    const handleAuthChange = () => {
      const auth = localStorage.getItem("auth");
      setIsLoggedIn(!!auth);
    };

    // Listen for custom "authChange" event
    window.addEventListener("authChange", handleAuthChange);

    // Cleanup listener when Navbar unmounts
    return () => window.removeEventListener("authChange", handleAuthChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setIsLoggedIn(false);
    // Inform other components (if any) that logout happened
    window.dispatchEvent(new Event("authChange"));
    window.location.href = "/login";
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#fff" }}
      data-bs-theme="light"
    >
      <div className="container p-2">
        <Link className="navbar-brand" to={"/"}>
          <img src="media/images/logo.svg" alt="logo" style={{ width: "25%" }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">

              {/* If not logged in */}
              {!isLoggedIn && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/signup">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}

              {/* If logged in */}
              {isLoggedIn && (
                <>
                  <li className="nav-item">
                    {/* If dashboard is on another subdomain use <a> instead of <Link> */}
                    <a className="nav-link active" href={DASHBOARD_URL} target="_blank" rel="noreferrer">
                      Dashboard
                    </a>
                  </li>
                </>
              )}

              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>

              {isLoggedIn && (
                <li className="nav-item">
                  <button
                    className="btn btn-link nav-link text-danger"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

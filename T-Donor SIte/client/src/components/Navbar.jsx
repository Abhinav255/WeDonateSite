import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Use useLocation to get the current path

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('donorId');
    setIsAuthenticated(false);

    // Show success toast and redirect after it closes
    toast.success('Signout successful', {
      onClose: () => navigate('/signin') // Redirect after toast closes
    });
  };

  return (
    <div className="navbar-main">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <a className="navbar-brand">
            <img src="assets/images/we donate-logo.png" alt="" />
          </a>
        </div>

        <div id="navbar" className="navbar-collapse collapse pull-right">
          <ul className="nav navbar-nav">
            <li>
              <Link
                className={location.pathname === '/' ? 'is-active' : ''}
                to="/"
              >HOME</Link>
            </li>
            <li>
              <Link
                className={location.pathname === '/about' ? 'is-active' : ''}
                to="/about"
              >ABOUT</Link>
            </li>
            <li>
              <Link
                className={location.pathname === '/gallery' ? 'is-active' : ''}
                to="/gallery"
              >GALLERY</Link>
            </li>
            <li>
              <Link
                className={location.pathname === '/contact' ? 'is-active' : ''}
                to="/contact"
              >CONTACT</Link>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <Link
                    className={location.pathname === '/my-donations' ? 'is-active' : ''}
                    to="/my-donations"
                    className="btn btn-primary"
                  >YOUR DONATIONS</Link>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-link signout-button"
                    style={{ marginTop: '15px' }}
                  >
                    <FaSignOutAlt /> Sign Out
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  className={location.pathname === '/signin' ? 'is-active' : ''}
                  to="/signin"
                  className="btn btn-primary"
                >SIGN IN</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <ToastContainer /> {/* Add ToastContainer to display notifications */}
    </div>
  );
}

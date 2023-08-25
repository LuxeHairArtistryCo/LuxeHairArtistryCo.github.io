import { Link as ReactLink } from "react-router-dom";
import { Global } from "../global";
import "./Header.css";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

function Header({ children }: Props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <ReactLink className="navbar-brand" to="/">
            <img src={Global.logo_200px} className="header-image" />
          </ReactLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <ReactLink className="nav-link" to="/about">
                  About
                </ReactLink>
              </li>
              <li className="nav-item">
                <ReactLink className="nav-link" to="/artists">
                  Artists
                </ReactLink>
              </li>
              {/* <li className="nav-item dropdown">
                <ReactLink
                  className="nav-link dropdown-toggle"
                  to="/services"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </ReactLink>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
}

export default Header;

import { Link as ReactLink } from "react-router-dom";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  logoPath: string;
};

function Header({ children, logoPath }: Props) {
  const headerLogoMaxHeight = 75;
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex align-items-center">
          <ReactLink className="navbar-brand" to="/">
            <img
              src={logoPath}
              className="header-image"
              style={{ maxHeight: headerLogoMaxHeight }}
            />
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
              {/* <li className="nav-item">
                <ReactLink
                  className="nav-link dropdown-toggle dropdown-toggle-split"
                  to="/artists"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Artists
                </ReactLink> 

                 <ul className="dropdown-menu">
                  <li>
                    <ReactLink className="dropdown-item" to="/artists/#rhonda">
                      Rhonda
                    </ReactLink>
                  </li>
                  <li>
                    <ReactLink className="dropdown-item" to="/artists/#ria">
                      Ria
                    </ReactLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <ReactLink
                      className="dropdown-item"
                      to="/artists/#kim-ferguson"
                    >
                      Kim
                    </ReactLink>
                  </li>
                </ul> 
              </li>*/}
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
}

export default Header;

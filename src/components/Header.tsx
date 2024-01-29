import { Link as ReactLink } from "react-router-dom";
import { ReactNode } from "react";
import { Colors } from "../constants";

type Props = {
  children?: ReactNode;
  className?: string;
  logoPath: string;
  logoMaxHeight?: number;
};

function Header({ children, className, logoPath, logoMaxHeight }: Props) {
  var headerLogoMaxHeight: number;
  logoMaxHeight !== undefined
    ? (headerLogoMaxHeight = logoMaxHeight)
    : (headerLogoMaxHeight = 75);

  return (
    <div className={className}>
      <div className="container-fluid mx-0 px-0 mb-0">
        <nav
          className="navbar navbar-dark navbar-expand-md px-4"
          style={{ background: Colors.dark }}
        >
          <ReactLink className="navbar-brand" to="/">
            <img
              src={logoPath}
              alt="Luxe Hair Artistry Co."
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
                <ReactLink className="nav-link text-light" to="/artists">
                  Artists
                </ReactLink>
              </li>

              <li className="nav-item">
                <ReactLink className="nav-link text-light" to="/about">
                  About
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
        </nav>
        {children}
      </div>
    </div>
  );
}

export default Header;

import { ReactNode } from "react";

import "./services.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

type PropTypes = {
  children?: ReactNode;
  img_src: string;
};

function Services({ children, img_src }: PropTypes) {
  return (
    <div className="services-container">
      <HelmetProvider>
        <Helmet>
          <title>Services - Luxe Hair Artistry Co</title>
          <meta
            property="og:title"
            content="Services - Luxe Hair Artistry Co Hair Salon Nair Aesthetician"
          />
        </Helmet>
      </HelmetProvider>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img_src} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://www.fresha.com/a/luxe-hair-artistry-co-st-thomas-20-churchill-crescent-d3m2puen"
        target="_blank"
        rel="noreferrer noopener"
        className="services-link button"
      >
        Book Now with XXX
      </a>
      {children}
    </div>
  );
}

export default Services;

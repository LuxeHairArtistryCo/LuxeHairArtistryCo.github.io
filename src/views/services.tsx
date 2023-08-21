import { ReactNode } from "react";

import { Helmet } from "react-helmet";

import "./services.css";

type PropTypes = {
  children?: ReactNode;
};

const Services = (props: PropTypes) => {
  return (
    <div className="services-container">
      <Helmet>
        <title>
          Services - Luxe Hair Artistry Co Hair Salon Nair Aesthetician
        </title>
        <meta
          property="og:title"
          content="Services - Luxe Hair Artistry Co Hair Salon Nair Aesthetician"
        />
      </Helmet>
      <a
        href="https://www.fresha.com/a/luxe-hair-artistry-co-st-thomas-20-churchill-crescent-d3m2puen"
        target="_blank"
        rel="noreferrer noopener"
        className="services-link button"
      >
        Book Now with XXX
      </a>
    </div>
  );
};

export default Services;

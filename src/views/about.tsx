import { ReactNode } from "react";

import "./about.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

type PropTypes = {
  children?: ReactNode;
};

function About({ children }: PropTypes) {
  return (
    <div className="about-container">
      <HelmetProvider>
        <Helmet>
          <title>About - Luxe Hair Artistry Co</title>
          <meta
            property="og:title"
            content="About - Luxe Hair Artistry Co Hair Salon Nair Aesthetician"
          />
        </Helmet>
      </HelmetProvider>
      {children}
    </div>
  );
}

export default About;

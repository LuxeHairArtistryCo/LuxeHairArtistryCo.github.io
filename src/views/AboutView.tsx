import { ReactNode } from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";

type PropTypes = {
  children?: ReactNode;
};

function AboutView({ children }: PropTypes) {
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
      <div className="container d-flex flex-column px-3">
        <h1>About Us</h1>
        <p className="mx-3 pt-3">We are a team!</p>
        {children}
      </div>
    </div>
  );
}

export default AboutView;

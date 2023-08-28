import { ReactNode } from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";
import HeroImage from "../components/HeroImage";
import InstagramCarousel from "../components/InstagramCarousel";

type PropTypes = {
  children?: ReactNode;
};

function HomeView({ children }: PropTypes) {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Luxe Hair Artistry Co</title>
          <meta
            property="og:title"
            content="Luxe Hair Artistry Co Hair Salon Nair Aesthetician"
          />
        </Helmet>
      </HelmetProvider>
      <div className="container d-flex flex-column px-3">
        <h1>Welcome to Luxe</h1>
        {/* <p className="mx-3 pt-3">We offer many services including</p> */}

        {children}
      </div>
      <HeroImage bodyClassName="container d-flex flex-column px-3 py-4" />
      <div className="container d-flex flex-column px-3">
        <InstagramCarousel />
        {children}
      </div>
    </>
  );
}

export default HomeView;

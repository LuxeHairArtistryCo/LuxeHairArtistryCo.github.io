import { ReactNode } from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";
import HeroImage from "../components/HeroImage";
import InstagramCarousel from "../components/InstagramCarousel";
import { Colors, Images } from "../global";
import { Link as ReactLink } from "react-router-dom";

type PropTypes = {
  children?: ReactNode;
};

function HomeView({ children }: PropTypes) {
  const heroImageMinHeight = window.innerWidth >= 768 ? "60vh" : "40vh";
  console.log(window.innerWidth);
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
      <HeroImage
        backgroundImagePath={Images.interior_photos[0]}
        minHeight={heroImageMinHeight}
      >
        <div
          className="container d-flex flex-column px-3 my-4"
          style={{ minHeight: heroImageMinHeight }}
        >
          <h1 className="mb-4">Welcome to Luxe</h1>
          <h5></h5>

          <div className="d-flex flex-col justify-content-center my-auto pb-3">
            <ReactLink
              className="btn text-light"
              to="/artists"
              role="button"
              style={{
                whiteSpace: "pre-line",
                background: Colors.primary,
                border: Colors.primary,
              }}
            >
              <h6 className="p-1 m-0">See Our Artists</h6>
            </ReactLink>
          </div>
        </div>
      </HeroImage>
      <div className="container d-flex flex-column px-3">
        <InstagramCarousel />
        {children}
      </div>
    </>
  );
}

export default HomeView;

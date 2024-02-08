import { ReactNode } from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";
import HeroImage from "../components/HeroImage";
import InstagramCarousel from "../components/InstagramCarousel";
import { Link as ReactLink } from "react-router-dom";
import { Colors, Images } from "../constants";

type PropTypes = {
  children?: ReactNode;
};

function HomeView({ children }: PropTypes) {
  const heroImageMinHeight = window.innerWidth >= 768 ? "60vh" : "40vh";

  const getRandomImage = (imageArray: string[]) => {
    let randIndex = Math.floor(Math.random() * imageArray.length);
    return imageArray[randIndex];
  };

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
        backgroundImagePath={getRandomImage(Images.hero_images)}
        minHeight={heroImageMinHeight}
      >
        <div
          className="container d-flex flex-column px-3 my-4"
          style={{ minHeight: heroImageMinHeight }}
        >
          <h1 className="mb-4">Welcome to Luxe Hair Artistry Co.</h1>
          <h6>
            View our talented hairstylists and aestheticians to book your next
            appointment.
          </h6>

          <div className="d-flex flex-col justify-content-center my-5">
            <ReactLink
              className="btn text-light"
              to="/hairstylists"
              role="button"
              style={{
                whiteSpace: "pre-line",
                background: Colors.primary,
                border: Colors.primary,
              }}
            >
              <h6 className="p-1 m-0">See Our Hairstylists</h6>
            </ReactLink>
          </div>
          <div className="d-flex flex-col justify-content-center">
            <ReactLink
              className="btn text-light"
              to="/aestheticians"
              role="button"
              style={{
                whiteSpace: "pre-line",
                background: Colors.primary,
                border: Colors.primary,
              }}
            >
              <h6 className="p-1 m-0">See Our Aestheticians</h6>
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

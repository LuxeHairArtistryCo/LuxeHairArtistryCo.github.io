import { ReactNode } from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";
import ArtistCardGroup from "../components/ArtistCardGroup";
import { artists_aestheticians } from "../constants_artists";

type PropTypes = {
  children?: ReactNode;
};

function AestheticiansView({ children }: PropTypes) {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Aestheticians - The Orchid Room - Luxe Hair Artisty Coo</title>
          <meta
            property="og:title"
            content="Aestheticians - The Orchid Room - Luxe Hair Artisty Co"
          />
        </Helmet>
      </HelmetProvider>
      <div className="container d-flex flex-column px-3 my-4">
        <h1>Meet Our Aestheticians</h1>
        <p className="mx-3 pt-3"></p>
        <ArtistCardGroup artistList={artists_aestheticians} />
        <i className="mx-3 pt-3">
          <small>Prices are subject to change.</small>
        </i>
        {children}
      </div>
    </>
  );
}

export default AestheticiansView;

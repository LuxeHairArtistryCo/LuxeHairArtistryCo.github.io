import { ReactNode } from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";
import ArtistCardGroup from "../components/ArtistCardGroup";
import { artists_hairstylists } from "../constants_artists";

type PropTypes = {
  children?: ReactNode;
};

function HairstylistsView({ children }: PropTypes) {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Hairstylists - Luxe Hair Artistry Co</title>
          <meta
            property="og:title"
            content="Hairstylists - Luxe Hair Artistry Co"
          />
        </Helmet>
      </HelmetProvider>
      <div className="container d-flex flex-column px-3 my-4">
        <h1>Meet Our Hairstylists</h1>
        <p className="mx-3 pt-3"></p>
        <ArtistCardGroup artistList={artists_hairstylists} />
        <i className="mx-3 pt-3">
          <small>Prices are subject to change.</small>
        </i>
        {children}
      </div>
    </>
  );
}

export default HairstylistsView;

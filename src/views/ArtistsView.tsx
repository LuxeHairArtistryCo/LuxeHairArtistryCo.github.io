import { ReactNode } from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";
import ArtistCardGroup from "../components/ArtistCardGroup";
import {
  artists_aestheticians,
  artists_hairstylists,
} from "../constants_artists";

type PropTypes = {
  children?: ReactNode;
};

function ArtistsView({ children }: PropTypes) {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Artists - Luxe Hair Artistry Co</title>
          <meta
            property="og:title"
            content="Artists - Luxe Hair Artistry Co Hair Salon Nair Aesthetician"
          />
        </Helmet>
      </HelmetProvider>
      <div className="container d-flex flex-column px-3 my-4">
        <h1>Meet Our Artists</h1>
        <p className="mx-3 pt-3">
          We offer a wide variety of serivces between our hairstylists and
          in-house aesthetician.
        </p>
        <ArtistCardGroup artistList={artists_hairstylists} />
        <h3 className="mt-4" id="orchid-room">
          The Orchid Room at Luxe
        </h3>
        <ArtistCardGroup artistList={artists_aestheticians} />
        <i className="mx-3 pt-3">
          <small>Prices are subject to change.</small>
        </i>
        {children}
      </div>
    </>
  );
}

export default ArtistsView;

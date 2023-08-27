import { ReactNode } from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";
import ArtistCardGroup from "../components/ArtistCardGroup";
import { Global } from "../global";

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
      <div className="container d-flex flex-column px-3">
        <h1>Meet Our Artists</h1>
        <p className="mx-3 pt-3">We are a team!</p>
        <ArtistCardGroup artistList={Global.artists} />
        {children}
      </div>
    </>
  );
}

export default ArtistsView;

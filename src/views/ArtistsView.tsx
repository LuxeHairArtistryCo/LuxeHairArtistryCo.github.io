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
      <div className="container d-flex align-items-center justify-content-center">
        <ArtistCardGroup artistList={Global.artists} />
        {children}
      </div>
    </>
  );
}

export default ArtistsView;

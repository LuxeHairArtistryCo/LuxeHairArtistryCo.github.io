import { ReactNode } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ArtistCardGroup from "../components/ArtistCardGroup";
import { artists_hairstylists } from "../constants_artists";
import { Colors } from "../constants";
import React from "react";

type PropTypes = {
  children?: ReactNode;
};

function HairstylistsView({ children }: PropTypes) {
  const filteredHairstylists = artists_hairstylists.filter(artist => artist.isAcceptingNewClients);

  const [key, setKey] = React.useState(0);

  function toggleFilterButtonText() {
    var button = document.getElementById("filterbutton");
    if (button == null)
      return;
    else if (button.ariaPressed === 'false') {
      button.innerHTML = "Filter by Aritsts Accepting New Clients";
      button.ariaPressed = 'true';
    }
    else {
      button.innerHTML = "Remove Filter";
      button.ariaPressed = 'false';
    }
    setKey(prevKey => prevKey + 1);
  }

  function getFilterButtonState(): boolean {
    var button = document.getElementById("filterbutton");
    if (button == null)
      return false;
    else if (button.ariaPressed === 'false') {
      return true;
    }
    else {
      return false;
    }
  }

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
        <div className="d-flex align-items-center justify-content-start pt-2 text-light">
          <button
            className="btn text-light py-1 py-md-2 px-3"
            id="filterbutton"
            role="button"
            style={{
              whiteSpace: "pre-line",
              background: Colors.primary,
              border: Colors.primary,
            }}
            aria-pressed="false"
            onClick={() => toggleFilterButtonText()}
          >
            {"Filter by Aritsts Accepting New Clients"}
          </button>
        </div>
        {!getFilterButtonState() && <ArtistCardGroup artistList={artists_hairstylists} />}
        {getFilterButtonState() && <ArtistCardGroup artistList={filteredHairstylists} />}
        <i className="mx-3 pt-3">
          <small>Prices are subject to change.</small>
        </i>
        {children}
      </div>
    </>
  );
}

export default HairstylistsView;

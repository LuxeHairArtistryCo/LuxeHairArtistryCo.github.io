import { ReactNode } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ArtistCardGroup from "../components/ArtistCardGroup";
import { artists_aestheticians } from "../constants_artists";
import { Colors } from "../constants";
import React from "react";

type PropTypes = {
  children?: ReactNode;
};

function AestheticiansView({ children }: PropTypes) {
  const filteredAestheticians = artists_aestheticians.filter(artist => artist.isAcceptingNewClients);

  const [, setKey] = React.useState(0);

  function toggleFilterButtonText() {
    var button = document.getElementById("filterbutton");
    if (button == null)
      return;
    else if (button.ariaPressed === 'true') {
      button.innerHTML = "Filter by Aritsts Accepting New Clients";
      button.ariaPressed = 'false';
    }
    else {
      button.innerHTML = "Remove Filter";
      button.ariaPressed = 'true';
    }
    setKey(prevKey => prevKey + 1);
  }

  function getFilterButtonState(): boolean {
    var button = document.getElementById("filterbutton");
    if (button == null)
      return false;
    else if (button.ariaPressed === 'true') {
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
          <title>Aestheticians - The Orchid Room - Luxe Hair Artisty Co</title>
          <meta
            property="og:title"
            content="Aestheticians - The Orchid Room - Luxe Hair Artisty Co"
          />
        </Helmet>
      </HelmetProvider>
      <div className="container d-flex flex-column px-3 my-4">
        <h1>Meet Our Aestheticians</h1>
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
        {!getFilterButtonState() && <ArtistCardGroup artistList={artists_aestheticians} />}
        {getFilterButtonState() && <ArtistCardGroup artistList={filteredAestheticians} />}
        <i className="mx-3 pt-3">
          <small>Prices are subject to change.</small>
        </i>
        {children}
      </div>
    </>
  );
}

export default AestheticiansView;

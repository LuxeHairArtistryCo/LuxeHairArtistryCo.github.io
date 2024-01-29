import { ReactNode } from "react";
import ServiceListGroup from "./ServiceListGroup";
import { Link as ReactLink } from "react-router-dom";
import { Colors, Images } from "../constants";
import { Artist } from "../datatypes";

interface Props {
  children?: ReactNode;
  className?: string;
  artistList: Artist[];
}

function ArtistCardGroup({ children, className, artistList }: Props) {
  const serviceListButtonText = "See Full Service List";

  const getArtistId = (artist: Artist) => {
    return artist.name.split(" ")[0].toLowerCase();
  };

  const getArtistImagePath = (artist: Artist) => {
    return (
      Images.artist_headshot_path +
      artist.name.replace(" ", "_").toLowerCase() +
      Images.artist_headshot_filetype
    );
  };

  const getServiceListButton = (artist: Artist) => {
    var isInternalServiceList =
      artist.services !== undefined && artist.services.length !== 0;
    var isExternalServiceList = artist.externalServicesLink !== undefined;
    var ServiceListButton: JSX.Element;

    if (isInternalServiceList && isExternalServiceList) {
      throw new Error("Two Service Lists configured for " + artist.name);
    }
    if (!isInternalServiceList && !isExternalServiceList) {
      throw new Error("No Service Lists configured for " + artist.name);
    }
    if (isInternalServiceList) {
      ServiceListButton = (
        <button
          className="btn text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#dropdown" + getArtistId(artist)}
          aria-expanded="false"
          style={{
            background: Colors.dark,
            border: Colors.dark,
          }}
        >
          {serviceListButtonText}
        </button>
      );
    } else {
      ServiceListButton = (
        <ReactLink
          className="btn text-light"
          to={
            artist.externalServicesLink !== undefined
              ? artist.externalServicesLink
              : ""
          }
          role="button"
          target="_blank"
          style={{
            whiteSpace: "pre-line",
            background: Colors.dark,
            border: Colors.dark,
          }}
        >
          {serviceListButtonText}
        </ReactLink>
      );
    }

    return (
      <div className="col-md-4 d-flex align-items-center justify-content-center py-2">
        {ServiceListButton}
      </div>
    );
  };

  return (
    <div className={className}>
      {artistList.map((artist, index) => (
        <div
          className="my-3 rounded-4"
          key={getArtistId(artist)}
          id={getArtistId(artist)}
          style={{
            background: Colors.tertiary,
            borderWidth: 1,
            borderColor: Colors.dark_a10,
            borderStyle: "solid",
            overflow: "hidden",
          }}
        >
          <div
            className={
              "row g-0 d-flex " + (index % 2 === 1 && "flex-row-reverse")
            }
          >
            <div
              className="col-md-4 col-lg-3 d-flex align-items-center justify-content-center"
              style={{
                background: Colors.secondary,
              }}
            >
              {/* Artist images on mobile */}
              <img
                className="img-fluid d-md-none"
                src={getArtistImagePath(artist)}
                alt={artist.name}
                style={{
                  height: 250,
                  objectFit: "cover",
                }}
              />
              {/* Artist images on desktop */}
              <img
                className="img-fluid d-none d-md-block"
                src={getArtistImagePath(artist)}
                alt={artist.name}
                style={{
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="col-md d-flex flex-column justify-content-between">
              {/* Card Header */}
              <div
                className="px-3 py-1 text-light"
                style={{
                  background: Colors.primary,
                }}
              >
                <h5 className="m-0 mt-1" style={{ whiteSpace: "pre-line" }}>
                  {artist.name}
                </h5>
                <h6 className="m-0 mb-1" style={{ whiteSpace: "pre-line" }}>
                  {artist.position}
                </h6>
              </div>
              {/* Card Body */}
              <div
                className="flex-fill px-3 py-1"
                style={{
                  background: Colors.tertiary,
                  borderWidth: 1,
                  borderColor: Colors.dark_a10,
                  borderStyle: "solid",
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                }}
              >
                <p className="m-0" style={{ whiteSpace: "pre-line" }}>
                  {artist.bio}
                </p>
              </div>
              {/* Card Footer */}
              <div
                className="px-3 py-1 text-light"
                style={{
                  background: Colors.secondary,
                  borderWidth: 1,
                  borderColor: Colors.dark_a10,
                  borderStyle: "solid",
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                }}
              >
                <div className="row d-flex justify-content-center mx-0">
                  <div className="col-md-4 d-flex align-items-center justify-content-center py-2">
                    <ReactLink
                      className="btn text-light"
                      to={artist.primaryButtonLink}
                      role="button"
                      target="_blank"
                      style={{
                        whiteSpace: "pre-line",
                        background: Colors.primary,
                        border: Colors.primary,
                      }}
                    >
                      {artist.primaryButtonText}
                    </ReactLink>
                  </div>
                  {artist.secondaryButtonLink !== undefined && (
                    <div className="col-md-4 d-flex align-items-center justify-content-center py-2">
                      <ReactLink
                        className="btn text-light"
                        to={artist.secondaryButtonLink}
                        role="button"
                        target="_blank"
                        style={{
                          whiteSpace: "pre-line",
                          background: Colors.primary,
                          border: Colors.primary,
                        }}
                      >
                        {artist.secondaryButtonText}
                      </ReactLink>
                    </div>
                  )}
                  {getServiceListButton(artist)}
                </div>
              </div>
            </div>
          </div>
          {artist.services !== undefined && artist.services.length !== 0 && (
            <div
              className="row g-0 collapse"
              id={"dropdown" + getArtistId(artist)}
              style={{ background: Colors.tertiary }}
            >
              <ServiceListGroup
                className="col mb-1"
                artistID={getArtistId(artist)}
                serviceList={artist.services}
              />
            </div>
          )}
        </div>
      ))}
      {children}
    </div>
  );
}

export default ArtistCardGroup;

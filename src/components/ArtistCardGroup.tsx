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
  const serviceListButtonTextSeeList = "See Full Service List";
  const serviceListButtonTextHideList = "Hide Service List";

  function toggleServiceListButtonText(artist: Artist) {
    var button = document.getElementById("servicelistbutton" + getArtistId(artist));
    if (button == null)
      return;
    else if (button.ariaExpanded === 'false')
      button.innerHTML = serviceListButtonTextSeeList;
    else
      button.innerHTML = serviceListButtonTextHideList;
  }

  const getArtistId = (artist: Artist) => {
    return artist.name.replace(" ", "").toLowerCase();
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
          className="btn text-light p-1 p-md-2"
          id={"servicelistbutton" + getArtistId(artist)}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={".multi-collapse" + getArtistId(artist)}
          aria-controls={"dropdown_" + getArtistId(artist) + "_servicelist" + " " + "dropdown_" + getArtistId(artist) + "_description"}
          aria-expanded="false"
          onClick={() => toggleServiceListButtonText(artist)}
          style={{
            background: Colors.dark,
            border: Colors.dark,
          }}
        >
          {serviceListButtonTextSeeList}
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
          {serviceListButtonTextSeeList}
        </ReactLink>
      );
    }

    return (
      <div className="col-md-4 d-flex align-items-center justify-content-center py-2">
        {ServiceListButton}
      </div>
    );
  };

  const getFormattedArtistBio = (artist: Artist) => {
    if (!artist.bio) {
      return <p></p>;
    }
    var bioParagraphs = artist.bio?.split("\n");

    var bioParagraphElements: JSX.Element[] = [];
    bioParagraphs.forEach((paragraph) => {
      if (paragraph.toUpperCase().startsWith("SPECIAL")) {
        bioParagraphElements.push(
          <p className="m-0">
            <b>
              <i>{paragraph}</i>
            </b>
          </p>
        );
      } else {
        bioParagraphElements.push(<p className="m-0">{paragraph}</p>);
      }
    });
    return (
      <>
        {bioParagraphElements.map((element, index) => (
          <div key={getArtistId(artist) + index}>{element}</div>
        ))}
      </>
    );
  };

  const getBookingButtons = (artist: Artist) => {
    return <div
      className="px-2 py-2 py-md-1"
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
        {artist.isAcceptingNewClients &&
          <>
            <div className="col-md-4 d-flex align-items-center justify-content-center py-2 text-light">
              <ReactLink
                className="btn text-light p-1 p-md-2"
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
            {artist.secondaryButtonLink !== undefined &&
              <div className="col-md-4 d-flex align-items-center justify-content-center py-2 text-light">
                <ReactLink
                  className="btn text-light p-1 p-md-2"
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
            }
          </>
        }
        {!artist.isAcceptingNewClients &&
          <div className="col-md-4 d-flex align-items-center justify-content-center py-2 text-dark">
            <p
              className="p-1 p-md-2 m-0 rounded-2 text-center"
              style={{
                whiteSpace: "pre-line",
                background: Colors.secondary,
                border: Colors.secondary,
                fontWeight: "bold",
              }}>
              No Longer Accepting New Clients
            </p>
          </div>
        }
        {getServiceListButton(artist)}
      </div>
    </div>
  }

  return (
    <div className={className}>
      {artistList.map((artist, index) => (
        <div
          className="my-3 rounded-4"
          key={"artistCardGroup" + getArtistId(artist)}
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
              "row g-0 d-flex justify-content-center " + (index % 2 === 1 && "flex-row-reverse")
            }
          >
            {/* Artist images on desktop */}
            <div
              className="col-md-4 col-lg-3 d-none d-md-block align-items-center justify-content-center"
              style={{
                background: Colors.secondary,
              }}
            >
              <img
                className="img-fluid"
                src={getArtistImagePath(artist)}
                alt={artist.name}
                style={{
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Artist Image and Header and Booking Button on Mobile */}
            <div className={"row d-flex px-0 align-items-start d-md-none " + (index % 2 === 1 && "flex-row-reverse")}
              style={{
                background: Colors.secondary,
              }}>
              {/* Artist images on mobile */}
              <div
                className="col-5 px-0 align-items-center justify-content-center"
                style={{
                  background: Colors.secondary,
                }}
              >
                <img
                  className="img-fluid"
                  src={getArtistImagePath(artist)}
                  alt={artist.name}
                  // style={{
                  //   height: 250,
                  //   objectFit: "cover",
                  //   aspectRatio: "1x1",
                  // }}
                  style={{
                    objectFit: "cover",
                    overflow: "hidden",
                    minWidth: "100%",
                  }}
                />
              </div>

              <div className="col px-0">
                {/* Card Header on Mobile */}
                <div className="m-0 p-0" style={{ overflow: "hidden" }}>
                  <div
                    className="px-2 py-1 text-light"
                    style={{
                      background: Colors.primary,
                    }}
                  >
                    <h5 className="m-0 mt-1 ms-1 ms-md-0" style={{ whiteSpace: "pre-line" }}>
                      {artist.name}
                    </h5>
                    <h6 className="m-0 mb-1 ms-1 ms-md-0" style={{ whiteSpace: "pre-line" }}>
                      {artist.position}
                    </h6>
                  </div>

                  {/* Booking Buttons on Mobile */}
                  {getBookingButtons(artist)}
                </div>
              </div>
            </div>


            <div className="col-md d-flex flex-column justify-content-between">
              {/* Card Header on Desktop */}
              <div
                className="px-3 py-1 text-light d-none d-md-block"
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

              {/* Card Body for Desktop*/}
              <div
                className="flex-fill px-3 py-1 d-none d-md-block"
                id={"dropdown_" + getArtistId(artist) + "_description"}
                data-parent={"#" + getArtistId(artist)}
                style={{
                  background: Colors.tertiary,
                  borderWidth: 1,
                  borderColor: Colors.dark_a10,
                  borderStyle: "solid",
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                }}
              >
                <div className="m-0" style={{ whiteSpace: "pre-line" }}>
                  {getFormattedArtistBio(artist)}
                </div>
              </div>
              {/* Card Body for Mobile */}
              <div
                className={"flex-fill px-3 py-1 d-md-none collapse show multi-collapse" + getArtistId(artist)}
                id={"dropdown_" + getArtistId(artist) + "_description"}
                data-parent={"#" + getArtistId(artist)}
                style={{
                  background: Colors.tertiary,
                  borderWidth: 1,
                  borderColor: Colors.dark_a10,
                  borderStyle: "solid",
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                }}
              >
                <div className="m-0" style={{ whiteSpace: "pre-line" }}>
                  {getFormattedArtistBio(artist)}
                </div>
              </div>
              {/* Booking Buttons on Desktop */}
              <div className="d-none d-md-block">
                {getBookingButtons(artist)}
              </div>
            </div>
          </div>
          {artist.services !== undefined && artist.services.length !== 0 && (
            <div
              className={"row g- collapse multi-collapse" + getArtistId(artist)}
              id={"dropdown_" + getArtistId(artist) + "_servicelist"}
              data-parent={"#" + getArtistId(artist)}
              style={{
                background: Colors.tertiary,
              }}
            >
              <ServiceListGroup
                className="col mb-1"
                artistID={"serviceListGroup" + getArtistId(artist)}
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

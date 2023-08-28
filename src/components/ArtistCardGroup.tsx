import { ReactNode } from "react";
import ServiceListGroup, { ServiceListGroupNS } from "./ServiceListGroup";
import { Link as ReactLink } from "react-router-dom";

export namespace ArtistCardGroupNS {
  export type Artist = {
    id: string;
    name: string;
    position: string;
    bio?: string;
    imagePath: string;
    bookNowButtonText: string;
    bookNowButtonLink: string;
    secondaryBookNowButtonText?: string;
    secondaryBookNowButtonLink?: string;
    services?: ServiceListGroupNS.Service[];
  };
}

interface Props {
  children?: ReactNode;
  className?: string;
  artistList: ArtistCardGroupNS.Artist[];
}

function ArtistCardGroup({ children, className, artistList }: Props) {
  return (
    <div className={className}>
      {artistList.map((artist, index) => (
        <div
          className="card my-3"
          key={artist.id}
          style={{ background: "#DAE7E1" }}
        >
          <div
            className={
              "row g-0 d-flex " + (index % 2 === 1 && "flex-row-reverse")
            }
          >
            <div className="col-md-4 border-start border-end">
              <img className="card-img" src={artist.imagePath} />
            </div>

            <div className="col-md-8 d-flex flex-column justify-content-between">
              <div
                className="card-header text-light"
                style={{
                  background: "#3d5949",
                }}
              >
                <h5 className="card-title">{artist.name}</h5>
                <h6 className="card-text">{artist.position}</h6>
              </div>
              <div className="card-body">
                <p className="card-text">{artist.bio}</p>
              </div>
              <div className="card-footer">
                <div className="row d-flex justify-content-center mx-0">
                  <div className="col-md-4 d-flex align-items-center justify-content-center py-2">
                    <ReactLink
                      className="btn btn-primary"
                      to={artist.bookNowButtonLink}
                      role="button"
                      target="_blank"
                      style={{
                        whiteSpace: "pre-line",
                        background: "#3d5949",
                        border: "#3d5949",
                      }}
                    >
                      {artist.bookNowButtonText}
                    </ReactLink>
                  </div>
                  {artist.secondaryBookNowButtonLink !== undefined && (
                    <div className="col-md-4 d-flex align-items-center justify-content-center py-2">
                      <ReactLink
                        className="btn btn-primary"
                        to={artist.secondaryBookNowButtonLink}
                        role="button"
                        target="_blank"
                        style={{
                          whiteSpace: "pre-line",
                          background: "#3d5949",
                          border: "#3d5949",
                        }}
                      >
                        {artist.secondaryBookNowButtonText}
                      </ReactLink>
                    </div>
                  )}
                  {artist.services !== undefined &&
                    artist.services.length !== 0 && (
                      <div className="col-md-4 d-flex align-items-center justify-content-center py-2">
                        <button
                          className="btn btn-dark"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={"#dropdown" + artist.id}
                          aria-expanded="false"
                        >
                          See Full Service List
                        </button>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
          {artist.services !== undefined && artist.services.length !== 0 && (
            <div
              className="row g-0 collapse border-top"
              id={"dropdown" + artist.id}
            >
              <ServiceListGroup
                className="col my-2"
                artistID={artist.id}
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

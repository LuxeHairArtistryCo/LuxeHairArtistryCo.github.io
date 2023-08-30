import { ReactNode } from "react";
import ServiceListGroup, { ServiceListGroupNS } from "./ServiceListGroup";
import { Link as ReactLink } from "react-router-dom";
import { Colors } from "../global";

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
          style={{ background: Colors.tertiary }}
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
                  background: Colors.primary,
                  WebkitTextFillColor: Colors.light,
                }}
              >
                <h5 className="card-title">{artist.name}</h5>
                <h6 className="card-text">{artist.position}</h6>
              </div>
              <div className="card-body">
                <p className="card-text">{artist.bio}</p>
              </div>
              <div className="card-footer border-bottom">
                <div className="row d-flex justify-content-center mx-0">
                  <div className="col-md-4 d-flex align-items-center justify-content-center py-2">
                    <ReactLink
                      className="btn text-light"
                      to={artist.bookNowButtonLink}
                      role="button"
                      target="_blank"
                      style={{
                        whiteSpace: "pre-line",
                        background: Colors.primary,
                        border: Colors.primary,
                      }}
                    >
                      {artist.bookNowButtonText}
                    </ReactLink>
                  </div>
                  {artist.secondaryBookNowButtonLink !== undefined && (
                    <div className="col-md-4 d-flex align-items-center justify-content-center py-2">
                      <ReactLink
                        className="btn text-light"
                        to={artist.secondaryBookNowButtonLink}
                        role="button"
                        target="_blank"
                        style={{
                          whiteSpace: "pre-line",
                          background: Colors.primary,
                          border: Colors.primary,
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
                          className="btn text-light"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={"#dropdown" + artist.id}
                          aria-expanded="false"
                          style={{
                            background: Colors.dark,
                            border: Colors.dark,
                          }}
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
              style={{ background: Colors.tertiary }}
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

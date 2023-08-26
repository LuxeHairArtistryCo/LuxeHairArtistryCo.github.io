import { ReactNode } from "react";
import Button from "./Button";
import ServiceListGroup, { ServiceListGroupNS } from "./ServiceListGroup";

export namespace ArtistCardGroupNS {
  export type Artist = {
    id: string;
    name: string;
    position: string;
    bio?: string;
    imagePath: string;
    bookNowButtonText: string;
    bookNowButtonLink: string;
    seeAllServicesButtonEnable: boolean;
    services: ServiceListGroupNS.Service[];
  };
}

interface Props {
  children?: ReactNode;
  artistList: ArtistCardGroupNS.Artist[];
}

function ArtistCardGroup({ children, artistList }: Props) {
  return (
    <>
      <div className="row row-cols-1 w-100 g-4">
        <div className="col">
          {artistList.map((artist, index) => (
            <div className="card my-3" key={artist.name}>
              <div
                className={
                  "row g-0 d-flex " + (index % 2 === 1 && "flex-row-reverse")
                }
              >
                <div className="col-md-4">
                  <img className="card-img" src={artist.imagePath} />
                </div>

                <div className="col-md-8 d-flex flex-column justify-content-between">
                  <div className="card-header">
                    <h5 className="card-title">{artist.name}</h5>
                    <h6 className="card-text">{artist.position}</h6>
                  </div>
                  <div className="card-body">
                    <p className="card-text">{artist.bio}</p>
                  </div>
                  <div className="card-footer">
                    <div className="row d-flex justify-content-center mx-0">
                      <div className="col-md-4 d-flex align-items-center justify-content-center py-2">
                        <Button
                          color={"primary"}
                          onClick={() => window.open(artist.bookNowButtonLink)}
                        >
                          {artist.bookNowButtonText}
                        </Button>
                      </div>
                      {artist.seeAllServicesButtonEnable && (
                        <div className="col-md-4 d-flex align-items-center justify-content-center py-2">
                          <button
                            className="btn btn-secondary"
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
              <div className="row g-0 collapse" id={"dropdown" + artist.id}>
                <div className="col-md-4 ">
                  <ServiceListGroup />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {children}
    </>
  );
}

export default ArtistCardGroup;

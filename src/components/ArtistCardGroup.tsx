import { ReactNode } from "react";
import { Global } from "../global";
import Button from "./Button";

interface Props {
  children?: ReactNode;
  artistList: Global.Artist[];
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
                  "row g-0" + (index % 2 === 1 && "d-flex flex-row-reverse")
                }
              >
                <div className="col-md-4">
                  <img src={artist.imagePath} className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-header">
                    <h5 className="card-title">{artist.name}</h5>
                    <h6 className="card-text">{artist.position}</h6>
                  </div>
                  <div className="card-body">
                    <p className="card-text">{artist.bio}</p>
                  </div>
                  <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-4 d-flex align-items-center justify-content-center py-2">
                      <Button
                        color={"primary"}
                        onClick={artist.primaryButtonOnClick}
                      >
                        {artist.primaryButtonText}
                      </Button>
                    </div>
                    {artist.secondaryButtonText !== undefined && (
                      <div className="col-md-4 d-flex align-items-center justify-content-center py-2">
                        <Button
                          color={"secondary"}
                          onClick={
                            artist.secondaryButtonOnClick != undefined
                              ? artist.secondaryButtonOnClick
                              : () => {}
                          }
                        >
                          {artist.secondaryButtonText}
                        </Button>
                      </div>
                    )}
                  </div>
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

import { Link as ReactLink } from "react-router-dom";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

function HeroImage({ children, className }: Props) {
  return (
    <div className={className}>
      <div
        className="card border-0 rounded-0"
        style={{
          backgroundImage:
            "url(" +
            "https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&amp;ixlib=rb-1.2.1&amp;h=1200" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <img
          src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&amp;ixlib=rb-1.2.1&amp;h=1200"
          className="img-fluid object-fit-cover"
        /> */}
        <div className="d-flex flex-column justify-content-start p-5">
          <h3>Luxe</h3>
          <p>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div className="d-flex justify-content-center mt-5">
            <ReactLink className="btn btn-success" to="/artists" role="button">
              See Our Artists
            </ReactLink>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}

export default HeroImage;

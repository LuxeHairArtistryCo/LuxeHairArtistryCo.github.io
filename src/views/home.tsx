import { ReactNode } from "react";

import { Helmet } from "react-helmet";

import "./home.css";

type PropTypes = {
  children?: ReactNode;
};

const Home = (props: PropTypes) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Luxe Hair Artistry Co Hair Salon Nair Aesthetician</title>
        <meta
          property="og:title"
          content="Luxe Hair Artistry Co Hair Salon Nair Aesthetician"
        />
      </Helmet>
      <div className="home-hero">
        <div className="home-container1">
          <h1 className="home-text">Magnificent things are very simple</h1>
          <span className="home-text01">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
          </span>
          <div className="home-btn-group">
            <button className="home-button button">Get Started</button>
            <button className="home-button1 button">Learn More</button>
          </div>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&amp;ixlib=rb-1.2.1&amp;h=1200"
          className="home-image"
        />
      </div>
      <div className="home-hero1">
        <div className="home-container2">
          <h1 className="home-text08">Magnificent things are very simple</h1>
          <span className="home-text09">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
          </span>
          <div className="home-btn-group1">
            <button className="home-button2 button">Get Started</button>
            <button className="home-button3 button">Learn More</button>
          </div>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&amp;ixlib=rb-1.2.1&amp;h=1200"
          className="home-image1"
        />
      </div>
    </div>
  );
};

export default Home;

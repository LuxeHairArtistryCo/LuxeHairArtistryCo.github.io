import { ReactNode } from "react";

import { Helmet } from "react-helmet";

import "./about.css";

type PropTypes = {
  children?: ReactNode;
};

const About = (props: PropTypes) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>
          About - Luxe Hair Artistry Co Hair Salon Nair Aesthetician
        </title>
        <meta
          property="og:title"
          content="About - Luxe Hair Artistry Co Hair Salon Nair Aesthetician"
        />
      </Helmet>
    </div>
  );
};

export default About;

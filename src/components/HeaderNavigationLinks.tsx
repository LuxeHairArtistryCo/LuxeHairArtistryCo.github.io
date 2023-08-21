import { Link } from "react-router-dom";

import "./HeaderNavigationLinks.css";

type Props = {
  rootClassName: string;
  itemText01?: string;
  itemText02?: string;
} & typeof DefaultProps;

const DefaultProps = {
  rootClassName: "",
  itemText01: "About",
  itemText02: "Services",
};

function HeaderNavigationLinks({
  rootClassName,
  itemText01,
  itemText02,
}: Props) {
  return (
    <nav className={`header-navigation-links-nav ${rootClassName} `}>
      <Link to="/about" className="header-navigation-links-navlink">
        {itemText01}
      </Link>
      <Link to="/services" className="header-navigation-links-navlink1">
        {itemText02}
      </Link>
    </nav>
  );
}

HeaderNavigationLinks.defaultProps = DefaultProps;

export default HeaderNavigationLinks;

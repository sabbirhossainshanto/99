/* eslint-disable react/no-unknown-property */

import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <ul
      _ngcontent-htq-c46
      role="tablist"
      className="nav nav-tabs game-nav-bar"
      aria-label="Tabs"
    >
      <li _ngcontent-htq-c46 className="active nav-item">
        <Link
          _ngcontent-htq-c46
          to="/"
          role="tab"
          className={`nav-link  ${location.pathname === "/" ? "active" : ""}`}
          aria-controls
          aria-selected="true"
          id
        >
          <span _ngcontent-htq-c46>Inplay</span>
        </Link>
      </li>
      <li _ngcontent-htq-c46 className="nav-item">
        <Link
          _ngcontent-htq-c46
          to="/sports"
          role="tab"
          className="nav-link"
          aria-controls
          aria-selected="false"
          id
        >
          <span _ngcontent-htq-c46>Sports</span>
        </Link>
      </li>
      <li _ngcontent-htq-c46 className="nav-item">
        <Link
          _ngcontent-htq-c46
          to="/casino"
          role="tab"
          className={`nav-link  ${
            location.pathname === "/casino" ? "active" : ""
          }`}
          aria-controls
          aria-selected="false"
          id
        >
          <span _ngcontent-htq-c46>Casino</span>
        </Link>
      </li>
      <li _ngcontent-htq-c46 className="nav-item customClass">
        <Link
          _ngcontent-htq-c46
          to="/sports-book"
          role="tab"
          className="nav-link"
          aria-controls
          aria-selected="false"
          id
        >
          <span _ngcontent-htq-c46 />
          <div _ngcontent-htq-c97 className="new-tag-menus-sb">
            Sports book
          </div>
        </Link>
      </li>
      <li _ngcontent-htq-c46 className="nav-item">
        <Link
          _ngcontent-htq-c46
          to="/other"
          role="tab"
          className="nav-link"
          aria-controls
          aria-selected="false"
          id
        >
          <span _ngcontent-htq-c46>Others</span>
        </Link>
      </li>
    </ul>
  );
};

export default Header;

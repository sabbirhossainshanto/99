/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import Header from "../../components/modules/Home/Header";
import CasinoTab from "./CasinoTab/CasinoTab";
import IntCasino from "./InCasinoTab/IntCasino";
import { useLocation } from "react-router-dom";

const Casino = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");
  const [tab, setTab] = useState("casino");
  useEffect(() => {
    if (category) {
      setTab("intCasino");
    }
  }, [category]);
  return (
    <div _nghost-hot-c97>
      <div _ngcontent-hot-c97 className="main-content">
        <div _ngcontent-hot-c97 className="position-relative">
          <div
            _ngcontent-hot-c97
            type="tabs game-nav-bar"
            _nghost-hot-c46
            className="tab-container"
          >
            <Header />
            <div _ngcontent-hot-c46 className="tab-content">
              <div
                _ngcontent-hot-c97
                heading="Casino"
                role="tabpanel"
                aria-labelledby
                className="tab-pane active"
              >
                <div _ngcontent-hot-c97 id="home" className="tab-pane sports">
                  <div
                    _ngcontent-hot-c97
                    type="tabs game-nav-bar"
                    _nghost-hot-c46
                    className="tab-container"
                  >
                    <ul
                      _ngcontent-hot-c46
                      role="tablist"
                      className="nav nav-tabs game-nav-bar"
                      aria-label="Tabs"
                    >
                      <li
                        style={{ color: "white" }}
                        onClick={() => setTab("casino")}
                        _ngcontent-hot-c46
                        className={`nav-item ${
                          tab === "casino" ? "active" : ""
                        }`}
                      >
                        <a
                          _ngcontent-hot-c46
                          role="tab"
                          className={`nav-link ${
                            tab === "casino" ? "active" : ""
                          }`}
                          aria-controls
                          aria-selected="true"
                          id
                        >
                          <span _ngcontent-hot-c46 />
                          <div _ngcontent-hot-c97>
                            <img
                              _ngcontent-hot-c97
                              alt=""
                              src="assets/img/99999.png"
                            />
                          </div>
                          <div _ngcontent-hot-c97>Casino</div>
                        </a>
                      </li>
                      <li
                        style={{ color: "white" }}
                        onClick={() => setTab("intCasino")}
                        _ngcontent-hot-c46
                        className={`nav-item ${
                          tab === "intCasino" ? "active" : ""
                        }`}
                      >
                        <a
                          _ngcontent-hot-c46
                          role="tab"
                          className={`nav-link ${
                            tab === "intCasino" ? "active" : ""
                          }`}
                          aria-controls
                          aria-selected="false"
                          id
                        >
                          <span _ngcontent-hot-c46 />
                          <div _ngcontent-hot-c97>
                            <img
                              _ngcontent-hot-c97
                              alt=""
                              src="assets/img/99998.png"
                            />
                          </div>
                          <div _ngcontent-hot-c97>Int Casino</div>
                        </a>
                      </li>
                    </ul>
                    {/*  */}
                    {tab === "casino" ? <CasinoTab /> : <IntCasino />}
                    {/*  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casino;

/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { useMac88AllQuery } from "../../redux/features/casino/casino.api";
import CasinoThumbnail from "./CasinoThumbnail";
import Tab2 from "./Tab2";
import Header from "../../components/modules/Home/Header";

const Casino = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { data } = useMac88AllQuery();
  const allTables = data?.data?.allTables;
  const categories = allTables && Object.keys(allTables);

  const casinoData =
    allTables && typeof allTables === "object"
      ? selectedCategory === "All"
        ? Object.values(allTables).flat()
        : Object.values(allTables)
            .flat()
            .filter((item) => item?.category === selectedCategory)
      : [];

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
                      <li _ngcontent-hot-c46 className="nav-item active">
                        <a
                          _ngcontent-hot-c46
                          href="javascript:void(0);"
                          role="tab"
                          className="nav-link active"
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
                      <li _ngcontent-hot-c46 className="nav-item">
                        <a
                          _ngcontent-hot-c46
                          href="javascript:void(0);"
                          role="tab"
                          className="nav-link"
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
                    <div _ngcontent-hot-c46 className="tab-content">
                      <div
                        _ngcontent-hot-c97
                        role="tabpanel"
                        aria-labelledby
                        className="tab-pane active"
                      >
                        <div _ngcontent-hot-c97 _nghost-hot-c96>
                          <div _ngcontent-hot-c96 className="casino-tables">
                            <div _ngcontent-hot-c96 className="container-fluid">
                              <div _ngcontent-hot-c96 className="row row5 mt-2">
                                <div _ngcontent-hot-c96 className="col-md-12">
                                  <div
                                    _ngcontent-hot-c96
                                    className="int-casino tab-container"
                                    _nghost-hot-c46
                                  >
                                    <ul
                                      _ngcontent-hot-c46
                                      role="tablist"
                                      className="nav nav-tabs"
                                      aria-label="Tabs"
                                    >
                                      <li
                                        _ngcontent-hot-c46
                                        className="active nav-item"
                                      >
                                        <a
                                          _ngcontent-hot-c46
                                          href="javascript:void(0);"
                                          role="tab"
                                          className="nav-link active"
                                          aria-controls="goto-p-casino-0"
                                          aria-selected="true"
                                          id="goto-p-casino-0-link"
                                        >
                                          <span _ngcontent-hot-c46 />
                                          <span _ngcontent-hot-c96 tabIndex={0}>
                                            MAC88
                                          </span>
                                        </a>
                                      </li>
                                      <li
                                        _ngcontent-hot-c46
                                        className="nav-item"
                                      >
                                        <a
                                          _ngcontent-hot-c46
                                          href="javascript:void(0);"
                                          role="tab"
                                          className="nav-link"
                                          aria-controls="goto-p-casino-1"
                                          aria-selected="false"
                                          id="goto-p-casino-1-link"
                                        >
                                          <span _ngcontent-hot-c46 />
                                          <span _ngcontent-hot-c96 tabIndex={0}>
                                            Mac88 Virtuals
                                          </span>
                                        </a>
                                      </li>
                                      <li
                                        _ngcontent-hot-c46
                                        className="nav-item"
                                      >
                                        <a
                                          _ngcontent-hot-c46
                                          href="javascript:void(0);"
                                          role="tab"
                                          className="nav-link"
                                          aria-controls="goto-p-casino-2"
                                          aria-selected="false"
                                          id="goto-p-casino-2-link"
                                        >
                                          <span _ngcontent-hot-c46 />
                                          <span _ngcontent-hot-c96 tabIndex={0}>
                                            Color Prediction
                                          </span>
                                        </a>
                                      </li>
                                      <li
                                        _ngcontent-hot-c46
                                        className="nav-item"
                                      >
                                        <a
                                          _ngcontent-hot-c46
                                          href="javascript:void(0);"
                                          role="tab"
                                          className="nav-link"
                                          aria-controls="goto-p-casino-3"
                                          aria-selected="false"
                                          id="goto-p-casino-3-link"
                                        >
                                          <span _ngcontent-hot-c46 />
                                          <span _ngcontent-hot-c96 tabIndex={0}>
                                            Fun Games
                                          </span>
                                        </a>
                                      </li>
                                    </ul>

                                    {/* Tab 2 */}
                                    <div
                                      _ngcontent-hot-c46
                                      className="tab-content"
                                    >
                                      <div
                                        _ngcontent-hot-c96
                                        role="tabpanel"
                                        aria-labelledby="goto-p-casino-0-link"
                                        id="goto-p-casino-0"
                                        className="tab-pane active"
                                      >
                                        <div
                                          _ngcontent-hot-c96
                                          className="icasino_ul_tabs"
                                        >
                                          <div
                                            _ngcontent-hot-c96
                                            _nghost-hot-c46
                                            className="tab-container"
                                          >
                                            <Tab2
                                              setSelectedCategory={
                                                setSelectedCategory
                                              }
                                              selectedCategory={
                                                selectedCategory
                                              }
                                              categories={categories}
                                            />
                                            <CasinoThumbnail
                                              casinoData={casinoData}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

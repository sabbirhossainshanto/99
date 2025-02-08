/* eslint-disable react/no-unknown-property */

import { Status } from "../../../const";

const Fancy = ({ fancy }) => {
  return (
    <div
      _ngcontent-bym-c104
      className="newtab_collect tab-container"
      _nghost-bym-c46
    >
      <ul
        _ngcontent-bym-c46
        role="tablist"
        className="nav nav-tabs"
        aria-label="Tabs"
      >
        <li _ngcontent-bym-c46 className="active nav-item">
          <a
            _ngcontent-bym-c46
            role="tab"
            className="nav-link active"
            aria-controls
            aria-selected="true"
            id
          >
            <span _ngcontent-bym-c46 />
            <span _ngcontent-bym-c104>Fancy</span>
          </a>
        </li>
        <li _ngcontent-bym-c46 className="nav-item">
          <a
            _ngcontent-bym-c46
            role="tab"
            className="nav-link"
            aria-controls
            aria-selected="false"
            id
          >
            <span _ngcontent-bym-c46 />
            <span _ngcontent-bym-c104>Premium</span>
            <em _ngcontent-bym-c104 className="blink-soft">
              new
            </em>
          </a>
        </li>
      </ul>
      <div _ngcontent-bym-c46 className="tab-content">
        <div
          _ngcontent-bym-c104
          role="tabpanel"
          aria-labelledby
          className="tab-pane active"
        >
          <div _ngcontent-bym-c104 className="fancy-markets">
            <div
              _ngcontent-bym-c104
              type="tabs mt-2 fancy-nav"
              _nghost-bym-c46
              className="tab-container"
            >
              <ul
                _ngcontent-bym-c46
                role="tablist"
                className="nav nav-tabs mt-2 fancy-nav"
                aria-label="Tabs"
              >
                <li _ngcontent-bym-c46 className="active nav-item">
                  <a
                    _ngcontent-bym-c46
                    role="tab"
                    className="nav-link active"
                    aria-controls
                    aria-selected="true"
                    id
                  >
                    <span _ngcontent-bym-c46 />
                    <span
                      _ngcontent-bym-c104
                      style={{
                        textTransform: "uppercase",
                      }}
                    >
                      all
                    </span>
                  </a>
                </li>
                <li _ngcontent-bym-c46 className="nav-item">
                  <a
                    _ngcontent-bym-c46
                    role="tab"
                    className="nav-link"
                    aria-controls
                    aria-selected="false"
                    id
                  >
                    <span _ngcontent-bym-c46 />
                    <span
                      _ngcontent-bym-c104
                      style={{
                        textTransform: "uppercase",
                      }}
                    >
                      sessions
                    </span>
                  </a>
                </li>
                <li _ngcontent-bym-c46 className="nav-item">
                  <a
                    _ngcontent-bym-c46
                    role="tab"
                    className="nav-link"
                    aria-controls
                    aria-selected="false"
                    id
                  >
                    <span _ngcontent-bym-c46 />
                    <span
                      _ngcontent-bym-c104
                      style={{
                        textTransform: "uppercase",
                      }}
                    >
                      w/p market
                    </span>
                  </a>
                </li>
                <li _ngcontent-bym-c46 className="nav-item">
                  <a
                    _ngcontent-bym-c46
                    role="tab"
                    className="nav-link"
                    aria-controls
                    aria-selected="false"
                    id
                  >
                    <span _ngcontent-bym-c46 />
                    <span
                      _ngcontent-bym-c104
                      style={{
                        textTransform: "uppercase",
                      }}
                    >
                      odd/even
                    </span>
                  </a>
                </li>
                <li _ngcontent-bym-c46 className="nav-item">
                  <a
                    _ngcontent-bym-c46
                    role="tab"
                    className="nav-link"
                    aria-controls
                    aria-selected="false"
                    id
                  >
                    <span _ngcontent-bym-c46 />
                    <span
                      _ngcontent-bym-c104
                      style={{
                        textTransform: "uppercase",
                      }}
                    >
                      xtra market
                    </span>
                  </a>
                </li>
              </ul>

              {/* Above not using */}
              <div _ngcontent-bym-c46 className="tab-content">
                <div
                  _ngcontent-bym-c104
                  role="tabpanel"
                  aria-labelledby
                  className="tab-pane active"
                >
                  <div _ngcontent-bym-c104>
                    <div _ngcontent-bym-c104 className="fancy-market">
                      <div _ngcontent-bym-c104 />
                      <div _ngcontent-bym-c104>
                        <div _ngcontent-bym-c104>
                          <div _ngcontent-bym-c104 className="table-header">
                            <div
                              _ngcontent-bym-c104
                              className="market-title float-left country-name box-4"
                            >
                              <span
                                _ngcontent-bym-c104
                                className="text-uppercase mr-1"
                              >
                                Fancy
                              </span>
                              <p
                                _ngcontent-bym-c104
                                className="float-right mb-0"
                              >
                                <i
                                  _ngcontent-bym-c104
                                  data-toggle="modal"
                                  data-target="#Fancy_Rules"
                                  className="fas fa-info-circle"
                                />
                              </p>
                            </div>
                            <div
                              _ngcontent-bym-c104
                              className="box-1 float-left lay text-center"
                            >
                              <b _ngcontent-bym-c104>No</b>
                            </div>
                            <div
                              _ngcontent-bym-c104
                              className="back box-1 float-left back text-center"
                            >
                              <b _ngcontent-bym-c104>Yes</b>
                            </div>
                          </div>
                          <div _ngcontent-bym-c104 _nghost-bym-c102>
                            <div _ngcontent-bym-c102>
                              <div _ngcontent-bym-c102 className="table-body">
                                {fancy?.map((games) => {
                                  return (
                                    <div key={games?.id} _ngcontent-bym-c102>
                                      <div _ngcontent-bym-c102>
                                        <div
                                          _ngcontent-bym-c102
                                          className="fancy-tripple"
                                        >
                                          <div
                                            _ngcontent-bym-c102
                                            className={`table-row ${
                                              games?.runners?.[0]?.status ===
                                              Status.SUSPENDED
                                                ? "suspended"
                                                : ""
                                            } `}
                                            data-title={` ${
                                              games?.runners?.[0]?.status ===
                                              Status.SUSPENDED
                                                ? "suspended"
                                                : ""
                                            }`}
                                          >
                                            <div
                                              _ngcontent-bym-c102
                                              className="float-left country-name box-4"
                                            >
                                              <span _ngcontent-bym-c102>
                                                <b _ngcontent-bym-c102>
                                                  {games?.name}
                                                </b>
                                                <em _ngcontent-bym-c102 />
                                              </span>
                                              <div
                                                _ngcontent-bym-c102
                                                className="info-block"
                                              >
                                                <a
                                                  _ngcontent-bym-c102
                                                  data-bs-toggle="collapse"
                                                  data-bs-target
                                                  aria-expanded="false"
                                                  className="info-icon collapsed"
                                                  href="#min-max-info6250"
                                                >
                                                  <i
                                                    _ngcontent-bym-c102
                                                    className="fas fa-info-circle m-l-10"
                                                  />
                                                </a>
                                                <div
                                                  _ngcontent-bym-c102
                                                  className="min-max-info collapse"
                                                  id="min-max-info6250"
                                                >
                                                  <span _ngcontent-bym-c102>
                                                    <b _ngcontent-bym-c102>
                                                      Min:
                                                    </b>
                                                    100
                                                  </span>
                                                  <span _ngcontent-bym-c102>
                                                    <b _ngcontent-bym-c102>
                                                      Max:
                                                    </b>
                                                    300000
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              _ngcontent-bym-c102
                                              className="custom-odds-new"
                                            >
                                              <div
                                                _ngcontent-bym-c102
                                                className="con-boxes"
                                              >
                                                <div
                                                  _ngcontent-bym-c102
                                                  className="box-1 float-left lay text-center"
                                                >
                                                  <button _ngcontent-bym-c102>
                                                    <span
                                                      _ngcontent-bym-c102
                                                      className="odd d-block"
                                                    >
                                                      {
                                                        games?.runners?.[0]
                                                          ?.lay?.[0]?.line
                                                      }
                                                    </span>
                                                    <span
                                                      _ngcontent-bym-c102
                                                      className="d-block"
                                                    >
                                                      {
                                                        games?.runners?.[0]
                                                          ?.lay?.[0]?.price
                                                      }
                                                    </span>
                                                  </button>
                                                </div>
                                                <div
                                                  _ngcontent-bym-c102
                                                  className="back box-1 float-left text-center"
                                                >
                                                  <button _ngcontent-bym-c102>
                                                    <span
                                                      _ngcontent-bym-c102
                                                      className="odd d-block"
                                                    >
                                                      {
                                                        games?.runners?.[0]
                                                          ?.back?.[0]?.line
                                                      }
                                                    </span>
                                                    <span
                                                      _ngcontent-bym-c102
                                                      className="d-block"
                                                    >
                                                      {
                                                        games?.runners?.[0]
                                                          ?.back?.[0]?.price
                                                      }
                                                    </span>
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
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

export default Fancy;

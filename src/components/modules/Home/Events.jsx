/* eslint-disable react/no-unknown-property */

import { useSelector } from "react-redux";
import { useGroupQuery } from "../../../redux/features/events/events";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv } from "@fortawesome/free-solid-svg-icons";

const Events = () => {
  const navigate = useNavigate();
  const { group } = useSelector((state) => state.global);
  const { data } = useGroupQuery(
    { sportsType: group },
    {
      pollingInterval: 1000,
    }
  );

  const filterSports =
    data &&
    Object.keys(data)?.filter((key) => {
      return data?.[key]?.visible === true;
    });

  const navigateGameList = (keys) => {
    navigate(`/event-details/${data[keys]?.eventTypeId}/${keys}`);
  };

  return (
    <div _ngcontent-htq-c46 className="tab-content">
      <div
        _ngcontent-htq-c97
        role="tabpanel"
        aria-labelledby
        className="tab-pane active"
      >
        <div
          _ngcontent-htq-c97
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            position: "relative",
          }}
        >
          <ul
            _ngcontent-htq-c97
            className="live_virtual"
            style={{ display: "flex" }}
          >
            <li _ngcontent-htq-c97>
              <input
                _ngcontent-htq-c97
                type="checkbox"
                defaultValue="Order one"
                id="checkboxOne4-inplay"
                className="ng-untouched ng-pristine ng-valid"
              />
              <label _ngcontent-htq-c97 htmlFor="checkboxOne4-inplay">
                LIVE
              </label>
            </li>
            <li _ngcontent-htq-c97>
              <input
                _ngcontent-htq-c97
                type="checkbox"
                defaultValue="Order Two"
                id="checkboxTwo4-inplay"
                className="ng-untouched ng-pristine ng-valid"
              />
              <label _ngcontent-htq-c97 htmlFor="checkboxTwo4-inplay">
                VIRTUAL
              </label>
            </li>
          </ul>
          <div _ngcontent-htq-c97 className="filter-ct">
            <label _ngcontent-htq-c97>View by:</label>
            <select
              _ngcontent-htq-c97
              className="form-control-sm ng-untouched ng-pristine ng-valid"
            >
              <option _ngcontent-htq-c97 value="c">
                Competitions
              </option>
              <option _ngcontent-htq-c97 value="t">
                Time
              </option>
            </select>
          </div>
        </div>
        <div _ngcontent-htq-c97 _nghost-htq-c95>
          <div _ngcontent-htq-c95>
            <div _ngcontent-htq-c95 className="game-listing-container">
              <div _ngcontent-htq-c95>
                {data && Object.values(data).length > 0 ? (
                  filterSports
                    ?.sort((keyA, keyB) => {
                      return data[keyA].sort - data[keyB].sort;
                    })
                    ?.sort((keyA, keyB) => {
                      if (
                        data[keyA].timeStatus === "Suspended" &&
                        data[keyB].timeStatus !== "Suspended"
                      ) {
                        return 1;
                      }
                      if (
                        data[keyA].timeStatus !== "Suspended" &&
                        data[keyB].timeStatus === "Suspended"
                      ) {
                        return -1;
                      }
                      return 0;
                    })
                    .map((key, index) => {
                      return (
                        <div
                          key={index}
                          _ngcontent-htq-c95
                          className="game-list pt-1 pb-1 container-fluid"
                        >
                          <a
                            _ngcontent-htq-c95
                            onClick={() => navigateGameList(key)}
                          >
                            <div _ngcontent-htq-c95 className="row row5">
                              <div _ngcontent-htq-c95 className="col-8">
                                <p
                                  _ngcontent-htq-c95
                                  className="mb-0 game-name"
                                >
                                  <strong _ngcontent-htq-c95>
                                    {data?.[key]?.eventName}
                                  </strong>
                                </p>
                                <p _ngcontent-htq-c95 className="mb-0">
                                  {data?.[key]?.date}
                                </p>
                              </div>
                              <div
                                _ngcontent-htq-c95
                                className="col-4 text-right"
                              >
                                <div _ngcontent-htq-c95 className="game-icons">
                                  {data[key]?.inPlay === 1 && (
                                    <span
                                      _ngcontent-htq-c95
                                      className="game-icon"
                                    >
                                      <span
                                        _ngcontent-htq-c95
                                        className="active-icon"
                                        style={{
                                          verticalAlign: "bottom",
                                        }}
                                      />
                                    </span>
                                  )}
                                  {data[key]?.isTv === 1 && (
                                    <span
                                      _ngcontent-htq-c95
                                      className="game-icon"
                                    >
                                      {/* <i
                                        _ngcontent-htq-c95
                                        className="fas fa-tv"
                                      /> */}
                                      <FontAwesomeIcon
                                        style={{
                                          color: "black",
                                          fontSize: "10px",
                                        }}
                                        icon={faTv}
                                      />
                                    </span>
                                  )}
                                  {data[key]?.isFancy === 1 && (
                                    <span
                                      _ngcontent-htq-c95
                                      className="game-icon"
                                    >
                                      <img
                                        _ngcontent-htq-c95
                                        src="/src/assets/img/ic_fancy.webp"
                                      />
                                    </span>
                                  )}
                                  {data[key]?.isBookmaker === 1 && (
                                    <span
                                      _ngcontent-htq-c95
                                      className="game-icon"
                                    >
                                      <img
                                        _ngcontent-htq-c95
                                        src="/src/assets/img/ic_bm.webp"
                                        className="bm-icon"
                                      />
                                    </span>
                                  )}

                                  <span
                                    _ngcontent-htq-c95
                                    className="game-icon"
                                  />
                                </div>
                              </div>
                            </div>
                          </a>
                          <div _ngcontent-htq-c95 className="row row5">
                            <div _ngcontent-htq-c95 className="col-12">
                              <div
                                _ngcontent-htq-c95
                                className="text-center game-col game-home"
                              >
                                <b _ngcontent-htq-c95>1</b>
                              </div>
                              <div
                                _ngcontent-htq-c95
                                className="text-center game-col game-home"
                              >
                                <b _ngcontent-htq-c95>X</b>
                              </div>
                              <div
                                _ngcontent-htq-c95
                                className="text-center game-col game-home"
                              >
                                <b _ngcontent-htq-c95>2</b>
                              </div>
                            </div>
                          </div>
                          <div _ngcontent-htq-c95 className="row row5">
                            <div _ngcontent-htq-c95 className="col-12">
                              <div
                                _ngcontent-htq-c95
                                className="text-center game-col game-home"
                              >
                                <a _ngcontent-htq-c95 className="btn-back">
                                  {data[key]?.[0]?.ex?.availableToBack[0]
                                    ?.price ?? "-"}
                                </a>
                                <a _ngcontent-htq-c95 className="btn-lay">
                                  {data[key]?.[0]?.ex?.availableToLay[0]
                                    ?.price ?? "-"}
                                </a>
                              </div>
                              <div
                                _ngcontent-htq-c95
                                className="text-center game-col game-home"
                              >
                                <a _ngcontent-htq-c95 className="btn-back">
                                  {data[key]?.[2]?.ex?.availableToBack[0]
                                    ?.price ?? "-"}
                                </a>
                                <a _ngcontent-htq-c95 className="btn-lay">
                                  {data[key]?.[2]?.ex?.availableToLay[0]
                                    ?.price ?? "-"}
                                </a>
                              </div>
                              <div
                                _ngcontent-htq-c95
                                className="text-center game-col game-home"
                              >
                                <a _ngcontent-htq-c95 className="btn-back">
                                  {data[key]?.[1]?.ex?.availableToBack[0]
                                    ?.price ?? "-"}
                                </a>
                                <a _ngcontent-htq-c95 className="btn-lay">
                                  {data[key]?.[1]?.ex?.availableToLay[0]
                                    ?.price ?? "-"}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                ) : (
                  <div>
                    <div>
                      <span> No events available right now</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

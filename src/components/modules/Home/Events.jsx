/* eslint-disable react/no-unknown-property */

import { useGroupQuery } from "../../../redux/features/events/events";

const Events = () => {
  const { data } = useGroupQuery(
    { sportsType: 0 },
    {
      pollingInterval: 1000,
    }
  );

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
        <app-m-sport-list _ngcontent-htq-c97 _nghost-htq-c95>
          <div _ngcontent-htq-c95>
            <div _ngcontent-htq-c95 className="game-listing-container">
              <div _ngcontent-htq-c95>
                <div
                  _ngcontent-htq-c95
                  className="game-list pt-1 pb-1 container-fluid"
                >
                  <a _ngcontent-htq-c95 href="/m/game-detail/33994810">
                    <div _ngcontent-htq-c95 className="row row5">
                      <div _ngcontent-htq-c95 className="col-8">
                        <p _ngcontent-htq-c95 className="mb-0 game-name">
                          <strong _ngcontent-htq-c95>
                            Sri Lanka v Australia
                          </strong>
                        </p>
                        <p _ngcontent-htq-c95 className="mb-0">
                          Feb 06 2025 10:00 (IST)
                        </p>
                      </div>
                      <div _ngcontent-htq-c95 className="col-4 text-right">
                        <div _ngcontent-htq-c95 className="game-icons">
                          <span _ngcontent-htq-c95 className="game-icon">
                            <span
                              _ngcontent-htq-c95
                              className="active-icon"
                              style={{
                                verticalAlign: "bottom",
                              }}
                            />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon">
                            <i _ngcontent-htq-c95 className="fas fa-tv" />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon">
                            <img
                              _ngcontent-htq-c95
                              src="assets/img/ic_fancy.webp"
                            />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon">
                            <img
                              _ngcontent-htq-c95
                              src="assets/img/ic_bm.webp"
                              className="bm-icon"
                            />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon" />
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
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          2.3{" "}
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          2.36
                        </a>
                      </div>
                      <div
                        _ngcontent-htq-c95
                        className="text-center game-col game-home"
                      >
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          34
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          40
                        </a>
                      </div>
                      <div
                        _ngcontent-htq-c95
                        className="text-center game-col game-home"
                      >
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          1.83
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          1.85
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  _ngcontent-htq-c95
                  className="game-list pt-1 pb-1 container-fluid"
                >
                  <a _ngcontent-htq-c95 href="/m/game-detail/57323315">
                    <div _ngcontent-htq-c95 className="row row5">
                      <div _ngcontent-htq-c95 className="col-8">
                        <p _ngcontent-htq-c95 className="mb-0 game-name">
                          <strong _ngcontent-htq-c95>
                            Rising Star CA v Young Star
                          </strong>
                        </p>
                        <p _ngcontent-htq-c95 className="mb-0">
                          Feb 06 2025 13:30 (IST)
                        </p>
                      </div>
                      <div _ngcontent-htq-c95 className="col-4 text-right">
                        <div _ngcontent-htq-c95 className="game-icons">
                          <span _ngcontent-htq-c95 className="game-icon">
                            <span
                              _ngcontent-htq-c95
                              className="active-icon"
                              style={{
                                verticalAlign: "bottom",
                              }}
                            />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon">
                            <i _ngcontent-htq-c95 className="fas fa-tv" />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon">
                            <img
                              _ngcontent-htq-c95
                              src="assets/img/sports-provider.webp"
                              className="bookmaker-icon"
                            />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon" />
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
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          1.3{" "}
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          -
                        </a>
                      </div>
                      <div
                        _ngcontent-htq-c95
                        className="text-center game-col game-home"
                      >
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          -
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          -
                        </a>
                      </div>
                      <div
                        _ngcontent-htq-c95
                        className="text-center game-col game-home"
                      >
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          3.4
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          -
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  _ngcontent-htq-c95
                  className="game-list pt-1 pb-1 container-fluid"
                >
                  <a _ngcontent-htq-c95 href="/m/game-detail/33999372">
                    <div _ngcontent-htq-c95 className="row row5">
                      <div _ngcontent-htq-c95 className="col-8">
                        <p _ngcontent-htq-c95 className="mb-0 game-name">
                          <strong _ngcontent-htq-c95>India v England</strong>
                        </p>
                        <p _ngcontent-htq-c95 className="mb-0">
                          Feb 06 2025 13:30 (IST)
                        </p>
                      </div>
                      <div _ngcontent-htq-c95 className="col-4 text-right">
                        <div _ngcontent-htq-c95 className="game-icons">
                          <span _ngcontent-htq-c95 className="game-icon">
                            <span
                              _ngcontent-htq-c95
                              className="active-icon"
                              style={{
                                verticalAlign: "bottom",
                              }}
                            />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon">
                            <i _ngcontent-htq-c95 className="fas fa-tv" />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon">
                            <img
                              _ngcontent-htq-c95
                              src="assets/img/ic_fancy.webp"
                            />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon">
                            <img
                              _ngcontent-htq-c95
                              src="assets/img/ic_bm.webp"
                              className="bm-icon"
                            />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon" />
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
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          1.4{" "}
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          1.41
                        </a>
                      </div>
                      <div
                        _ngcontent-htq-c95
                        className="text-center game-col game-home"
                      >
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          -
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          -
                        </a>
                      </div>
                      <div
                        _ngcontent-htq-c95
                        className="text-center game-col game-home"
                      >
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          3.4
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          3.45
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  _ngcontent-htq-c95
                  className="game-list pt-1 pb-1 container-fluid"
                >
                  <a _ngcontent-htq-c95 href="/m/game-detail/33985498">
                    <div _ngcontent-htq-c95 className="row row5">
                      <div _ngcontent-htq-c95 className="col-8">
                        <p _ngcontent-htq-c95 className="mb-0 game-name">
                          <strong _ngcontent-htq-c95>Zimbabwe v Ireland</strong>
                        </p>
                        <p _ngcontent-htq-c95 className="mb-0">
                          Feb 06 2025 13:30 (IST)
                        </p>
                      </div>
                      <div _ngcontent-htq-c95 className="col-4 text-right">
                        <div _ngcontent-htq-c95 className="game-icons">
                          <span _ngcontent-htq-c95 className="game-icon">
                            <span
                              _ngcontent-htq-c95
                              className="active-icon"
                              style={{
                                verticalAlign: "bottom",
                              }}
                            />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon">
                            <i _ngcontent-htq-c95 className="fas fa-tv" />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon">
                            <img
                              _ngcontent-htq-c95
                              src="assets/img/ic_fancy.webp"
                            />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon">
                            <img
                              _ngcontent-htq-c95
                              src="assets/img/ic_bm.webp"
                              className="bm-icon"
                            />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon" />
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
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          2.14{" "}
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          2.16
                        </a>
                      </div>
                      <div
                        _ngcontent-htq-c95
                        className="text-center game-col game-home"
                      >
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          22
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          24
                        </a>
                      </div>
                      <div
                        _ngcontent-htq-c95
                        className="text-center game-col game-home"
                      >
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          2.04
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          2.06
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  _ngcontent-htq-c95
                  className="game-list pt-1 pb-1 container-fluid"
                >
                  <a _ngcontent-htq-c95 href="/m/game-detail/1738710385">
                    <div _ngcontent-htq-c95 className="row row5">
                      <div _ngcontent-htq-c95 className="col-8">
                        <p _ngcontent-htq-c95 className="mb-0 game-name">
                          <strong _ngcontent-htq-c95>
                            🎮PAKISTAN T10 VS SOUTH AFRICA T10
                          </strong>
                        </p>
                        <p _ngcontent-htq-c95 className="mb-0">
                          Feb 06 2025 15:20 (IST)
                        </p>
                      </div>
                      <div _ngcontent-htq-c95 className="col-4 text-right">
                        <div _ngcontent-htq-c95 className="game-icons">
                          <span _ngcontent-htq-c95 className="game-icon">
                            <span
                              _ngcontent-htq-c95
                              className="active-icon"
                              style={{
                                verticalAlign: "bottom",
                              }}
                            />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon">
                            <i _ngcontent-htq-c95 className="fas fa-tv" />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon">
                            <img
                              _ngcontent-htq-c95
                              src="assets/img/ic_fancy.webp"
                            />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon">
                            <img
                              _ngcontent-htq-c95
                              src="assets/img/sports_esports.webp"
                              className="cardgame-icon"
                            />
                          </span>
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
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          -{" "}
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          -
                        </a>
                      </div>
                      <div
                        _ngcontent-htq-c95
                        className="text-center game-col game-home"
                      >
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          -
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          -
                        </a>
                      </div>
                      <div
                        _ngcontent-htq-c95
                        className="text-center game-col game-home"
                      >
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          -
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          -
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  _ngcontent-htq-c95
                  className="game-list pt-1 pb-1 container-fluid"
                >
                  <a _ngcontent-htq-c95 href="/m/game-detail/1738702312">
                    <div _ngcontent-htq-c95 className="row row5">
                      <div _ngcontent-htq-c95 className="col-8">
                        <p _ngcontent-htq-c95 className="mb-0 game-name">
                          <strong _ngcontent-htq-c95>
                            🎮SRI LANKA T10 VS WEST INDIES T10
                          </strong>
                        </p>
                        <p _ngcontent-htq-c95 className="mb-0">
                          Feb 06 2025 15:25 (IST)
                        </p>
                      </div>
                      <div _ngcontent-htq-c95 className="col-4 text-right">
                        <div _ngcontent-htq-c95 className="game-icons">
                          <span _ngcontent-htq-c95 className="game-icon">
                            <span
                              _ngcontent-htq-c95
                              className="active-icon"
                              style={{
                                verticalAlign: "bottom",
                              }}
                            />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon">
                            <i _ngcontent-htq-c95 className="fas fa-tv" />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon">
                            <img
                              _ngcontent-htq-c95
                              src="assets/img/ic_bm.webp"
                              className="bm-icon"
                            />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon">
                            <img
                              _ngcontent-htq-c95
                              src="assets/img/sports_esports.webp"
                              className="cardgame-icon"
                            />
                          </span>
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
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          -{" "}
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          -
                        </a>
                      </div>
                      <div
                        _ngcontent-htq-c95
                        className="text-center game-col game-home"
                      >
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          -
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          -
                        </a>
                      </div>
                      <div
                        _ngcontent-htq-c95
                        className="text-center game-col game-home"
                      >
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          -
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          -
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  _ngcontent-htq-c95
                  className="game-list pt-1 pb-1 container-fluid"
                >
                  <a _ngcontent-htq-c95 href="/m/game-detail/57621239">
                    <div _ngcontent-htq-c95 className="row row5">
                      <div _ngcontent-htq-c95 className="col-8">
                        <p _ngcontent-htq-c95 className="mb-0 game-name">
                          <strong _ngcontent-htq-c95>
                            Melbourne Renegades SRL V Perth Scorchers SRL
                          </strong>
                        </p>
                        <p _ngcontent-htq-c95 className="mb-0">
                          Feb 06 2025 15:30 (IST)
                        </p>
                      </div>
                      <div _ngcontent-htq-c95 className="col-4 text-right">
                        <div _ngcontent-htq-c95 className="game-icons">
                          <span _ngcontent-htq-c95 className="game-icon">
                            <span
                              _ngcontent-htq-c95
                              className="active-icon"
                              style={{
                                verticalAlign: "bottom",
                              }}
                            />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon" />
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
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          -{" "}
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          -
                        </a>
                      </div>
                      <div
                        _ngcontent-htq-c95
                        className="text-center game-col game-home"
                      >
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          -
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          -
                        </a>
                      </div>
                      <div
                        _ngcontent-htq-c95
                        className="text-center game-col game-home"
                      >
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          -
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          -
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  _ngcontent-htq-c95
                  className="game-list pt-1 pb-1 container-fluid"
                >
                  <a _ngcontent-htq-c95 href="/m/game-detail/34002180">
                    <div _ngcontent-htq-c95 className="row row5">
                      <div _ngcontent-htq-c95 className="col-8">
                        <p _ngcontent-htq-c95 className="mb-0 game-name">
                          <strong _ngcontent-htq-c95>
                            MI Emirates v Sharjah Warriors
                          </strong>
                        </p>
                        <p _ngcontent-htq-c95 className="mb-0">
                          Feb 06 2025 20:00 (IST)
                        </p>
                      </div>
                      <div _ngcontent-htq-c95 className="col-4 text-right">
                        <div _ngcontent-htq-c95 className="game-icons">
                          <span _ngcontent-htq-c95 className="game-icon">
                            <span
                              _ngcontent-htq-c95
                              className="active-icon"
                              style={{
                                verticalAlign: "bottom",
                              }}
                            />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon">
                            <i _ngcontent-htq-c95 className="fas fa-tv" />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon">
                            <img
                              _ngcontent-htq-c95
                              src="assets/img/ic_fancy.webp"
                            />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon">
                            <img
                              _ngcontent-htq-c95
                              src="assets/img/ic_bm.webp"
                              className="bm-icon"
                            />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon" />
                          <span _ngcontent-htq-c95 className="game-icon">
                            <span _ngcontent-htq-c95>T</span>
                          </span>
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
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          1.71{" "}
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          1.72
                        </a>
                      </div>
                      <div
                        _ngcontent-htq-c95
                        className="text-center game-col game-home"
                      >
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          -
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          -
                        </a>
                      </div>
                      <div
                        _ngcontent-htq-c95
                        className="text-center game-col game-home"
                      >
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          2.38
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          2.42
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  _ngcontent-htq-c95
                  className="game-list pt-1 pb-1 container-fluid"
                >
                  <a _ngcontent-htq-c95 href="/m/game-detail/34008268">
                    <div _ngcontent-htq-c95 className="row row5">
                      <div _ngcontent-htq-c95 className="col-8">
                        <p _ngcontent-htq-c95 className="mb-0 game-name">
                          <strong _ngcontent-htq-c95>
                            Paarl Royals v Sunrisers Eastern Cape
                          </strong>
                        </p>
                        <p _ngcontent-htq-c95 className="mb-0">
                          Feb 06 2025 21:00 (IST)
                        </p>
                      </div>
                      <div _ngcontent-htq-c95 className="col-4 text-right">
                        <div _ngcontent-htq-c95 className="game-icons">
                          <span _ngcontent-htq-c95 className="game-icon">
                            <span
                              _ngcontent-htq-c95
                              className="active-icon"
                              style={{
                                verticalAlign: "bottom",
                              }}
                            />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon">
                            <i _ngcontent-htq-c95 className="fas fa-tv" />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon">
                            <img
                              _ngcontent-htq-c95
                              src="assets/img/ic_fancy.webp"
                            />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon">
                            <img
                              _ngcontent-htq-c95
                              src="assets/img/ic_bm.webp"
                              className="bm-icon"
                            />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon" />
                          <span _ngcontent-htq-c95 className="game-icon">
                            <span _ngcontent-htq-c95>T</span>
                          </span>
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
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          2.24{" "}
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          2.3
                        </a>
                      </div>
                      <div
                        _ngcontent-htq-c95
                        className="text-center game-col game-home"
                      >
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          -
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          -
                        </a>
                      </div>
                      <div
                        _ngcontent-htq-c95
                        className="text-center game-col game-home"
                      >
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          1.76
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          1.8
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  _ngcontent-htq-c95
                  className="game-list pt-1 pb-1 container-fluid"
                >
                  <a _ngcontent-htq-c95 href="/m/game-detail/28214334">
                    <div _ngcontent-htq-c95 className="row row5">
                      <div _ngcontent-htq-c95 className="col-8">
                        <p _ngcontent-htq-c95 className="mb-0 game-name">
                          <strong _ngcontent-htq-c95>
                            ICC Champions Trophy
                          </strong>
                        </p>
                        <p _ngcontent-htq-c95 className="mb-0">
                          Feb 19 2025 14:30 (IST)
                        </p>
                      </div>
                      <div _ngcontent-htq-c95 className="col-4 text-right">
                        <div _ngcontent-htq-c95 className="game-icons">
                          <span _ngcontent-htq-c95 className="game-icon">
                            <span
                              _ngcontent-htq-c95
                              className="active-icon"
                              style={{
                                verticalAlign: "bottom",
                              }}
                            />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon">
                            <img
                              _ngcontent-htq-c95
                              src="assets/img/ic_bm.webp"
                              className="bm-icon"
                            />
                          </span>
                          <span _ngcontent-htq-c95 className="game-icon" />
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
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          -{" "}
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          -
                        </a>
                      </div>
                      <div
                        _ngcontent-htq-c95
                        className="text-center game-col game-home"
                      >
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          -
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          -
                        </a>
                      </div>
                      <div
                        _ngcontent-htq-c95
                        className="text-center game-col game-home"
                      >
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-back"
                        >
                          -
                        </a>
                        <a
                          _ngcontent-htq-c95
                          href="javascript:void(0);"
                          className="btn-lay"
                        >
                          -
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </app-m-sport-list>
      </div>
      <div
        _ngcontent-htq-c97
        role="tabpanel"
        aria-labelledby
        className="tab-pane"
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
          <ul _ngcontent-htq-c97 className="live_virtual">
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
      </div>
      <div
        _ngcontent-htq-c97
        role="tabpanel"
        aria-labelledby
        className="tab-pane"
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
          <ul _ngcontent-htq-c97 className="live_virtual">
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
      </div>
      <div
        _ngcontent-htq-c97
        role="tabpanel"
        aria-labelledby
        className="tab-pane"
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
          <ul _ngcontent-htq-c97 className="live_virtual">
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
        </div>
      </div>
      <div
        _ngcontent-htq-c97
        role="tabpanel"
        aria-labelledby
        className="tab-pane"
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
          <ul _ngcontent-htq-c97 className="live_virtual">
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
        </div>
      </div>
      <div
        _ngcontent-htq-c97
        role="tabpanel"
        aria-labelledby
        className="tab-pane"
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
          <ul _ngcontent-htq-c97 className="live_virtual">
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
      </div>
      <div
        _ngcontent-htq-c97
        role="tabpanel"
        aria-labelledby
        className="tab-pane"
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
          <ul _ngcontent-htq-c97 className="live_virtual">
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
      </div>
      <div
        _ngcontent-htq-c97
        role="tabpanel"
        aria-labelledby
        className="tab-pane"
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
          <ul _ngcontent-htq-c97 className="live_virtual">
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
      </div>
      <div
        _ngcontent-htq-c97
        role="tabpanel"
        aria-labelledby
        className="tab-pane"
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
          <ul _ngcontent-htq-c97 className="live_virtual">
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
      </div>
      <div
        _ngcontent-htq-c97
        role="tabpanel"
        aria-labelledby
        className="tab-pane"
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
          <ul _ngcontent-htq-c97 className="live_virtual">
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
      </div>
      <div
        _ngcontent-htq-c97
        role="tabpanel"
        aria-labelledby
        className="tab-pane"
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
          <ul _ngcontent-htq-c97 className="live_virtual">
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
      </div>
      <div
        _ngcontent-htq-c97
        role="tabpanel"
        aria-labelledby
        className="tab-pane"
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
          <ul _ngcontent-htq-c97 className="live_virtual">
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
      </div>
      <div
        _ngcontent-htq-c97
        role="tabpanel"
        aria-labelledby
        className="tab-pane"
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
          <ul _ngcontent-htq-c97 className="live_virtual">
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
      </div>
      <div
        _ngcontent-htq-c97
        role="tabpanel"
        aria-labelledby
        className="tab-pane"
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
          <ul _ngcontent-htq-c97 className="live_virtual">
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
      </div>
      <div
        _ngcontent-htq-c97
        role="tabpanel"
        aria-labelledby
        className="tab-pane"
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
          <ul _ngcontent-htq-c97 className="live_virtual">
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
      </div>
      <div
        _ngcontent-htq-c97
        role="tabpanel"
        aria-labelledby
        className="tab-pane"
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
          <ul _ngcontent-htq-c97 className="live_virtual">
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
      </div>
      <div
        _ngcontent-htq-c97
        role="tabpanel"
        aria-labelledby
        className="tab-pane"
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
          <ul _ngcontent-htq-c97 className="live_virtual">
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
      </div>
    </div>
  );
};

export default Events;

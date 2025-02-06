import { useContext } from "react";
import { ApiContext } from "../../../context/ApiProvider";

/* eslint-disable react/no-unknown-property */
const Header = () => {
  const { logo } = useContext(ApiContext);

  return (
    <div _ngcontent-htq-c85 _nghost-htq-c82>
      <header _ngcontent-htq-c82 className="header">
        <div _ngcontent-htq-c82 className="container-fluid">
          <div
            _ngcontent-htq-c82
            className="row row5 pt-1 pb-1 align-items-center"
          >
            <div _ngcontent-htq-c82 className="logo col-6">
              <a
                _ngcontent-htq-c82
                href="/m/home"
                className="router-link-exact-active router-link-active"
              >
                <i _ngcontent-htq-c82 className="fas fa-home mr-1" />
                <img
                  _ngcontent-htq-c82
                  alt="Exchange"
                  className="img-fluid logo"
                  src={logo}
                />
              </a>
            </div>
            <div _ngcontent-htq-c82 className="col-6 text-right bal-expo">
              <p _ngcontent-htq-c82 className="mb-0">
                <img
                  _ngcontent-htq-c82
                  src="/src/assets/img/landmark-icon.webp"
                  alt="Exchange"
                  className="img-fluid pr-1"
                />
                <b _ngcontent-htq-c82>0.00</b>
              </p>
              <div _ngcontent-htq-c82>
                <span _ngcontent-htq-c82 className="mr-1">
                  <u _ngcontent-htq-c82>Exp: 0</u>
                </span>
                <div _ngcontent-htq-c82 className="dropdown d-inline-block">
                  <a
                    _ngcontent-htq-c82
                    href="javascript:void(0)"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="dropdown-toggle"
                  >
                    <u _ngcontent-htq-c82 data-v-3f4cf84d>
                      demo123
                    </u>
                  </a>
                  <div _ngcontent-htq-c82 className="dropdown-menu">
                    <a
                      _ngcontent-htq-c82
                      href="/m/home"
                      className="dropdown-item router-link-exact-active router-link-active"
                    >
                      Home
                    </a>
                    <a
                      _ngcontent-htq-c82
                      href="/m/reports/account-statement"
                      className="dropdown-item"
                    >
                      Account Statement
                    </a>
                    <a
                      _ngcontent-htq-c82
                      href="/m/reports/profit-loss"
                      className="dropdown-item"
                    >
                      Profit Loss Report
                    </a>
                    <a
                      _ngcontent-htq-c82
                      href="/m/reports/bet-history"
                      className="dropdown-item"
                    >
                      Bet History
                    </a>
                    <a
                      _ngcontent-htq-c82
                      href="/m/reports/unsettled-bets"
                      className="dropdown-item"
                    >
                      Unsetteled Bet
                    </a>
                    <a
                      _ngcontent-htq-c82
                      href="/m/change-btn-value"
                      className="dropdown-item"
                    >
                      Set Button Values
                    </a>
                    <a
                      _ngcontent-htq-c82
                      href="/m/change-password"
                      className="dropdown-item"
                    >
                      Change Password
                    </a>
                    <a
                      _ngcontent-htq-c82
                      href="/m/rules"
                      className="dropdown-item"
                    >
                      Rule
                    </a>
                    <a
                      _ngcontent-htq-c82
                      href="javascript:void(0)"
                      className="dropdown-item mt-2 text-danger"
                    >
                      <b _ngcontent-htq-c82>Logout</b>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div _ngcontent-htq-c82 className="row row5 header-bottom">
            <div _ngcontent-htq-c82 className="col-12">
              <div _ngcontent-htq-c82 className="search-box-container">
                <div _ngcontent-htq-c82 className="search-box float-left">
                  <input
                    _ngcontent-htq-c82
                    type="text"
                    typeaheadoptionfield="name"
                    className="search_input ng-untouched ng-pristine ng-valid"
                    aria-expanded="false"
                    aria-autocomplete="list"
                  />
                  <a
                    _ngcontent-htq-c82
                    href="javascript:void(0)"
                    className="search_icon"
                  >
                    <i _ngcontent-htq-c82 className="fas fa-search" />
                  </a>
                </div>
                <div _ngcontent-htq-c82 className="search-col d-none">
                  <form
                    _ngcontent-htq-c82
                    noValidate
                    action
                    className="ng-untouched ng-pristine ng-valid"
                  >
                    <input _ngcontent-htq-c82 text="search" />
                    <i _ngcontent-htq-c82 className="fa fa-search" />
                  </form>
                </div>
              </div>
              <app-upcoming _ngcontent-htq-c82 _nghost-htq-c79>
                <marquee
                  _ngcontent-htq-c79
                  scrollamount={3}
                  className="searchClose"
                >
                  🏏 𝐈𝐂𝐂 𝐂𝐇𝐀𝐌𝐏𝐈𝐎𝐍𝐒 𝐓𝐑𝐎𝐏𝐇𝐘 𝐂𝐔𝐏 𝐖𝐈𝐍𝐍𝐄𝐑 🏆𝐌𝐀𝐑𝐊𝐄𝐓 𝐒𝐓𝐀𝐑𝐓𝐄𝐃 𝐈𝐍 𝐎𝐔𝐑
                  𝐄𝐗𝐂𝐇𝐀𝐍𝐆𝐄 🏏 🎾 𝐕𝐈𝐑𝐓𝐔𝐀𝐋 𝐓𝐄𝐍𝐍𝐈𝐒 𝐍𝐎𝐖 𝐀𝐕𝐀𝐈𝐋𝐀𝐁𝐋𝐄 𝐈𝐍 𝐎𝐔𝐑 𝐄𝐗𝐂𝐇𝐀𝐍𝐆𝐄
                  🎾🏏 𝐎𝐔𝐑 𝐄𝐗𝐂𝐋𝐔𝐒𝐈𝐕𝐄 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐌𝐀𝐑𝐊𝐄𝐓 𝐅𝐎𝐑 (𝐒𝐑𝐋) 𝐈𝐒 𝐍𝐎𝐖 𝐒𝐓𝐀𝐑𝐓𝐄𝐃 𝐈𝐍
                  𝐎𝐔𝐑 𝐄𝐗𝐂𝐇𝐀𝐍𝐆𝐄 , 𝐃𝐑𝐄𝐀𝐌 𝐁𝐈𝐆 𝐖𝐈𝐍 𝐁𝐈𝐆 💰
                </marquee>
              </app-upcoming>
            </div>
          </div>
          <div _ngcontent-htq-c82 _nghost-htq-c80>
            <div _ngcontent-htq-c80 className="latest-event row">
              <div _ngcontent-htq-c80 className="latest-event-item">
                <a
                  _ngcontent-htq-c80
                  href="/m/game-detail/1736377636"
                  className="new-launch-text"
                >
                  <img _ngcontent-htq-c80 alt="" src="assets/img/2378961.png" />
                  <span _ngcontent-htq-c80>Delhi Election 2025</span>
                </a>
              </div>
              <div _ngcontent-htq-c80 className="latest-event-item">
                <a
                  _ngcontent-htq-c80
                  href="/m/game-detail/33999372"
                  className="new-launch-text"
                >
                  <img _ngcontent-htq-c80 alt="" src="assets/img/4.png" />
                  <span _ngcontent-htq-c80>India v England</span>
                </a>
              </div>
              <div _ngcontent-htq-c80 className="latest-event-item">
                <a
                  _ngcontent-htq-c80
                  href="/m/game-detail/33994810"
                  className="new-launch-text"
                >
                  <img _ngcontent-htq-c80 alt="" src="assets/img/4.png" />
                  <span _ngcontent-htq-c80>Sri Lanka v Australia</span>
                </a>
              </div>
              <div _ngcontent-htq-c80 className="latest-event-item">
                <a
                  _ngcontent-htq-c80
                  href="/m/game-detail/33985498"
                  className="new-launch-text"
                >
                  <img _ngcontent-htq-c80 alt="" src="assets/img/4.png" />
                  <span _ngcontent-htq-c80>Zimbabwe v Ireland</span>
                </a>
              </div>
              <div _ngcontent-htq-c80 className="latest-event-item">
                <a
                  _ngcontent-htq-c80
                  href="/m/game-detail/34006730"
                  className="new-launch-text"
                >
                  <img _ngcontent-htq-c80 alt="" src="assets/img/2.png" />
                  <span _ngcontent-htq-c80>Vondrousova v Bencic</span>
                </a>
              </div>
              <div _ngcontent-htq-c80 className="latest-event-item">
                <a
                  _ngcontent-htq-c80
                  href="/m/game-detail/34007049"
                  className="new-launch-text"
                >
                  <img _ngcontent-htq-c80 alt="" src="assets/img/2.png" />
                  <span _ngcontent-htq-c80>K Siniakova v Dolehide</span>
                </a>
              </div>
              <div _ngcontent-htq-c80 className="latest-event-item">
                <a
                  _ngcontent-htq-c80
                  href="/m/game-detail/34002180"
                  className="new-launch-text"
                >
                  <img _ngcontent-htq-c80 alt="" src="assets/img/4.png" />
                  <span _ngcontent-htq-c80>MI Emirates v Sharjah Warriors</span>
                </a>
              </div>
              <div _ngcontent-htq-c80 className="latest-event-item">
                <a
                  _ngcontent-htq-c80
                  href="/m/game-detail/34008268"
                  className="new-launch-text"
                >
                  <img _ngcontent-htq-c80 alt="" src="assets/img/4.png" />
                  <span _ngcontent-htq-c80>
                    Paarl Royals v Sunrisers Eastern Cape
                  </span>
                </a>
              </div>
              <div _ngcontent-htq-c80 className="latest-event-item">
                <a
                  _ngcontent-htq-c80
                  href="/m/game-detail/33926312"
                  className="new-launch-text"
                >
                  <img _ngcontent-htq-c80 alt="" src="assets/img/1.png" />
                  <span _ngcontent-htq-c80>Liverpool v Tottenham</span>
                </a>
              </div>
              <div _ngcontent-htq-c80 className="latest-event-item">
                <a
                  _ngcontent-htq-c80
                  href="/m/game-detail/33961565"
                  className="new-launch-text"
                >
                  <img _ngcontent-htq-c80 alt="" src="assets/img/1.png" />
                  <span _ngcontent-htq-c80>Valencia v Barcelona</span>
                </a>
              </div>
              <div _ngcontent-htq-c80 className="latest-event-item">
                <a
                  _ngcontent-htq-c80
                  href="/m/game-detail/33964207"
                  className="new-launch-text"
                >
                  <img _ngcontent-htq-c80 alt="" src="assets/img/1.png" />
                  <span _ngcontent-htq-c80>Real Sociedad v Osasuna</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <a
    _ngcontent-htq-c82
    target="_blank"
    className="whatsapp_link"
    href="https://wa.link/allsitelink1"
  >
    <img _ngcontent-htq-c82 src="/src/assets/img/wp_support.webp" />
  </a> */}
      <div
        _ngcontent-htq-c82
        bsmodal
        tabIndex={-1}
        role="dialog"
        aria-labelledby
        className="modal fade force-change-password-popup"
      >
        <div _ngcontent-htq-c82 className="modal-dialog bookModal app_version">
          <div _ngcontent-htq-c82 className="modal-content">
            <div _ngcontent-htq-c82 className="modal-body p-0">
              <button
                _ngcontent-htq-c82
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
                className="close"
                style={{
                  position: "absolute",
                  left: "5px",
                  top: 0,
                  color: "#fff",
                  fontSize: "21px",
                  opacity: 1,
                }}
              >
                <span _ngcontent-htq-c82 aria-hidden="true">
                  ×
                </span>
              </button>
              <a _ngcontent-htq-c82>
                <img
                  _ngcontent-htq-c82
                  src="https://tezcdn.io/casino/casino-highlight/poster-login-popup.webp"
                  style={{ width: "100%" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Header;

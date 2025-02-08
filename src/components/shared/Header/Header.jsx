import { useContext } from "react";
import { ApiContext } from "../../../context/ApiProvider";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import LatestEvent from "./LatestEvent";
import { useLatestEvent } from "../../../hooks/latestEvent";
import Notification from "./Notification";
import useBalance from "../../../hooks/balance";
import { useSelector } from "react-redux";
/* eslint-disable react/no-unknown-property */
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const { data: balance } = useBalance();
  const { logo } = useContext(ApiContext);
  const { data } = useLatestEvent();

  return (
    <div _ngcontent-htq-c85 _nghost-htq-c82>
      <header _ngcontent-htq-c82 className="header">
        <div _ngcontent-htq-c82 className="container-fluid">
          <div
            _ngcontent-htq-c82
            className="row row5 pt-1 pb-1 align-items-center"
          >
            <div _ngcontent-htq-c82 className="logo col-6">
              <Link
                _ngcontent-htq-c82
                to="/"
                className="router-link-exact-active router-link-active"
              >
                <FontAwesomeIcon
                  style={{ color: "white" }}
                  icon={faHome}
                  className="mr-1"
                />
                {/* <i _ngcontent-htq-c82 className="fas fa-home mr-1" /> */}
                <img
                  _ngcontent-htq-c82
                  alt="Exchange"
                  className="img-fluid logo"
                  src={logo}
                />
              </Link>
            </div>
            <div _ngcontent-htq-c82 className="col-6 text-right bal-expo">
              <p _ngcontent-htq-c82 className="mb-0">
                <img
                  _ngcontent-htq-c82
                  src="/src/assets/img/landmark-icon.webp"
                  alt="Exchange"
                  className="img-fluid pr-1"
                />
                <b _ngcontent-htq-c82>{balance?.availBalance}</b>
              </p>
              <div _ngcontent-htq-c82>
                <span _ngcontent-htq-c82 className="mr-1">
                  <u _ngcontent-htq-c82>Exp: {balance?.deductedExposure}</u>
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
                      {user}
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
                    <FontAwesomeIcon
                      style={{ color: "black" }}
                      icon={faSearch}
                      size="20"
                    />
                    {/* <i _ngcontent-htq-c82 className="fas fa-search" /> */}
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
              <Notification />
            </div>
          </div>
          {data && data?.length > 0 && <LatestEvent latestEvent={data} />}
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

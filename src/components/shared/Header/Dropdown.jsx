/* eslint-disable react/no-unknown-property */

import { useDispatch } from "react-redux";
import { logout } from "../../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Dropdown = ({ showDropdown }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div
      _ngcontent-htq-c82
      className={`dropdown-menu  ${showDropdown ? "show" : ""}`}
    >
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
      <a _ngcontent-htq-c82 href="/m/change-password" className="dropdown-item">
        Change Password
      </a>
      <a _ngcontent-htq-c82 href="/m/rules" className="dropdown-item">
        Rule
      </a>
      <a
        _ngcontent-htq-c82
        onClick={handleLogout}
        className="dropdown-item mt-2 text-danger"
      >
        <b _ngcontent-htq-c82>Logout</b>
      </a>
    </div>
  );
};

export default Dropdown;

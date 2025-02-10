/* eslint-disable react/no-unknown-property */

import { useNavigate, useParams } from "react-router-dom";
import { useLiveCasinoIframeMutation } from "../../redux/features/casino/casino.api";
import { useContext, useEffect } from "react";
import { ApiContext } from "../../context/ApiProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Settings } from "../../api";

const CasinoIFrame = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { logo } = useContext(ApiContext);
  const [handleGetIFrame, { data }] = useLiveCasinoIframeMutation();
  const { gameId } = useParams();

  useEffect(() => {
    const payload = {
      gameId: gameId,
      isHome: false,
      mobileOnly: true,
      casinoCurrency: Settings.casinoCurrency,
    };
    handleGetIFrame(payload);
  }, [handleGetIFrame, gameId]);

  return (
    <div _nghost-swn-c87="">
      <div _ngcontent-swn-c87="" id="casino-frm">
        <div _ngcontent-swn-c87="" className="casino-detail-head">
          <button onClick={() => navigate("/")} _ngcontent-swn-c87="">
            <FontAwesomeIcon
              style={{ color: "white" }}
              icon={faHome}
              className="mr-1"
            />
            <img
              _ngcontent-swn-c87=""
              alt="Exchange"
              className="img-fluid logo"
              src={logo}
            />
          </button>
          <h4 _ngcontent-swn-c87=""></h4>
          <span _ngcontent-swn-c87="">
            <FontAwesomeIcon
              style={{ color: "white" }}
              icon={faUser}
              className="mr-1"
            />
            {user}
          </span>
        </div>
        <iframe
          _ngcontent-swn-c87=""
          allowfullscreen="true"
          title="game"
          id="casino-link"
          className="embed-responsive-item"
          src={data?.result?.url}
        ></iframe>
      </div>
    </div>
  );
};

export default CasinoIFrame;

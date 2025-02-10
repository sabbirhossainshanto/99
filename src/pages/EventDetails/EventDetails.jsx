/* eslint-disable react/no-unknown-property */

import { useParams } from "react-router-dom";
import { useGetEventDetailsQuery } from "../../redux/features/events/events";
import Score from "../../components/modules/EventDetails/Score";
import MatchOdds from "../../components/modules/EventDetails/MatchOdds";
import Bookmaker from "../../components/modules/EventDetails/Bookmaker";
import Fancy from "../../components/modules/EventDetails/Fancy";
import { useAccessTokenMutation } from "../../redux/features/casino/casino.api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const EventDetails = () => {
  const [showIFrame, setShowIFrame] = useState(false);
  const [getIFrame, { data: IFrame }] = useAccessTokenMutation();
  const { eventTypeId, eventId } = useParams();
  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    {
      pollingInterval: 1000,
    }
  );

  const matchOdds = data?.result?.filter(
    (match_odd) =>
      match_odd.btype === "MATCH_ODDS" && match_odd?.visible == true
  );

  const bookmaker = data?.result?.filter(
    (bookmaker) => bookmaker.btype === "BOOKMAKER" && bookmaker?.visible == true
  );

  const fancyData = data?.result?.filter(
    (fancy) =>
      fancy.btype === "FANCY" &&
      fancy.tabGroupName === "Normal" &&
      fancy?.visible == true
  );

  useEffect(() => {
    if (showIFrame) {
      const payload = {
        eventTypeId,
        eventId,
        type: "video",
      };
      getIFrame(payload);
    }
  }, [eventId, eventTypeId, getIFrame, showIFrame]);

  return (
    <div _ngcontent-bym-c104 className="main-content">
      <div
        _ngcontent-bym-c104
        className="game-page"
        style={{ position: "relative" }}
      >
        <div _ngcontent-bym-c104 _nghost-bym-c46 className="tab-container">
          <ul
            _ngcontent-bym-c46
            role="tablist"
            className="nav nav-tabs"
            aria-label="Tabs"
          >
            <li _ngcontent-bym-c46 className="active nav-item">
              <a
                _ngcontent-bym-c46
                href="javascript:void(0);"
                role="tab"
                className="nav-link active"
                aria-controls
                aria-selected="true"
                id
              >
                <span _ngcontent-bym-c46>ODDS</span>
              </a>
            </li>
            <li _ngcontent-bym-c46 className="nav-item">
              <a
                _ngcontent-bym-c46
                href="javascript:void(0);"
                role="tab"
                className="nav-link"
                aria-controls
                aria-selected="false"
                id
              >
                <span _ngcontent-bym-c46>MATCHED BET (0)</span>
              </a>
            </li>
          </ul>
          <div _ngcontent-bym-c46 className="tab-content">
            <tab
              _ngcontent-bym-c104
              heading="ODDS"
              role="tabpanel"
              aria-labelledby
              className="tab-pane active"
            >
              <div _ngcontent-bym-c104>
                <div _ngcontent-bym-c104 className="tab-content">
                  <div
                    _ngcontent-bym-c104
                    id="odds"
                    className="tab-pane active"
                  >
                    <div _ngcontent-bym-c104 className="match-title">
                      <span _ngcontent-bym-c104 className="match-name">
                        {data?.result?.[0]?.eventName}
                      </span>
                      <span _ngcontent-bym-c104 className="float-right">
                        <span _ngcontent-bym-c104>
                          {" "}
                          {data?.result?.[0]?.openDate}
                        </span>
                      </span>
                    </div>
                    <div
                      _ngcontent-bym-c104
                      id="collapseBasic"
                      aria-hidden="true"
                      className={`collapse  ${
                        showIFrame && IFrame?.result?.url ? "show" : ""
                      }`}
                    >
                      <iframe
                        _ngcontent-bym-c104
                        id="tvStr"
                        className="LiveStream-video-col"
                        src={IFrame?.result?.url}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div _ngcontent-bym-c104>
                      {eventTypeId == 4 && data?.result?.[0]?.score && (
                        <Score score={data?.result?.[0]?.score} />
                      )}

                      <div _ngcontent-bym-c104 className="sr-widget-1" />
                      {matchOdds && matchOdds?.length > 0 && (
                        <MatchOdds matchOdds={matchOdds} />
                      )}
                      {bookmaker && bookmaker?.length > 0 && (
                        <Bookmaker bookmaker={bookmaker} />
                      )}
                      {fancyData && fancyData?.length > 0 && (
                        <Fancy fancy={fancyData} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </tab>
            <tab
              _ngcontent-bym-c104
              role="tabpanel"
              aria-labelledby
              className="tab-pane"
            >
              <div _ngcontent-bym-c104 _nghost-bym-c64>
                <table
                  _ngcontent-bym-c64
                  className="coupon-table table table-borderedless"
                >
                  <thead _ngcontent-bym-c64>
                    <tr _ngcontent-bym-c64>
                      <th _ngcontent-bym-c64 style={{ width: "60%" }}>
                        Nation
                      </th>
                      <th _ngcontent-bym-c64 className="text-right">
                        Odds
                      </th>
                      <th _ngcontent-bym-c64 className="text-center">
                        Stake
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr _ngcontent-bym-c64>
                      <td
                        _ngcontent-bym-c64
                        colSpan={3}
                        className="text-center"
                      >
                        No records Found
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </tab>
          </div>
        </div>
        <div _ngcontent-bym-c104 className="tv-icon">
          <p _ngcontent-bym-c104 className="mb-0">
            <a
              _ngcontent-bym-c104
              aria-controls="collapseBasic"
              aria-expanded="false"
            >
              <FontAwesomeIcon
                onClick={() => setShowIFrame((prev) => !prev)}
                style={{ color: "white", fontSize: "10px" }}
                icon={faTv}
                className="mr-1"
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

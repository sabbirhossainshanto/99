/* eslint-disable react/no-unknown-property */

import { useParams } from "react-router-dom";
import { useGetEventDetailsQuery } from "../../redux/features/events/events";
import Score from "../../components/modules/EventDetails/Score";
import MatchOdds from "../../components/modules/EventDetails/MatchOdds";
import Bookmaker from "../../components/modules/EventDetails/Bookmaker";
import Fancy from "../../components/modules/EventDetails/Fancy";

const EventDetails = () => {
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
                        India v England
                      </span>
                      <span _ngcontent-bym-c104 className="float-right">
                        <span _ngcontent-bym-c104>06/02/2025 13:30:00</span>
                      </span>
                    </div>
                    <div
                      _ngcontent-bym-c104
                      id="collapseBasic"
                      aria-hidden="true"
                      className="collapse"
                      style={{ display: "none" }}
                    >
                      <iframe
                        _ngcontent-bym-c104
                        id="tvStr"
                        className="LiveStream-video-col"
                        src
                      />
                    </div>
                    <div _ngcontent-bym-c104>
                      <Score />
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
              <i _ngcontent-bym-c104 className="fas fa-tv" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

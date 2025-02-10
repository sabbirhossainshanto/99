/* eslint-disable react/no-unknown-property */

import { useNavigate } from "react-router-dom";
import { Status } from "../../../const";
import BetSlip from "../../shared/BetSlip/BetSlip";
import { useDispatch, useSelector } from "react-redux";
import { useExposure } from "../../../hooks/exposure";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";

const Bookmaker = ({ bookmaker }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { runnerId } = useSelector((state) => state.event);
  const { token } = useSelector((state) => state.auth);
  const { data: exposure } = useExposure();

  const handleBetSlip = (betType, games, runner, price) => {
    if (token) {
      let selectionId;
      let runnerId;
      let eventTypeId;
      if (!price) {
        return;
      }

      let pnlBySelection;
      const updatedPnl = [];

      if (exposure?.pnlBySelection) {
        const obj = exposure?.pnlBySelection;
        pnlBySelection = Object?.values(obj);
      }

      if (games?.btype == "FANCY") {
        selectionId = games?.id;
        runnerId = games?.id;
        eventTypeId = games?.eventTypeId;
        const pnl = pnlBySelection?.find((p) => p?.RunnerId === games?.id);
        if (pnl) {
          updatedPnl.push(pnl?.pnl);
        }
      } else if (games?.btype && games?.btype !== "FANCY") {
        selectionId = runner?.id;
        runnerId = games.runners.map((runner) => runner.id);
        eventTypeId = games?.eventTypeId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find((p) => p?.RunnerId === runner?.id);
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      } else {
        selectionId = runner?.selectionId;
        eventTypeId = games?.marketId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find(
            (p) => p?.RunnerId === runner?.selectionId
          );
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      }

      const betData = {
        price,
        side: betType === "back" ? 0 : 1,
        selectionId,
        btype: games?.btype,
        eventTypeId,
        betDelay: games?.betDelay,
        marketId: games?.id,
        lay: betType === "lay",
        back: betType === "back",
        selectedBetName: runner?.name,
        name: games.runners.map((runner) => runner.name),
        runnerId,
        isWeak: games?.isWeak,
        maxLiabilityPerMarket: games?.maxLiabilityPerMarket,
        isBettable: games?.isBettable,
        maxLiabilityPerBet: games?.maxLiabilityPerBet,
        pnl: updatedPnl,
        marketName: games?.name,
        eventId: games?.eventId,
        totalSize: 0,
      };
      if (games?.btype == "FANCY") {
        dispatch(setRunnerId(games?.id));
      } else if (games?.btype && games?.btype !== "FANCY") {
        dispatch(setRunnerId(runner?.id));
      } else {
        dispatch(setRunnerId(runner?.selectionId));
      }

      dispatch(setPlaceBetValues(betData));
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      {bookmaker?.map((games) => {
        return (
          <div key={games?.id} _ngcontent-bym-c104>
            <div _ngcontent-bym-c104>
              <div _ngcontent-bym-c104>
                <div _ngcontent-bym-c104 _nghost-bym-c101>
                  <div _ngcontent-bym-c101>
                    <div _ngcontent-bym-c101 className="market-title mt-1">
                      {games?.name?.toUpperCase()}
                      <button _ngcontent-bym-c101 className="btn-cashout">
                        cashout
                      </button>
                      <p _ngcontent-bym-c101 className="float-right mb-0">
                        <i _ngcontent-bym-c101 className="fas fa-info-circle" />
                      </p>
                    </div>
                    <div _ngcontent-bym-c101 className="bookmaker-market">
                      <div _ngcontent-bym-c101 className="table-header">
                        <div
                          _ngcontent-bym-c101
                          className="float-left country-name box-6 min-max"
                        >
                          <b _ngcontent-bym-c101>Min:100 Max:2500000</b>
                        </div>
                        <div
                          _ngcontent-bym-c101
                          className="back box-1 float-left text-center"
                        >
                          <b _ngcontent-bym-c101>BACK</b>
                        </div>
                        <div
                          _ngcontent-bym-c101
                          className="lay box-1 float-left text-center"
                        >
                          <b _ngcontent-bym-c101>LAY</b>
                        </div>
                      </div>
                      <div _ngcontent-bym-c101 className="table-body">
                        {games?.runners?.map((runner) => {
                          return (
                            <div
                              key={runner?.id}
                              _ngcontent-bym-c101
                              className={`table-row ${
                                runner?.status === Status.SUSPENDED
                                  ? "suspended"
                                  : ""
                              } `}
                              data-title={` ${
                                runner?.status === Status.SUSPENDED
                                  ? "suspended"
                                  : ""
                              }`}
                            >
                              <div
                                _ngcontent-bym-c101
                                className="float-left country-name box-4"
                              >
                                <span _ngcontent-bym-c101 className="team-name">
                                  <b _ngcontent-bym-c101>{runner?.name}</b>
                                </span>
                                <p _ngcontent-bym-c101 className="mob-expo-cs">
                                  <span
                                    _ngcontent-bym-c101
                                    className="float-left"
                                  />
                                </p>
                              </div>

                              <div
                                onClick={() =>
                                  handleBetSlip(
                                    "back",
                                    games,
                                    runner,
                                    runner?.back[2]?.price
                                  )
                                }
                                _ngcontent-bym-c101
                                className="back-1 back1 box-1 float-left text-center"
                              >
                                <button _ngcontent-bym-c101>
                                  <span
                                    _ngcontent-bym-c101
                                    className="odd d-block"
                                  >
                                    {runner?.back?.[2]?.price}
                                  </span>
                                  <span _ngcontent-bym-c101 className="d-block">
                                    {runner?.back?.[2]?.size}
                                  </span>
                                </button>
                              </div>
                              <div
                                onClick={() =>
                                  handleBetSlip(
                                    "back",
                                    games,
                                    runner,
                                    runner?.back[1]?.price
                                  )
                                }
                                _ngcontent-bym-c101
                                className="back-2 back2 box-1 float-left text-center"
                              >
                                <button _ngcontent-bym-c101>
                                  <span
                                    _ngcontent-bym-c101
                                    className="odd d-block"
                                  >
                                    {runner?.back?.[1]?.price}
                                  </span>
                                  <span _ngcontent-bym-c101 className="d-block">
                                    {runner?.back?.[1]?.size}
                                  </span>
                                </button>
                              </div>
                              <div
                                onClick={() =>
                                  handleBetSlip(
                                    "back",
                                    games,
                                    runner,
                                    runner?.back[0]?.price
                                  )
                                }
                                _ngcontent-bym-c101
                                className="back box-1 float-left lock text-center"
                              >
                                <button _ngcontent-bym-c101>
                                  <span
                                    _ngcontent-bym-c101
                                    className="odd d-block"
                                  >
                                    {runner?.back?.[0]?.price}
                                  </span>
                                  <span _ngcontent-bym-c101 className="d-block">
                                    {runner?.back?.[0]?.size}
                                  </span>
                                </button>
                              </div>

                              <div
                                onClick={() =>
                                  handleBetSlip(
                                    "lay",
                                    games,
                                    runner,
                                    runner?.lay?.[0]?.price
                                  )
                                }
                                _ngcontent-bym-c101
                                className="box-1 float-left lay text-center"
                              >
                                <button _ngcontent-bym-c101>
                                  <span
                                    _ngcontent-bym-c101
                                    className="odd d-block"
                                  >
                                    {runner?.lay?.[0]?.price}
                                  </span>
                                  <span _ngcontent-bym-c101 className="d-block">
                                    {runner?.lay?.[0]?.size}
                                  </span>
                                </button>
                              </div>
                              <div
                                onClick={() =>
                                  handleBetSlip(
                                    "lay",
                                    games,
                                    runner,
                                    runner?.lay?.[1]?.price
                                  )
                                }
                                _ngcontent-bym-c101
                                className="box-1 float-left lay-2 text-center"
                              >
                                <button _ngcontent-bym-c101>
                                  <span
                                    _ngcontent-bym-c101
                                    className="odd d-block"
                                  >
                                    {runner?.lay?.[1]?.price}
                                  </span>
                                  <span _ngcontent-bym-c101 className="d-block">
                                    {runner?.lay?.[1]?.price}
                                  </span>
                                </button>
                              </div>
                              <div
                                onClick={() =>
                                  handleBetSlip(
                                    "lay",
                                    games,
                                    runner,
                                    runner?.lay?.[0]?.price
                                  )
                                }
                                _ngcontent-bym-c101
                                className="box-1 float-left lay-1 text-center"
                              >
                                <button _ngcontent-bym-c101>
                                  <span
                                    _ngcontent-bym-c101
                                    className="odd d-block"
                                  >
                                    {runner?.lay?.[2]?.price}
                                  </span>
                                  <span _ngcontent-bym-c101 className="d-block">
                                    {runner?.lay?.[2]?.size}
                                  </span>
                                </button>
                              </div>
                              {runnerId === runner?.id && (
                                <BetSlip setRunnerId={setRunnerId} />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    {/* <div
                      _ngcontent-bym-c101
                      className="table-remark text-right remark"
                    >
                      <marquee _ngcontent-bym-c101>
                        Zimbabwe v Ireland : Match Bets Started in our Exchange
                        🏏
                      </marquee>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Bookmaker;

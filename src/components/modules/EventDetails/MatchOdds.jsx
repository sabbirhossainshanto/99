/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import { Status } from "../../../const";
import BetSlip from "../../shared/BetSlip/BetSlip";

const MatchOdds = ({ matchOdds }) => {
  const [runnerId, setRunnerId] = useState(null);
  return (
    <>
      {matchOdds?.map((games) => {
        return (
          <div key={games?.id} _ngcontent-bym-c104>
            <div _ngcontent-bym-c104 _nghost-bym-c100>
              <div _ngcontent-bym-c100>
                <div _ngcontent-bym-c100 className="market-title mt-1">
                  {games?.name?.toUpperCase()}
                  <button _ngcontent-bym-c100 className="btn-cashout">
                    cashout
                  </button>
                  <p _ngcontent-bym-c100 className="float-right mb-0">
                    <i _ngcontent-bym-c100 className="fas fa-info-circle" />
                  </p>
                </div>
                <div _ngcontent-bym-c100 className="main-market">
                  <div _ngcontent-bym-c100 className="table-header">
                    <div
                      _ngcontent-bym-c100
                      className="float-left country-name box-6 min-max"
                    >
                      <b _ngcontent-bym-c100>Min:100 Max:100000</b>
                    </div>
                    <div
                      _ngcontent-bym-c100
                      className="back box-1 float-left text-center"
                    >
                      <b _ngcontent-bym-c100>BACK</b>
                    </div>
                    <div
                      _ngcontent-bym-c100
                      className="lay box-1 float-left text-center"
                    >
                      <b _ngcontent-bym-c100>LAY</b>
                    </div>
                  </div>
                  <div _ngcontent-bym-c100 className="table-body">
                    {games?.runners?.map((runner) => {
                      return (
                        <div
                          key={runner?.id}
                          _ngcontent-bym-c100
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
                            _ngcontent-bym-c100
                            className="float-left country-name box-4"
                          >
                            <span _ngcontent-bym-c100 className="team-name">
                              <b _ngcontent-bym-c100>{runner?.name}</b>
                            </span>
                            <p _ngcontent-bym-c100 className="mob-expo-cs">
                              <span
                                _ngcontent-bym-c100
                                className="float-left"
                              />
                            </p>
                          </div>

                          <div
                            onClick={() => setRunnerId(runner?.id)}
                            _ngcontent-bym-c100
                            className="back-1 back1 blink box-1 float-left hidden-portrait text-center"
                          >
                            <button _ngcontent-bym-c100>
                              <span _ngcontent-bym-c100 className="odd d-block">
                                {runner?.back[2]?.price}
                              </span>
                              <span _ngcontent-bym-c100 className="d-block">
                                {runner?.back[2]?.size}
                              </span>
                            </button>
                          </div>
                          <div
                            onClick={() => setRunnerId(runner?.id)}
                            _ngcontent-bym-c100
                            className="back-2 back2 blink box-1 float-left hidden-portrait text-center"
                          >
                            <button _ngcontent-bym-c100>
                              <span _ngcontent-bym-c100 className="odd d-block">
                                {runner?.back?.[1]?.price}
                              </span>
                              <span _ngcontent-bym-c100 className="d-block">
                                {runner?.back?.[1]?.size}
                              </span>
                            </button>
                          </div>
                          <div
                            onClick={() => setRunnerId(runner?.id)}
                            _ngcontent-bym-c100
                            className="back blink box-1 float-left lock text-center"
                          >
                            <button
                              _ngcontent-bym-c100
                              data-toggle="modal"
                              data-target="#Placebet"
                            >
                              <span _ngcontent-bym-c100 className="odd d-block">
                                {runner?.back?.[0]?.price}
                              </span>
                              <span _ngcontent-bym-c100 className="d-block">
                                {runner?.back?.[0]?.size}
                              </span>
                            </button>
                          </div>
                          <div
                            onClick={() => setRunnerId(runner?.id)}
                            _ngcontent-bym-c100
                            className="blink box-1 float-left lay text-center"
                          >
                            <button _ngcontent-bym-c100>
                              <span _ngcontent-bym-c100 className="odd d-block">
                                {runner?.lay?.[0]?.price}
                              </span>
                              <span _ngcontent-bym-c100 className="d-block">
                                {runner?.lay?.[0]?.size}
                              </span>
                            </button>
                          </div>
                          <div
                            onClick={() => setRunnerId(runner?.id)}
                            _ngcontent-bym-c100
                            className="blink box-1 float-left hidden-portrait lay-2 text-center"
                          >
                            <button _ngcontent-bym-c100>
                              <span _ngcontent-bym-c100 className="odd d-block">
                                {runner?.lay?.[1]?.price}
                              </span>
                              <span _ngcontent-bym-c100 className="d-block">
                                {runner?.lay?.[1]?.size}
                              </span>
                            </button>
                          </div>
                          <div
                            onClick={() => setRunnerId(runner?.id)}
                            _ngcontent-bym-c100
                            className="blink box-1 float-left hidden-portrait lay-1 text-center"
                          >
                            <button _ngcontent-bym-c100>
                              <span _ngcontent-bym-c100 className="odd d-block">
                                {runner?.lay?.[2]?.price}
                              </span>
                              <span _ngcontent-bym-c100 className="d-block">
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
              </div>
            </div>
            <div _ngcontent-bym-c104 />
          </div>
        );
      })}
    </>
  );
};

export default MatchOdds;

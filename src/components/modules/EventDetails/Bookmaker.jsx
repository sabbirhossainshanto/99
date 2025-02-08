/* eslint-disable react/no-unknown-property */

import { Status } from "../../../const";

const Bookmaker = ({ bookmaker }) => {
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

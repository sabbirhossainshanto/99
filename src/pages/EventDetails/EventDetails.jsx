/* eslint-disable react/no-unknown-property */

const EventDetails = () => {
  return (
    <div _ngcontent-bym-c104 className="main-content">
      <div
        _ngcontent-bym-c104
        className="game-page"
        style={{ position: "relative" }}
      >
        <tabset _ngcontent-bym-c104 _nghost-bym-c46 className="tab-container">
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
                      <div _ngcontent-bym-c104 id="scoreboard-box">
                        <div
                          _ngcontent-bym-c104
                          className="scorecard scorecard-mobile"
                          style={{ marginBottom: "3px" }}
                        >
                          <link
                            rel="preconnect"
                            href="https://fonts.googleapis.com"
                          />
                          <link
                            rel="preconnect"
                            href="https://fonts.gstatic.com"
                            crossOrigin
                          />
                          <link
                            href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
                            rel="stylesheet"
                          />
                          <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1.0"
                          />
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                '\n                                      .container-main {\n                                        font-family: Arial, Helvetica,\n                                          sans-serif;\n                                        padding: 0;\n                                        background: linear-gradient(\n                                            0deg,\n                                            rgb(0 0 0 / 39%),\n                                            rgb(0 0 0 / 30%)\n                                          ),\n                                          url(https://speedcdn.io/assets/score_card/desktop.webp);\n                                        background-repeat: no-repeat;\n                                        background-size: cover;\n                                        margin-right: auto;\n                                        margin-left: auto;\n                                        color: white;\n                                        height: 168px;\n                                        align-items: center;\n                                        display: grid;\n                                        background-position: bottom;\n                                        position: relative;\n                                      }\n\n                                      .row-ctm {\n                                        font-family: "Nunito", serif;\n                                        font-optical-sizing: auto;\n                                        font-weight: 200;\n                                        font-style: normal;\n                                        display: flex;\n                                        flex-wrap: wrap;\n                                        align-items: center;\n                                        /* Vertically centers content */\n                                        justify-content: center;\n                                        /* Horizontally centers content */\n                                        text-align: center;\n                                        /* Ensures text inside elements is centered */\n                                        padding: 0px;\n                                        width: 100%;\n                                        /* Ensures it takes the full available width */\n                                      }\n\n                                      .team {\n                                        flex: 0 0 10%;\n                                        max-width: 10%;\n                                        text-align: center;\n                                      }\n\n                                      .match_status {\n                                        flex: 0 0 45%;\n                                        max-width: 45%;\n                                        text-align: center;\n                                        align-items: center;\n                                        /* Vertically centers content */\n                                        justify-content: center;\n                                        /* Horizontally centers content */\n                                        text-align: center;\n                                        /* Ensures text inside elements is centered */\n                                        font-weight: 00;\n                                        font-size: 10px;\n                                        letter-spacing: 0px;\n                                        padding: 4px 0;\n                                      }\n\n                                      .inn1 {\n                                        font-size: 10px;\n                                        font-weight: 00;\n                                        font-style: italic;\n                                        color: #fff;\n                                        width: max-content;\n                                        margin: 0 auto;\n                                        padding: 5px;\n                                      }\n\n                                      .curr_inn {\n                                        font-size: 12px;\n                                        font-weight: 600;\n                                      }\n\n                                      .team_name {\n                                        text-transform: capitalize;\n                                        font-size: 14px;\n                                        margin: 0;\n                                        font-weight: 00;\n                                      }\n\n                                      .day {\n                                        width: 100%;\n                                        display: block;\n                                        text-transform: capitalize;\n                                        font-size: 10px;\n                                      }\n\n                                      .status {\n                                        width: 100%;\n                                      }\n\n                                      .day:before {\n                                        color: #fff;\n                                        margin: 0 5px;\n                                      }\n\n                                      .day:after {\n                                        color: #fff;\n                                        margin: 0 5px;\n                                      }\n\n                                      .team_name img {\n                                        padding-left: 5px;\n                                        vertical-align: middle;\n                                      }\n\n                                      .score-over ul {\n                                        padding: 0;\n                                        margin: 0;\n                                      }\n\n                                      .score-over ul li {\n                                        display: inline-block;\n                                        color: #fff;\n                                      }\n\n                                      .score-over ul li p {\n                                        margin: 0;\n                                      }\n\n                                      .six-balls {\n                                        padding: 2px;\n                                        font-size: 17px;\n                                        font-weight: 600 !important;\n                                      }\n\n                                      .target {\n                                        font-size: 10px;\n                                        margin: 0;\n                                      }\n\n                                      .commantry2 {\n                                        font-family: Arial, Helvetica,\n                                          sans-serif;\n                                        font-size: 16px;\n                                        display: block;\n                                      }\n\n                                      @-webkit-keyframes txt {\n                                        0% {\n                                          -webkit-transform: scale(1);\n                                          transform: scale(1);\n                                        }\n\n                                        50% {\n                                          -webkit-transform: scale(1.25);\n                                          transform: scale(1.25);\n                                        }\n\n                                        100% {\n                                          -webkit-transform: scale(1);\n                                          transform: scale(1);\n                                        }\n                                      }\n\n                                      @keyframes txt {\n                                        0% {\n                                          -webkit-transform: scale(1);\n                                          transform: scale(1);\n                                        }\n\n                                        50% {\n                                          -webkit-transform: scale(1.25);\n                                          transform: scale(1.25);\n                                        }\n\n                                        100% {\n                                          -webkit-transform: scale(1);\n                                          transform: scale(1);\n                                        }\n                                      }\n\n                                      .batsman-container {\n                                        text-transform: uppercase;\n                                        display: flex;\n                                        justify-content: space-between;\n                                        width: 50%;\n                                        display: flex;\n                                        flex-wrap: wrap;\n                                        align-items: center;\n                                        /* Vertically centers content */\n                                        justify-content: center;\n                                        /* Horizontally centers content */\n                                        text-align: center;\n                                        /* Ensures text inside elements is centered */\n                                        padding: 0px;\n                                        width: 100%;\n                                        /* Ensures it takes the full available width */\n                                        text-align: center !important;\n                                        /* Ensures space between striker and non-striker */\n                                        gap: 20%;\n                                        /* Optional: Adds space between items */\n                                        font-size: 12px;\n                                        font-weight: 600;\n                                      }\n\n                                      .requiredRunRate {\n                                        margin-top: 5px !important;\n                                        font-size: 12px !important;\n                                        font-weight: 100;\n                                      }\n\n                                      @media only screen and (max-width: 767px) {\n                                        .container-main {\n                                          font-family: Arial, Helvetica,\n                                            sans-serif;\n                                          height: 168px !important;\n                                          background: linear-gradient(\n                                              0deg,\n                                              rgba(0, 0, 0, 0.39),\n                                              rgba(0, 0, 0, 0.3)\n                                            ),\n                                            url(https://speedcdn.io/assets/score_card/mobile.webp);\n                                          /* Mobile background */\n                                          background-size: cover;\n                                          background-position: center;\n                                        }\n\n                                        .batsman-container {\n                                          flex-direction: column;\n                                          text-transform: uppercase;\n                                          align-items: center;\n                                          font-size: 10px !important;\n                                          width: 50%;\n                                          display: flex;\n                                          flex-wrap: wrap;\n                                          align-items: center;\n                                          /* Vertically centers content */\n                                          justify-content: center;\n                                          /* Horizontally centers content */\n                                          text-align: center;\n                                          /* Ensures text inside elements is centered */\n                                          padding: 0px;\n                                          width: 100%;\n                                          /* Ensures it takes the full available width */\n                                          text-align: center !important;\n                                          /* Ensures space between striker and non-striker */\n                                          gap: 20%;\n                                          /* Optional: Adds space between items */\n                                          font-weight: 600;\n                                        }\n\n                                        .bowler_svg,\n                                        .batsman_svg {\n                                          display: none !important;\n                                        }\n\n                                        .six-balls {\n                                          padding: 2px;\n                                          font-size: 12px;\n                                          font-weight: 600 !important;\n                                        }\n\n                                        .team {\n                                          flex: 0 0 20%;\n                                          max-width: 20%;\n                                          text-align: center;\n                                          font-size: 10px !important;\n                                        }\n\n                                        .match_status {\n                                          flex: 0 0 45%;\n                                          max-width: 45%;\n                                          text-align: center;\n                                          align-items: center;\n                                          /* Vertically centers content */\n                                          justify-content: center;\n                                          /* Horizontally centers content */\n                                          text-align: center;\n                                          /* Ensures text inside elements is centered */\n                                          font-weight: 00;\n                                          font-size: 10px !important;\n                                          letter-spacing: 0px;\n                                          padding: 4px 0;\n                                        }\n\n                                        .commantry2 {\n                                          font-family: Arial, Helvetica,\n                                            sans-serif;\n                                          font-size: 14px;\n                                          display: block;\n                                        }\n\n                                        .requiredRunRate {\n                                          margin-top: 5px !important;\n                                          font-size: 10px !important;\n                                          font-weight: 400;\n                                        }\n                                      }\n                                    ',
                            }}
                          />
                          <div>
                            <div style={{ marginBottom: "3px" }}>
                              <div className="container-main">
                                <div className="row-ctm">
                                  <div className="batsman_svg">
                                    <img
                                      src="https://speedcdn.io/assets/score_card/batsman-bold-outline.svg"
                                      height="auto"
                                      width="auto"
                                      style={{
                                        height: "100px !important",
                                      }}
                                    />
                                  </div>
                                  <div
                                    className="team"
                                    style={{
                                      textAlign: "right",
                                      marginRight: "10px",
                                      lineHeight: 2,
                                    }}
                                  >
                                    <div className="curr_inn">
                                      <div
                                        style={{
                                          lineHeight: "1.2",
                                          fontWeight: 600,
                                        }}
                                      >
                                        ENG
                                      </div>
                                      <span
                                        className="run"
                                        style={{ fontWeight: 600 }}
                                      >
                                        197/6&nbsp;
                                      </span>
                                      <span
                                        className="over"
                                        style={{ fontWeight: 600 }}
                                      >
                                        (38.3)
                                      </span>
                                      <br />
                                      <span
                                        className="over"
                                        style={{ fontWeight: 600 }}
                                      >
                                        CRR :{" "}
                                      </span>
                                      5.12
                                    </div>
                                  </div>
                                  <div
                                    className="match_status"
                                    style={{
                                      border: "1px solid #fff !important",
                                      borderRadius: "7px",
                                      padding: "5px",
                                    }}
                                  >
                                    <span className="commantry2">
                                      Ball chalu
                                    </span>
                                    <p
                                      className="target"
                                      style={{ fontStyle: "italic" }}
                                    />
                                    <span className="day">
                                      <div className="score-over">
                                        <ul>
                                          <li className="six-balls">0</li>
                                          <li className="six-balls">0</li>
                                          <li className="six-balls">0</li>
                                        </ul>
                                      </div>
                                    </span>
                                    <div
                                      className="requiredRunRate"
                                      style={{ fontWeight: 600 }}
                                    >
                                      <span style={{ fontWeight: 600 }} />
                                    </div>
                                    <div className="batsman-container">
                                      <div>
                                        <span>*Brydon Carse</span>
                                        <span>4 (13)</span>
                                      </div>
                                      <div>
                                        <span>Jacob Bethell</span>
                                        <span>37 (52)</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="team"
                                    style={{
                                      textAlign: "left",
                                      marginLeft: "10px",
                                      lineHeight: 2,
                                    }}
                                  >
                                    <div className="curr_inn">
                                      <div
                                        style={{
                                          lineHeight: "1.2",
                                          fontWeight: 600,
                                        }}
                                      >
                                        IND
                                      </div>
                                      <span
                                        className="run"
                                        style={{ fontWeight: 600 }}
                                      >
                                        0/0
                                      </span>
                                      <span
                                        className="over"
                                        style={{ fontWeight: 600 }}
                                      >
                                        (0.0)
                                      </span>
                                      <br />
                                      <span style={{ fontWeight: 600 }}>
                                        CRR:{" "}
                                      </span>
                                      0
                                    </div>
                                  </div>
                                  <div className="bowler_svg">
                                    <img
                                      src="https://speedcdn.io/assets/score_card/baller-bold-outline.svg"
                                      height="auto"
                                      width="auto"
                                      style={{
                                        height: "90px !important",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-bym-c104 className="sr-widget-1" />
                      <div _ngcontent-bym-c104>
                        <app-market-detail _ngcontent-bym-c104 _nghost-bym-c100>
                          <div _ngcontent-bym-c100>
                            <div
                              _ngcontent-bym-c100
                              className="market-title mt-1"
                            >
                              Match Odds
                              <button
                                _ngcontent-bym-c100
                                className="btn-cashout"
                              >
                                cashout
                              </button>
                              <p
                                _ngcontent-bym-c100
                                className="float-right mb-0"
                              >
                                <i
                                  _ngcontent-bym-c100
                                  className="fas fa-info-circle"
                                />
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
                                <div
                                  _ngcontent-bym-c100
                                  className="table-row"
                                  data-title
                                >
                                  <div
                                    _ngcontent-bym-c100
                                    className="float-left country-name box-4"
                                  >
                                    <span
                                      _ngcontent-bym-c100
                                      className="team-name"
                                    >
                                      <b _ngcontent-bym-c100>India</b>
                                    </span>
                                    <p
                                      _ngcontent-bym-c100
                                      className="mob-expo-cs"
                                    >
                                      <span
                                        _ngcontent-bym-c100
                                        className="float-left"
                                      />
                                    </p>
                                  </div>
                                  <div
                                    _ngcontent-bym-c100
                                    className="back-1 back1 blink box-1 float-left hidden-portrait text-center"
                                  >
                                    <button _ngcontent-bym-c100>
                                      <span
                                        _ngcontent-bym-c100
                                        className="odd d-block"
                                      >
                                        1.18
                                      </span>
                                      <span
                                        _ngcontent-bym-c100
                                        className="d-block"
                                      >
                                        448751.47
                                      </span>
                                    </button>
                                  </div>
                                  <div
                                    _ngcontent-bym-c100
                                    className="back-2 back2 blink box-1 float-left hidden-portrait text-center"
                                  >
                                    <button _ngcontent-bym-c100>
                                      <span
                                        _ngcontent-bym-c100
                                        className="odd d-block"
                                      >
                                        1.19
                                      </span>
                                      <span
                                        _ngcontent-bym-c100
                                        className="d-block"
                                      >
                                        509737.47
                                      </span>
                                    </button>
                                  </div>
                                  <div
                                    _ngcontent-bym-c100
                                    className="back blink box-1 float-left lock text-center"
                                  >
                                    <button
                                      _ngcontent-bym-c100
                                      data-toggle="modal"
                                      data-target="#Placebet"
                                    >
                                      <span
                                        _ngcontent-bym-c100
                                        className="odd d-block"
                                      >
                                        1.2
                                      </span>
                                      <span
                                        _ngcontent-bym-c100
                                        className="d-block"
                                      >
                                        1064.19
                                      </span>
                                    </button>
                                  </div>
                                  <div
                                    _ngcontent-bym-c100
                                    className="blink box-1 float-left lay text-center"
                                  >
                                    <button _ngcontent-bym-c100>
                                      <span
                                        _ngcontent-bym-c100
                                        className="odd d-block"
                                      >
                                        1.21
                                      </span>
                                      <span
                                        _ngcontent-bym-c100
                                        className="d-block"
                                      >
                                        212350.96
                                      </span>
                                    </button>
                                  </div>
                                  <div
                                    _ngcontent-bym-c100
                                    className="blink box-1 float-left hidden-portrait lay-2 text-center"
                                  >
                                    <button _ngcontent-bym-c100>
                                      <span
                                        _ngcontent-bym-c100
                                        className="odd d-block"
                                      >
                                        1.22
                                      </span>
                                      <span
                                        _ngcontent-bym-c100
                                        className="d-block"
                                      >
                                        16294.56
                                      </span>
                                    </button>
                                  </div>
                                  <div
                                    _ngcontent-bym-c100
                                    className="blink box-1 float-left hidden-portrait lay-1 text-center"
                                  >
                                    <button _ngcontent-bym-c100>
                                      <span
                                        _ngcontent-bym-c100
                                        className="odd d-block"
                                      >
                                        1.23
                                      </span>
                                      <span
                                        _ngcontent-bym-c100
                                        className="d-block"
                                      >
                                        57541.9
                                      </span>
                                    </button>
                                  </div>
                                </div>
                                <div
                                  _ngcontent-bym-c100
                                  className="table-row"
                                  data-title
                                >
                                  <div
                                    _ngcontent-bym-c100
                                    className="float-left country-name box-4"
                                  >
                                    <span
                                      _ngcontent-bym-c100
                                      className="team-name"
                                    >
                                      <b _ngcontent-bym-c100>England</b>
                                    </span>
                                    <p
                                      _ngcontent-bym-c100
                                      className="mob-expo-cs"
                                    >
                                      <span
                                        _ngcontent-bym-c100
                                        className="float-left"
                                      />
                                    </p>
                                  </div>
                                  <div
                                    _ngcontent-bym-c100
                                    className="back-1 back1 blink box-1 float-left hidden-portrait text-center"
                                  >
                                    <button _ngcontent-bym-c100>
                                      <span
                                        _ngcontent-bym-c100
                                        className="odd d-block"
                                      >
                                        5.6
                                      </span>
                                      <span
                                        _ngcontent-bym-c100
                                        className="d-block"
                                      >
                                        36
                                      </span>
                                    </button>
                                  </div>
                                  <div
                                    _ngcontent-bym-c100
                                    className="back-2 back2 blink box-1 float-left hidden-portrait text-center"
                                  >
                                    <button _ngcontent-bym-c100>
                                      <span
                                        _ngcontent-bym-c100
                                        className="odd d-block"
                                      >
                                        5.7
                                      </span>
                                      <span
                                        _ngcontent-bym-c100
                                        className="d-block"
                                      >
                                        45542.81
                                      </span>
                                    </button>
                                  </div>
                                  <div
                                    _ngcontent-bym-c100
                                    className="back blink box-1 float-left lock text-center"
                                  >
                                    <button
                                      _ngcontent-bym-c100
                                      data-toggle="modal"
                                      data-target="#Placebet"
                                    >
                                      <span
                                        _ngcontent-bym-c100
                                        className="odd d-block"
                                      >
                                        5.8
                                      </span>
                                      <span
                                        _ngcontent-bym-c100
                                        className="d-block"
                                      >
                                        32
                                      </span>
                                    </button>
                                  </div>
                                  <div
                                    _ngcontent-bym-c100
                                    className="blink box-1 float-left lay text-center"
                                  >
                                    <button _ngcontent-bym-c100>
                                      <span
                                        _ngcontent-bym-c100
                                        className="odd d-block"
                                      >
                                        6
                                      </span>
                                      <span
                                        _ngcontent-bym-c100
                                        className="d-block"
                                      >
                                        212.84
                                      </span>
                                    </button>
                                  </div>
                                  <div
                                    _ngcontent-bym-c100
                                    className="blink box-1 float-left hidden-portrait lay-2 text-center"
                                  >
                                    <button _ngcontent-bym-c100>
                                      <span
                                        _ngcontent-bym-c100
                                        className="odd d-block"
                                      >
                                        6.2
                                      </span>
                                      <span
                                        _ngcontent-bym-c100
                                        className="d-block"
                                      >
                                        51.61
                                      </span>
                                    </button>
                                  </div>
                                  <div
                                    _ngcontent-bym-c100
                                    className="blink box-1 float-left hidden-portrait lay-1 text-center"
                                  >
                                    <button _ngcontent-bym-c100>
                                      <span
                                        _ngcontent-bym-c100
                                        className="odd d-block"
                                      >
                                        6.4
                                      </span>
                                      <span
                                        _ngcontent-bym-c100
                                        className="d-block"
                                      >
                                        94830.88
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div
                                _ngcontent-bym-c100
                                className="table-remark text-right remark"
                              >
                                <marquee _ngcontent-bym-c100>
                                  POLITICS : DELHI ELECTION 2025 MARKET BETS
                                  STARTED
                                </marquee>
                              </div>
                            </div>
                          </div>
                        </app-market-detail>
                        <div _ngcontent-bym-c104 />
                      </div>
                      <div _ngcontent-bym-c104>
                        <div _ngcontent-bym-c104>
                          <div _ngcontent-bym-c104>
                            <app-bookmaker-detail
                              _ngcontent-bym-c104
                              _nghost-bym-c101
                            >
                              <div _ngcontent-bym-c101>
                                <div
                                  _ngcontent-bym-c101
                                  className="market-title mt-1"
                                >
                                  BOOKMAKER
                                  <button
                                    _ngcontent-bym-c101
                                    className="btn-cashout"
                                  >
                                    cashout
                                  </button>
                                  <p
                                    _ngcontent-bym-c101
                                    className="float-right mb-0"
                                  >
                                    <i
                                      _ngcontent-bym-c101
                                      className="fas fa-info-circle"
                                    />
                                  </p>
                                </div>
                                <div
                                  _ngcontent-bym-c101
                                  className="bookmaker-market"
                                >
                                  <div
                                    _ngcontent-bym-c101
                                    className="table-header"
                                  >
                                    <div
                                      _ngcontent-bym-c101
                                      className="float-left country-name box-6 min-max"
                                    >
                                      <b _ngcontent-bym-c101>
                                        Min:100 Max:2500000
                                      </b>
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
                                  <div
                                    _ngcontent-bym-c101
                                    className="table-body"
                                  >
                                    <div
                                      _ngcontent-bym-c101
                                      className="table-row suspended"
                                      data-title="suspended"
                                    >
                                      <div
                                        _ngcontent-bym-c101
                                        className="float-left country-name box-4"
                                      >
                                        <span
                                          _ngcontent-bym-c101
                                          className="team-name"
                                        >
                                          <b _ngcontent-bym-c101>India</b>
                                        </span>
                                        <p
                                          _ngcontent-bym-c101
                                          className="mob-expo-cs"
                                        >
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
                                            -
                                          </span>
                                          <span
                                            _ngcontent-bym-c101
                                            className="d-block"
                                          >
                                            0.0
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
                                            -
                                          </span>
                                          <span
                                            _ngcontent-bym-c101
                                            className="d-block"
                                          >
                                            0.0
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
                                            19
                                          </span>
                                          <span
                                            _ngcontent-bym-c101
                                            className="d-block"
                                          >
                                            2500000
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
                                            20
                                          </span>
                                          <span
                                            _ngcontent-bym-c101
                                            className="d-block"
                                          >
                                            2500000
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
                                            -
                                          </span>
                                          <span
                                            _ngcontent-bym-c101
                                            className="d-block"
                                          >
                                            0.0
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
                                            -
                                          </span>
                                          <span
                                            _ngcontent-bym-c101
                                            className="d-block"
                                          >
                                            0.0
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                    <div
                                      _ngcontent-bym-c101
                                      className="table-row suspended"
                                      data-title="suspended"
                                    >
                                      <div
                                        _ngcontent-bym-c101
                                        className="float-left country-name box-4"
                                      >
                                        <span
                                          _ngcontent-bym-c101
                                          className="team-name"
                                        >
                                          <b _ngcontent-bym-c101>England</b>
                                        </span>
                                        <p
                                          _ngcontent-bym-c101
                                          className="mob-expo-cs"
                                        >
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
                                            -
                                          </span>
                                          <span
                                            _ngcontent-bym-c101
                                            className="d-block"
                                          >
                                            0.0
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
                                            -
                                          </span>
                                          <span
                                            _ngcontent-bym-c101
                                            className="d-block"
                                          >
                                            0.0
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
                                            498
                                          </span>
                                          <span
                                            _ngcontent-bym-c101
                                            className="d-block"
                                          >
                                            2500000
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
                                            527
                                          </span>
                                          <span
                                            _ngcontent-bym-c101
                                            className="d-block"
                                          >
                                            2500000
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
                                            -
                                          </span>
                                          <span
                                            _ngcontent-bym-c101
                                            className="d-block"
                                          >
                                            0.0
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
                                            -
                                          </span>
                                          <span
                                            _ngcontent-bym-c101
                                            className="d-block"
                                          >
                                            0.0
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  _ngcontent-bym-c101
                                  className="table-remark text-right remark"
                                >
                                  <marquee _ngcontent-bym-c101>
                                    Zimbabwe v Ireland : Match Bets Started in
                                    our Exchange 🏏
                                  </marquee>
                                </div>
                              </div>
                            </app-bookmaker-detail>
                          </div>
                        </div>
                        <div _ngcontent-bym-c104>
                          <div _ngcontent-bym-c104>
                            <app-bookmaker-detail
                              _ngcontent-bym-c104
                              _nghost-bym-c101
                            >
                              <div _ngcontent-bym-c101>
                                <div
                                  _ngcontent-bym-c101
                                  className="market-title mt-1"
                                >
                                  MINI BOOKMAKER
                                  <button
                                    _ngcontent-bym-c101
                                    className="btn-cashout"
                                  >
                                    cashout
                                  </button>
                                  <p
                                    _ngcontent-bym-c101
                                    className="float-right mb-0"
                                  >
                                    <i
                                      _ngcontent-bym-c101
                                      className="fas fa-info-circle"
                                    />
                                  </p>
                                </div>
                                <div
                                  _ngcontent-bym-c101
                                  className="bookmaker-market"
                                >
                                  <div
                                    _ngcontent-bym-c101
                                    className="table-header"
                                  >
                                    <div
                                      _ngcontent-bym-c101
                                      className="float-left country-name box-6 min-max"
                                    >
                                      <b _ngcontent-bym-c101>
                                        Min:100 Max:200000
                                      </b>
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
                                  <div
                                    _ngcontent-bym-c101
                                    className="table-body"
                                  >
                                    <div
                                      _ngcontent-bym-c101
                                      className="table-row suspended"
                                      data-title="suspended"
                                    >
                                      <div
                                        _ngcontent-bym-c101
                                        className="float-left country-name box-4"
                                      >
                                        <span
                                          _ngcontent-bym-c101
                                          className="team-name"
                                        >
                                          <b _ngcontent-bym-c101>India</b>
                                        </span>
                                        <p
                                          _ngcontent-bym-c101
                                          className="mob-expo-cs"
                                        >
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
                                            -
                                          </span>
                                          <span
                                            _ngcontent-bym-c101
                                            className="d-block"
                                          >
                                            0.0
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
                                            -
                                          </span>
                                          <span
                                            _ngcontent-bym-c101
                                            className="d-block"
                                          >
                                            0.0
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
                                            19.25
                                          </span>
                                          <span
                                            _ngcontent-bym-c101
                                            className="d-block"
                                          >
                                            200000
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
                                            20
                                          </span>
                                          <span
                                            _ngcontent-bym-c101
                                            className="d-block"
                                          >
                                            200000
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
                                            -
                                          </span>
                                          <span
                                            _ngcontent-bym-c101
                                            className="d-block"
                                          >
                                            0.0
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
                                            -
                                          </span>
                                          <span
                                            _ngcontent-bym-c101
                                            className="d-block"
                                          >
                                            0.0
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                    <div
                                      _ngcontent-bym-c101
                                      className="table-row suspended"
                                      data-title="suspended"
                                    >
                                      <div
                                        _ngcontent-bym-c101
                                        className="float-left country-name box-4"
                                      >
                                        <span
                                          _ngcontent-bym-c101
                                          className="team-name"
                                        >
                                          <b _ngcontent-bym-c101>England</b>
                                        </span>
                                        <p
                                          _ngcontent-bym-c101
                                          className="mob-expo-cs"
                                        >
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
                                            -
                                          </span>
                                          <span
                                            _ngcontent-bym-c101
                                            className="d-block"
                                          >
                                            0.0
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
                                            -
                                          </span>
                                          <span
                                            _ngcontent-bym-c101
                                            className="d-block"
                                          >
                                            0.0
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
                                            498
                                          </span>
                                          <span
                                            _ngcontent-bym-c101
                                            className="d-block"
                                          >
                                            200000
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
                                            520
                                          </span>
                                          <span
                                            _ngcontent-bym-c101
                                            className="d-block"
                                          >
                                            200000
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
                                            -
                                          </span>
                                          <span
                                            _ngcontent-bym-c101
                                            className="d-block"
                                          >
                                            0.0
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
                                            -
                                          </span>
                                          <span
                                            _ngcontent-bym-c101
                                            className="d-block"
                                          >
                                            0.0
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  _ngcontent-bym-c101
                                  className="table-remark text-right remark"
                                >
                                  <marquee _ngcontent-bym-c101>
                                    Sri Lanka v Australia : Match Bets Started
                                    in our Exchange 🏏
                                  </marquee>
                                </div>
                              </div>
                            </app-bookmaker-detail>
                          </div>
                        </div>
                        <div _ngcontent-bym-c104 />
                      </div>
                      <tabset
                        _ngcontent-bym-c104
                        className="newtab_collect tab-container"
                        _nghost-bym-c46
                      >
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
                              <span _ngcontent-bym-c46 />
                              <span _ngcontent-bym-c104>Fancy</span>
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
                              <span _ngcontent-bym-c46 />
                              <span _ngcontent-bym-c104>Premium</span>
                              <em _ngcontent-bym-c104 className="blink-soft">
                                new
                              </em>
                            </a>
                          </li>
                        </ul>
                        <div _ngcontent-bym-c46 className="tab-content">
                          <tab
                            _ngcontent-bym-c104
                            role="tabpanel"
                            aria-labelledby
                            className="tab-pane active"
                          >
                            <div _ngcontent-bym-c104 className="fancy-markets">
                              <tabset
                                _ngcontent-bym-c104
                                type="tabs mt-2 fancy-nav"
                                _nghost-bym-c46
                                className="tab-container"
                              >
                                <ul
                                  _ngcontent-bym-c46
                                  role="tablist"
                                  className="nav nav-tabs mt-2 fancy-nav"
                                  aria-label="Tabs"
                                >
                                  <li
                                    _ngcontent-bym-c46
                                    className="active nav-item"
                                  >
                                    <a
                                      _ngcontent-bym-c46
                                      href="javascript:void(0);"
                                      role="tab"
                                      className="nav-link active"
                                      aria-controls
                                      aria-selected="true"
                                      id
                                    >
                                      <span _ngcontent-bym-c46 />
                                      <span
                                        _ngcontent-bym-c104
                                        style={{
                                          textTransform: "uppercase",
                                        }}
                                      >
                                        all
                                      </span>
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
                                      <span _ngcontent-bym-c46 />
                                      <span
                                        _ngcontent-bym-c104
                                        style={{
                                          textTransform: "uppercase",
                                        }}
                                      >
                                        sessions
                                      </span>
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
                                      <span _ngcontent-bym-c46 />
                                      <span
                                        _ngcontent-bym-c104
                                        style={{
                                          textTransform: "uppercase",
                                        }}
                                      >
                                        w/p market
                                      </span>
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
                                      <span _ngcontent-bym-c46 />
                                      <span
                                        _ngcontent-bym-c104
                                        style={{
                                          textTransform: "uppercase",
                                        }}
                                      >
                                        odd/even
                                      </span>
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
                                      <span _ngcontent-bym-c46 />
                                      <span
                                        _ngcontent-bym-c104
                                        style={{
                                          textTransform: "uppercase",
                                        }}
                                      >
                                        xtra market
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                                <div _ngcontent-bym-c46 className="tab-content">
                                  <tab
                                    _ngcontent-bym-c104
                                    role="tabpanel"
                                    aria-labelledby
                                    className="tab-pane active"
                                  >
                                    <div _ngcontent-bym-c104>
                                      <div
                                        _ngcontent-bym-c104
                                        className="fancy-market"
                                      >
                                        <div _ngcontent-bym-c104 />
                                        <div _ngcontent-bym-c104>
                                          <div _ngcontent-bym-c104>
                                            <div
                                              _ngcontent-bym-c104
                                              className="table-header"
                                            >
                                              <div
                                                _ngcontent-bym-c104
                                                className="market-title float-left country-name box-4"
                                              >
                                                <span
                                                  _ngcontent-bym-c104
                                                  className="text-uppercase mr-1"
                                                >
                                                  sessions
                                                </span>
                                                <p
                                                  _ngcontent-bym-c104
                                                  className="float-right mb-0"
                                                >
                                                  <i
                                                    _ngcontent-bym-c104
                                                    data-toggle="modal"
                                                    data-target="#Fancy_Rules"
                                                    className="fas fa-info-circle"
                                                  />
                                                </p>
                                              </div>
                                              <div
                                                _ngcontent-bym-c104
                                                className="box-1 float-left lay text-center"
                                              >
                                                <b _ngcontent-bym-c104>No</b>
                                              </div>
                                              <div
                                                _ngcontent-bym-c104
                                                className="back box-1 float-left back text-center"
                                              >
                                                <b _ngcontent-bym-c104>Yes</b>
                                              </div>
                                            </div>
                                            <app-fancy-detail
                                              _ngcontent-bym-c104
                                              _nghost-bym-c102
                                            >
                                              <div _ngcontent-bym-c102>
                                                <div
                                                  _ngcontent-bym-c102
                                                  className="table-body"
                                                >
                                                  <div _ngcontent-bym-c102>
                                                    <div _ngcontent-bym-c102>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="fancy-tripple"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="table-row suspended"
                                                          data-title="ball running"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="float-left country-name box-4"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                40 Over Runs ENG
                                                              </b>
                                                              <em
                                                                _ngcontent-bym-c102
                                                              />
                                                            </span>
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="info-block"
                                                            >
                                                              <a
                                                                _ngcontent-bym-c102
                                                                data-bs-toggle="collapse"
                                                                data-bs-target
                                                                aria-expanded="false"
                                                                className="info-icon collapsed"
                                                                href="#min-max-info6250"
                                                              >
                                                                <i
                                                                  _ngcontent-bym-c102
                                                                  className="fas fa-info-circle m-l-10"
                                                                />
                                                              </a>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="min-max-info collapse"
                                                                id="min-max-info6250"
                                                              >
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Min:
                                                                  </b>
                                                                  100
                                                                </span>
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Max:
                                                                  </b>
                                                                  300000
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="custom-odds-new"
                                                          >
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="con-boxes"
                                                            >
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="box-1 float-left lay text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    204
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    100
                                                                  </span>
                                                                </button>
                                                              </div>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="back box-1 float-left text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    205
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    100
                                                                  </span>
                                                                </button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div _ngcontent-bym-c102>
                                                    <div _ngcontent-bym-c102>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="fancy-tripple"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="table-row suspended"
                                                          data-title="ball running"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="float-left country-name box-4"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                50 Over Runs ENG
                                                                Adv
                                                              </b>
                                                              <em
                                                                _ngcontent-bym-c102
                                                              />
                                                            </span>
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="info-block"
                                                            >
                                                              <a
                                                                _ngcontent-bym-c102
                                                                data-bs-toggle="collapse"
                                                                data-bs-target
                                                                aria-expanded="false"
                                                                className="info-icon collapsed"
                                                                href="#min-max-info6251"
                                                              >
                                                                <i
                                                                  _ngcontent-bym-c102
                                                                  className="fas fa-info-circle m-l-10"
                                                                />
                                                              </a>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="min-max-info collapse"
                                                                id="min-max-info6251"
                                                              >
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Min:
                                                                  </b>
                                                                  100
                                                                </span>
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Max:
                                                                  </b>
                                                                  200000
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="custom-odds-new"
                                                          >
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="con-boxes"
                                                            >
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="box-1 float-left lay text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    264
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    100
                                                                  </span>
                                                                </button>
                                                              </div>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="back box-1 float-left text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    265
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    100
                                                                  </span>
                                                                </button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div _ngcontent-bym-c102>
                                                    <div _ngcontent-bym-c102>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="fancy-tripple"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="table-row suspended"
                                                          data-title="ball running"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="float-left country-name box-4"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Total Runs In
                                                                Match Adv
                                                              </b>
                                                              <em
                                                                _ngcontent-bym-c102
                                                              />
                                                            </span>
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="info-block"
                                                            >
                                                              <a
                                                                _ngcontent-bym-c102
                                                                data-bs-toggle="collapse"
                                                                data-bs-target
                                                                aria-expanded="false"
                                                                className="info-icon collapsed"
                                                                href="#min-max-info6252"
                                                              >
                                                                <i
                                                                  _ngcontent-bym-c102
                                                                  className="fas fa-info-circle m-l-10"
                                                                />
                                                              </a>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="min-max-info collapse"
                                                                id="min-max-info6252"
                                                              >
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Min:
                                                                  </b>
                                                                  100
                                                                </span>
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Max:
                                                                  </b>
                                                                  50000
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="custom-odds-new"
                                                          >
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="con-boxes"
                                                            >
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="box-1 float-left lay text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    519
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    100
                                                                  </span>
                                                                </button>
                                                              </div>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="back box-1 float-left text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    524
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    100
                                                                  </span>
                                                                </button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div _ngcontent-bym-c102>
                                                    <div _ngcontent-bym-c102>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="fancy-tripple"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="table-row suspended"
                                                          data-title="ball running"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="float-left country-name box-4"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                39 Over Runs ENG
                                                              </b>
                                                              <em
                                                                _ngcontent-bym-c102
                                                              />
                                                            </span>
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="info-block"
                                                            >
                                                              <a
                                                                _ngcontent-bym-c102
                                                                data-bs-toggle="collapse"
                                                                data-bs-target
                                                                aria-expanded="false"
                                                                className="info-icon collapsed"
                                                                href="#min-max-info6253"
                                                              >
                                                                <i
                                                                  _ngcontent-bym-c102
                                                                  className="fas fa-info-circle m-l-10"
                                                                />
                                                              </a>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="min-max-info collapse"
                                                                id="min-max-info6253"
                                                              >
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Min:
                                                                  </b>
                                                                  100
                                                                </span>
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Max:
                                                                  </b>
                                                                  100000
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="custom-odds-new"
                                                          >
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="con-boxes"
                                                            >
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="box-1 float-left lay text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    199
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    100
                                                                  </span>
                                                                </button>
                                                              </div>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="back box-1 float-left text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    200
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    100
                                                                  </span>
                                                                </button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div _ngcontent-bym-c102>
                                                    <div _ngcontent-bym-c102>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="fancy-tripple"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="table-row suspended"
                                                          data-title="ball running"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="float-left country-name box-4"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                39.3 Over Runs
                                                                ENG
                                                              </b>
                                                              <em
                                                                _ngcontent-bym-c102
                                                              />
                                                            </span>
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="info-block"
                                                            >
                                                              <a
                                                                _ngcontent-bym-c102
                                                                data-bs-toggle="collapse"
                                                                data-bs-target
                                                                aria-expanded="false"
                                                                className="info-icon collapsed"
                                                                href="#min-max-info6254"
                                                              >
                                                                <i
                                                                  _ngcontent-bym-c102
                                                                  className="fas fa-info-circle m-l-10"
                                                                />
                                                              </a>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="min-max-info collapse"
                                                                id="min-max-info6254"
                                                              >
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Min:
                                                                  </b>
                                                                  100
                                                                </span>
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Max:
                                                                  </b>
                                                                  100000
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="custom-odds-new"
                                                          >
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="con-boxes"
                                                            >
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="box-1 float-left lay text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    202
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    100
                                                                  </span>
                                                                </button>
                                                              </div>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="back box-1 float-left text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    203
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    100
                                                                  </span>
                                                                </button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div _ngcontent-bym-c102>
                                                    <div _ngcontent-bym-c102>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="fancy-tripple"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="table-row suspended"
                                                          data-title="ball running"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="float-left country-name box-4"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Only 40th Over
                                                                Runs ENG
                                                              </b>
                                                              <em
                                                                _ngcontent-bym-c102
                                                              />
                                                            </span>
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="info-block"
                                                            >
                                                              <a
                                                                _ngcontent-bym-c102
                                                                data-bs-toggle="collapse"
                                                                data-bs-target
                                                                aria-expanded="false"
                                                                className="info-icon collapsed"
                                                                href="#min-max-info6255"
                                                              >
                                                                <i
                                                                  _ngcontent-bym-c102
                                                                  className="fas fa-info-circle m-l-10"
                                                                />
                                                              </a>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="min-max-info collapse"
                                                                id="min-max-info6255"
                                                              >
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Min:
                                                                  </b>
                                                                  100
                                                                </span>
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Max:
                                                                  </b>
                                                                  25000
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="custom-odds-new"
                                                          >
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="con-boxes"
                                                            >
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="box-1 float-left lay text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    5
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    110
                                                                  </span>
                                                                </button>
                                                              </div>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="back box-1 float-left text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    5
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    90
                                                                  </span>
                                                                </button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                </div>
                                              </div>
                                            </app-fancy-detail>
                                          </div>
                                        </div>
                                        <div _ngcontent-bym-c104>
                                          <div _ngcontent-bym-c104>
                                            <div
                                              _ngcontent-bym-c104
                                              className="table-header"
                                            >
                                              <div
                                                _ngcontent-bym-c104
                                                className="market-title float-left country-name box-4"
                                              >
                                                <span
                                                  _ngcontent-bym-c104
                                                  className="text-uppercase mr-1"
                                                >
                                                  w/p market
                                                </span>
                                                <p
                                                  _ngcontent-bym-c104
                                                  className="float-right mb-0"
                                                >
                                                  <i
                                                    _ngcontent-bym-c104
                                                    data-toggle="modal"
                                                    data-target="#Fancy_Rules"
                                                    className="fas fa-info-circle"
                                                  />
                                                </p>
                                              </div>
                                              <div
                                                _ngcontent-bym-c104
                                                className="box-1 float-left lay text-center"
                                              >
                                                <b _ngcontent-bym-c104>No</b>
                                              </div>
                                              <div
                                                _ngcontent-bym-c104
                                                className="back box-1 float-left back text-center"
                                              >
                                                <b _ngcontent-bym-c104>Yes</b>
                                              </div>
                                            </div>
                                            <app-fancy-detail
                                              _ngcontent-bym-c104
                                              _nghost-bym-c102
                                            >
                                              <div _ngcontent-bym-c102>
                                                <div
                                                  _ngcontent-bym-c102
                                                  className="table-body"
                                                >
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102>
                                                    <div _ngcontent-bym-c102>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="fancy-tripple"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="table-row suspended"
                                                          data-title="ball running"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="float-left country-name box-4"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Fall of 7th wkt
                                                                Runs ENG
                                                              </b>
                                                              <em
                                                                _ngcontent-bym-c102
                                                              />
                                                            </span>
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="info-block"
                                                            >
                                                              <a
                                                                _ngcontent-bym-c102
                                                                data-bs-toggle="collapse"
                                                                data-bs-target
                                                                aria-expanded="false"
                                                                className="info-icon collapsed"
                                                                href="#min-max-info6256"
                                                              >
                                                                <i
                                                                  _ngcontent-bym-c102
                                                                  className="fas fa-info-circle m-l-10"
                                                                />
                                                              </a>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="min-max-info collapse"
                                                                id="min-max-info6256"
                                                              >
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Min:
                                                                  </b>
                                                                  100
                                                                </span>
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Max:
                                                                  </b>
                                                                  100000
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="custom-odds-new"
                                                          >
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="con-boxes"
                                                            >
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="box-1 float-left lay text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    215
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    110
                                                                  </span>
                                                                </button>
                                                              </div>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="back box-1 float-left text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    215
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    90
                                                                  </span>
                                                                </button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div _ngcontent-bym-c102>
                                                    <div _ngcontent-bym-c102>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="fancy-tripple"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="table-row suspended"
                                                          data-title="ball running"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="float-left country-name box-4"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Fall of 7th wkt
                                                                Run Bhav ENG
                                                              </b>
                                                              <em
                                                                _ngcontent-bym-c102
                                                              />
                                                            </span>
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="info-block"
                                                            >
                                                              <a
                                                                _ngcontent-bym-c102
                                                                data-bs-toggle="collapse"
                                                                data-bs-target
                                                                aria-expanded="false"
                                                                className="info-icon collapsed"
                                                                href="#min-max-info6257"
                                                              >
                                                                <i
                                                                  _ngcontent-bym-c102
                                                                  className="fas fa-info-circle m-l-10"
                                                                />
                                                              </a>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="min-max-info collapse"
                                                                id="min-max-info6257"
                                                              >
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Min:
                                                                  </b>
                                                                  100
                                                                </span>
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Max:
                                                                  </b>
                                                                  100000
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="custom-odds-new"
                                                          >
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="con-boxes"
                                                            >
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="box-1 float-left lay text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    198
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    8
                                                                  </span>
                                                                </button>
                                                              </div>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="back box-1 float-left text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    198
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    5
                                                                  </span>
                                                                </button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div _ngcontent-bym-c102>
                                                    <div _ngcontent-bym-c102>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="fancy-tripple"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="table-row suspended"
                                                          data-title="ball running"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="float-left country-name box-4"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                J Bethell Runs
                                                              </b>
                                                              <em
                                                                _ngcontent-bym-c102
                                                              />
                                                            </span>
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="info-block"
                                                            >
                                                              <a
                                                                _ngcontent-bym-c102
                                                                data-bs-toggle="collapse"
                                                                data-bs-target
                                                                aria-expanded="false"
                                                                className="info-icon collapsed"
                                                                href="#min-max-info6258"
                                                              >
                                                                <i
                                                                  _ngcontent-bym-c102
                                                                  className="fas fa-info-circle m-l-10"
                                                                />
                                                              </a>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="min-max-info collapse"
                                                                id="min-max-info6258"
                                                              >
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Min:
                                                                  </b>
                                                                  100
                                                                </span>
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Max:
                                                                  </b>
                                                                  100000
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="custom-odds-new"
                                                          >
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="con-boxes"
                                                            >
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="box-1 float-left lay text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    58
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    100
                                                                  </span>
                                                                </button>
                                                              </div>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="back box-1 float-left text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    58
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    80
                                                                  </span>
                                                                </button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div _ngcontent-bym-c102>
                                                    <div _ngcontent-bym-c102>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="fancy-tripple"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="table-row suspended"
                                                          data-title="ball running"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="float-left country-name box-4"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                B Carse Runs
                                                              </b>
                                                              <em
                                                                _ngcontent-bym-c102
                                                              />
                                                            </span>
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="info-block"
                                                            >
                                                              <a
                                                                _ngcontent-bym-c102
                                                                data-bs-toggle="collapse"
                                                                data-bs-target
                                                                aria-expanded="false"
                                                                className="info-icon collapsed"
                                                                href="#min-max-info6259"
                                                              >
                                                                <i
                                                                  _ngcontent-bym-c102
                                                                  className="fas fa-info-circle m-l-10"
                                                                />
                                                              </a>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="min-max-info collapse"
                                                                id="min-max-info6259"
                                                              >
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Min:
                                                                  </b>
                                                                  100
                                                                </span>
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Max:
                                                                  </b>
                                                                  100000
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="custom-odds-new"
                                                          >
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="con-boxes"
                                                            >
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="box-1 float-left lay text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    19
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    110
                                                                  </span>
                                                                </button>
                                                              </div>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="back box-1 float-left text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    19
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    90
                                                                  </span>
                                                                </button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div _ngcontent-bym-c102>
                                                    <div _ngcontent-bym-c102>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="fancy-tripple"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="table-row suspended"
                                                          data-title="ball running"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="float-left country-name box-4"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                J Bethell Run
                                                                Bhav
                                                              </b>
                                                              <em
                                                                _ngcontent-bym-c102
                                                              />
                                                            </span>
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="info-block"
                                                            >
                                                              <a
                                                                _ngcontent-bym-c102
                                                                data-bs-toggle="collapse"
                                                                data-bs-target
                                                                aria-expanded="false"
                                                                className="info-icon collapsed"
                                                                href="#min-max-info62510"
                                                              >
                                                                <i
                                                                  _ngcontent-bym-c102
                                                                  className="fas fa-info-circle m-l-10"
                                                                />
                                                              </a>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="min-max-info collapse"
                                                                id="min-max-info62510"
                                                              >
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Min:
                                                                  </b>
                                                                  100
                                                                </span>
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Max:
                                                                  </b>
                                                                  100000
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="custom-odds-new"
                                                          >
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="con-boxes"
                                                            >
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="box-1 float-left lay text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    38
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    7
                                                                  </span>
                                                                </button>
                                                              </div>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="back box-1 float-left text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    38
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    4
                                                                  </span>
                                                                </button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div _ngcontent-bym-c102>
                                                    <div _ngcontent-bym-c102>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="fancy-tripple"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="table-row suspended"
                                                          data-title="ball running"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="float-left country-name box-4"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                B Carse Run Bhav
                                                              </b>
                                                              <em
                                                                _ngcontent-bym-c102
                                                              />
                                                            </span>
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="info-block"
                                                            >
                                                              <a
                                                                _ngcontent-bym-c102
                                                                data-bs-toggle="collapse"
                                                                data-bs-target
                                                                aria-expanded="false"
                                                                className="info-icon collapsed"
                                                                href="#min-max-info62511"
                                                              >
                                                                <i
                                                                  _ngcontent-bym-c102
                                                                  className="fas fa-info-circle m-l-10"
                                                                />
                                                              </a>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="min-max-info collapse"
                                                                id="min-max-info62511"
                                                              >
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Min:
                                                                  </b>
                                                                  100
                                                                </span>
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Max:
                                                                  </b>
                                                                  100000
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="custom-odds-new"
                                                          >
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="con-boxes"
                                                            >
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="box-1 float-left lay text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    5
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    8
                                                                  </span>
                                                                </button>
                                                              </div>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="back box-1 float-left text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    5
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    5
                                                                  </span>
                                                                </button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div _ngcontent-bym-c102>
                                                    <div _ngcontent-bym-c102>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="fancy-tripple"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="table-row suspended"
                                                          data-title="ball running"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="float-left country-name box-4"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                J Bethell
                                                                Boundaries
                                                              </b>
                                                              <em
                                                                _ngcontent-bym-c102
                                                              />
                                                            </span>
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="info-block"
                                                            >
                                                              <a
                                                                _ngcontent-bym-c102
                                                                data-bs-toggle="collapse"
                                                                data-bs-target
                                                                aria-expanded="false"
                                                                className="info-icon collapsed"
                                                                href="#min-max-info62512"
                                                              >
                                                                <i
                                                                  _ngcontent-bym-c102
                                                                  className="fas fa-info-circle m-l-10"
                                                                />
                                                              </a>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="min-max-info collapse"
                                                                id="min-max-info62512"
                                                              >
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Min:
                                                                  </b>
                                                                  100
                                                                </span>
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Max:
                                                                  </b>
                                                                  25000
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="custom-odds-new"
                                                          >
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="con-boxes"
                                                            >
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="box-1 float-left lay text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    5
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    100
                                                                  </span>
                                                                </button>
                                                              </div>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="back box-1 float-left text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    6
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    100
                                                                  </span>
                                                                </button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div _ngcontent-bym-c102>
                                                    <div _ngcontent-bym-c102>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="fancy-tripple"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="table-row suspended"
                                                          data-title="ball running"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="float-left country-name box-4"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                B Carse
                                                                Boundaries
                                                              </b>
                                                              <em
                                                                _ngcontent-bym-c102
                                                              />
                                                            </span>
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="info-block"
                                                            >
                                                              <a
                                                                _ngcontent-bym-c102
                                                                data-bs-toggle="collapse"
                                                                data-bs-target
                                                                aria-expanded="false"
                                                                className="info-icon collapsed"
                                                                href="#min-max-info62513"
                                                              >
                                                                <i
                                                                  _ngcontent-bym-c102
                                                                  className="fas fa-info-circle m-l-10"
                                                                />
                                                              </a>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="min-max-info collapse"
                                                                id="min-max-info62513"
                                                              >
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Min:
                                                                  </b>
                                                                  100
                                                                </span>
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Max:
                                                                  </b>
                                                                  25000
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="custom-odds-new"
                                                          >
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="con-boxes"
                                                            >
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="box-1 float-left lay text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    2
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    110
                                                                  </span>
                                                                </button>
                                                              </div>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="back box-1 float-left text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    2
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    90
                                                                  </span>
                                                                </button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div _ngcontent-bym-c102>
                                                    <div _ngcontent-bym-c102>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="fancy-tripple"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="table-row suspended"
                                                          data-title="ball running"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="float-left country-name box-4"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                7th wkt pship
                                                                Boundaries ENG
                                                              </b>
                                                              <em
                                                                _ngcontent-bym-c102
                                                              />
                                                            </span>
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="info-block"
                                                            >
                                                              <a
                                                                _ngcontent-bym-c102
                                                                data-bs-toggle="collapse"
                                                                data-bs-target
                                                                aria-expanded="false"
                                                                className="info-icon collapsed"
                                                                href="#min-max-info62514"
                                                              >
                                                                <i
                                                                  _ngcontent-bym-c102
                                                                  className="fas fa-info-circle m-l-10"
                                                                />
                                                              </a>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="min-max-info collapse"
                                                                id="min-max-info62514"
                                                              >
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Min:
                                                                  </b>
                                                                  100
                                                                </span>
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Max:
                                                                  </b>
                                                                  25000
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="custom-odds-new"
                                                          >
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="con-boxes"
                                                            >
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="box-1 float-left lay text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    3
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    100
                                                                  </span>
                                                                </button>
                                                              </div>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="back box-1 float-left text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    4
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    100
                                                                  </span>
                                                                </button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div _ngcontent-bym-c102>
                                                    <div _ngcontent-bym-c102 />
                                                  </div>
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                </div>
                                              </div>
                                            </app-fancy-detail>
                                          </div>
                                        </div>
                                        <div _ngcontent-bym-c104>
                                          <div _ngcontent-bym-c104>
                                            <div
                                              _ngcontent-bym-c104
                                              className="table-header"
                                            >
                                              <div
                                                _ngcontent-bym-c104
                                                className="market-title float-left country-name box-4"
                                              >
                                                <span
                                                  _ngcontent-bym-c104
                                                  className="text-uppercase mr-1"
                                                >
                                                  odd/even
                                                </span>
                                                <p
                                                  _ngcontent-bym-c104
                                                  className="float-right mb-0"
                                                >
                                                  <i
                                                    _ngcontent-bym-c104
                                                    data-toggle="modal"
                                                    data-target="#Fancy_Rules"
                                                    className="fas fa-info-circle"
                                                  />
                                                </p>
                                              </div>
                                              <div
                                                _ngcontent-bym-c104
                                                className="box-1 float-left lay text-center"
                                              >
                                                <b _ngcontent-bym-c104>No</b>
                                              </div>
                                              <div
                                                _ngcontent-bym-c104
                                                className="back box-1 float-left back text-center"
                                              >
                                                <b _ngcontent-bym-c104>Yes</b>
                                              </div>
                                            </div>
                                            <app-fancy-detail
                                              _ngcontent-bym-c104
                                              _nghost-bym-c102
                                            >
                                              <div _ngcontent-bym-c102>
                                                <div
                                                  _ngcontent-bym-c102
                                                  className="table-body"
                                                >
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102>
                                                    <div _ngcontent-bym-c102>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="fancy-tripple"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="table-row"
                                                          data-title
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="float-left country-name box-4"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                50 Over Odd Run
                                                                Bhav ENG Adv
                                                              </b>
                                                              <em
                                                                _ngcontent-bym-c102
                                                              />
                                                            </span>
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="info-block"
                                                            >
                                                              <a
                                                                _ngcontent-bym-c102
                                                                data-bs-toggle="collapse"
                                                                data-bs-target
                                                                aria-expanded="false"
                                                                className="info-icon collapsed"
                                                                href="#min-max-info62518"
                                                              >
                                                                <i
                                                                  _ngcontent-bym-c102
                                                                  className="fas fa-info-circle m-l-10"
                                                                />
                                                              </a>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="min-max-info collapse"
                                                                id="min-max-info62518"
                                                              >
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Min:
                                                                  </b>
                                                                  100
                                                                </span>
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Max:
                                                                  </b>
                                                                  25000
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="custom-odds-new"
                                                          >
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="con-boxes"
                                                            >
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="box-1 float-left lay text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    0
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    0
                                                                  </span>
                                                                </button>
                                                              </div>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="back box-1 float-left text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    1
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    98
                                                                  </span>
                                                                </button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div _ngcontent-bym-c102>
                                                    <div _ngcontent-bym-c102>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="fancy-tripple"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="table-row"
                                                          data-title
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="float-left country-name box-4"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                50 Over Even Run
                                                                Bhav ENG Adv
                                                              </b>
                                                              <em
                                                                _ngcontent-bym-c102
                                                              />
                                                            </span>
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="info-block"
                                                            >
                                                              <a
                                                                _ngcontent-bym-c102
                                                                data-bs-toggle="collapse"
                                                                data-bs-target
                                                                aria-expanded="false"
                                                                className="info-icon collapsed"
                                                                href="#min-max-info62519"
                                                              >
                                                                <i
                                                                  _ngcontent-bym-c102
                                                                  className="fas fa-info-circle m-l-10"
                                                                />
                                                              </a>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="min-max-info collapse"
                                                                id="min-max-info62519"
                                                              >
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Min:
                                                                  </b>
                                                                  100
                                                                </span>
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Max:
                                                                  </b>
                                                                  25000
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="custom-odds-new"
                                                          >
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="con-boxes"
                                                            >
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="box-1 float-left lay text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    0
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    0
                                                                  </span>
                                                                </button>
                                                              </div>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="back box-1 float-left text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    1
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    98
                                                                  </span>
                                                                </button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </app-fancy-detail>
                                          </div>
                                        </div>
                                        <div _ngcontent-bym-c104>
                                          <div _ngcontent-bym-c104>
                                            <div
                                              _ngcontent-bym-c104
                                              className="table-header"
                                            >
                                              <div
                                                _ngcontent-bym-c104
                                                className="market-title float-left country-name box-4"
                                              >
                                                <span
                                                  _ngcontent-bym-c104
                                                  className="text-uppercase mr-1"
                                                >
                                                  xtra market
                                                </span>
                                                <p
                                                  _ngcontent-bym-c104
                                                  className="float-right mb-0"
                                                >
                                                  <i
                                                    _ngcontent-bym-c104
                                                    data-toggle="modal"
                                                    data-target="#Fancy_Rules"
                                                    className="fas fa-info-circle"
                                                  />
                                                </p>
                                              </div>
                                              <div
                                                _ngcontent-bym-c104
                                                className="box-1 float-left lay text-center"
                                              >
                                                <b _ngcontent-bym-c104>No</b>
                                              </div>
                                              <div
                                                _ngcontent-bym-c104
                                                className="back box-1 float-left back text-center"
                                              >
                                                <b _ngcontent-bym-c104>Yes</b>
                                              </div>
                                            </div>
                                            <app-fancy-detail
                                              _ngcontent-bym-c104
                                              _nghost-bym-c102
                                            >
                                              <div _ngcontent-bym-c102>
                                                <div
                                                  _ngcontent-bym-c102
                                                  className="table-body"
                                                >
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102>
                                                    <div _ngcontent-bym-c102 />
                                                  </div>
                                                  <div _ngcontent-bym-c102>
                                                    <div _ngcontent-bym-c102>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="fancy-tripple"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="table-row suspended"
                                                          data-title="ball running"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="float-left country-name box-4"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                7th wkt Caught
                                                                Out ENG
                                                              </b>
                                                              <em
                                                                _ngcontent-bym-c102
                                                              />
                                                            </span>
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="info-block"
                                                            >
                                                              <a
                                                                _ngcontent-bym-c102
                                                                data-bs-toggle="collapse"
                                                                data-bs-target
                                                                aria-expanded="false"
                                                                className="info-icon collapsed"
                                                                href="#min-max-info62517"
                                                              >
                                                                <i
                                                                  _ngcontent-bym-c102
                                                                  className="fas fa-info-circle m-l-10"
                                                                />
                                                              </a>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="min-max-info collapse"
                                                                id="min-max-info62517"
                                                              >
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Min:
                                                                  </b>
                                                                  100
                                                                </span>
                                                                <span
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <b
                                                                    _ngcontent-bym-c102
                                                                  >
                                                                    Max:
                                                                  </b>
                                                                  25000
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="custom-odds-new"
                                                          >
                                                            <div
                                                              _ngcontent-bym-c102
                                                              className="con-boxes"
                                                            >
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="box-1 float-left lay text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    1
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    60
                                                                  </span>
                                                                </button>
                                                              </div>
                                                              <div
                                                                _ngcontent-bym-c102
                                                                className="back box-1 float-left text-center"
                                                              >
                                                                <button
                                                                  _ngcontent-bym-c102
                                                                >
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="odd d-block"
                                                                  >
                                                                    1
                                                                  </span>
                                                                  <span
                                                                    _ngcontent-bym-c102
                                                                    className="d-block"
                                                                  >
                                                                    40
                                                                  </span>
                                                                </button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div _ngcontent-bym-c102 />
                                                  <div _ngcontent-bym-c102 />
                                                </div>
                                              </div>
                                            </app-fancy-detail>
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
                                    <div _ngcontent-bym-c104 />
                                    <div
                                      _ngcontent-bym-c104
                                      className="fancy-market"
                                    >
                                      <div _ngcontent-bym-c104>
                                        <div
                                          _ngcontent-bym-c104
                                          className="table-header"
                                        >
                                          <div
                                            _ngcontent-bym-c104
                                            className="market-title float-left country-name box-4"
                                          >
                                            <span
                                              _ngcontent-bym-c104
                                              className="text-uppercase mr-1"
                                            >
                                              sessions
                                            </span>
                                            <p
                                              _ngcontent-bym-c104
                                              className="float-right mb-0"
                                            >
                                              <i
                                                _ngcontent-bym-c104
                                                data-toggle="modal"
                                                data-target="#Fancy_Rules"
                                                className="fas fa-info-circle"
                                              />
                                            </p>
                                          </div>
                                          <div
                                            _ngcontent-bym-c104
                                            className="box-1 float-left lay text-center"
                                          >
                                            <b _ngcontent-bym-c104>No</b>
                                          </div>
                                          <div
                                            _ngcontent-bym-c104
                                            className="back box-1 float-left back text-center"
                                          >
                                            <b _ngcontent-bym-c104>Yes</b>
                                          </div>
                                        </div>
                                        <app-fancy-detail
                                          _ngcontent-bym-c104
                                          _nghost-bym-c102
                                        >
                                          <div _ngcontent-bym-c102>
                                            <div
                                              _ngcontent-bym-c102
                                              className="table-body"
                                            >
                                              <div _ngcontent-bym-c102>
                                                <div _ngcontent-bym-c102>
                                                  <div
                                                    _ngcontent-bym-c102
                                                    className="fancy-tripple"
                                                  >
                                                    <div
                                                      _ngcontent-bym-c102
                                                      className="table-row suspended"
                                                      data-title="ball running"
                                                    >
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="float-left country-name box-4"
                                                      >
                                                        <span
                                                          _ngcontent-bym-c102
                                                        >
                                                          <b
                                                            _ngcontent-bym-c102
                                                          >
                                                            40 Over Runs ENG
                                                          </b>
                                                          <em
                                                            _ngcontent-bym-c102
                                                          />
                                                        </span>
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="info-block"
                                                        >
                                                          <a
                                                            _ngcontent-bym-c102
                                                            data-bs-toggle="collapse"
                                                            data-bs-target
                                                            aria-expanded="false"
                                                            className="info-icon collapsed"
                                                            href="#min-max-info6250"
                                                          >
                                                            <i
                                                              _ngcontent-bym-c102
                                                              className="fas fa-info-circle m-l-10"
                                                            />
                                                          </a>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="min-max-info collapse"
                                                            id="min-max-info6250"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Min:
                                                              </b>
                                                              100
                                                            </span>
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Max:
                                                              </b>
                                                              300000
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="custom-odds-new"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="con-boxes"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="box-1 float-left lay text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                204
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                100
                                                              </span>
                                                            </button>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="back box-1 float-left text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                205
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                100
                                                              </span>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div _ngcontent-bym-c102>
                                                <div _ngcontent-bym-c102>
                                                  <div
                                                    _ngcontent-bym-c102
                                                    className="fancy-tripple"
                                                  >
                                                    <div
                                                      _ngcontent-bym-c102
                                                      className="table-row suspended"
                                                      data-title="ball running"
                                                    >
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="float-left country-name box-4"
                                                      >
                                                        <span
                                                          _ngcontent-bym-c102
                                                        >
                                                          <b
                                                            _ngcontent-bym-c102
                                                          >
                                                            50 Over Runs ENG Adv
                                                          </b>
                                                          <em
                                                            _ngcontent-bym-c102
                                                          />
                                                        </span>
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="info-block"
                                                        >
                                                          <a
                                                            _ngcontent-bym-c102
                                                            data-bs-toggle="collapse"
                                                            data-bs-target
                                                            aria-expanded="false"
                                                            className="info-icon collapsed"
                                                            href="#min-max-info6251"
                                                          >
                                                            <i
                                                              _ngcontent-bym-c102
                                                              className="fas fa-info-circle m-l-10"
                                                            />
                                                          </a>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="min-max-info collapse"
                                                            id="min-max-info6251"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Min:
                                                              </b>
                                                              100
                                                            </span>
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Max:
                                                              </b>
                                                              200000
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="custom-odds-new"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="con-boxes"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="box-1 float-left lay text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                264
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                100
                                                              </span>
                                                            </button>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="back box-1 float-left text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                265
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                100
                                                              </span>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div _ngcontent-bym-c102>
                                                <div _ngcontent-bym-c102>
                                                  <div
                                                    _ngcontent-bym-c102
                                                    className="fancy-tripple"
                                                  >
                                                    <div
                                                      _ngcontent-bym-c102
                                                      className="table-row suspended"
                                                      data-title="ball running"
                                                    >
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="float-left country-name box-4"
                                                      >
                                                        <span
                                                          _ngcontent-bym-c102
                                                        >
                                                          <b
                                                            _ngcontent-bym-c102
                                                          >
                                                            Total Runs In Match
                                                            Adv
                                                          </b>
                                                          <em
                                                            _ngcontent-bym-c102
                                                          />
                                                        </span>
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="info-block"
                                                        >
                                                          <a
                                                            _ngcontent-bym-c102
                                                            data-bs-toggle="collapse"
                                                            data-bs-target
                                                            aria-expanded="false"
                                                            className="info-icon collapsed"
                                                            href="#min-max-info6252"
                                                          >
                                                            <i
                                                              _ngcontent-bym-c102
                                                              className="fas fa-info-circle m-l-10"
                                                            />
                                                          </a>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="min-max-info collapse"
                                                            id="min-max-info6252"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Min:
                                                              </b>
                                                              100
                                                            </span>
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Max:
                                                              </b>
                                                              50000
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="custom-odds-new"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="con-boxes"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="box-1 float-left lay text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                519
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                100
                                                              </span>
                                                            </button>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="back box-1 float-left text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                524
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                100
                                                              </span>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div _ngcontent-bym-c102>
                                                <div _ngcontent-bym-c102>
                                                  <div
                                                    _ngcontent-bym-c102
                                                    className="fancy-tripple"
                                                  >
                                                    <div
                                                      _ngcontent-bym-c102
                                                      className="table-row suspended"
                                                      data-title="ball running"
                                                    >
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="float-left country-name box-4"
                                                      >
                                                        <span
                                                          _ngcontent-bym-c102
                                                        >
                                                          <b
                                                            _ngcontent-bym-c102
                                                          >
                                                            39 Over Runs ENG
                                                          </b>
                                                          <em
                                                            _ngcontent-bym-c102
                                                          />
                                                        </span>
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="info-block"
                                                        >
                                                          <a
                                                            _ngcontent-bym-c102
                                                            data-bs-toggle="collapse"
                                                            data-bs-target
                                                            aria-expanded="false"
                                                            className="info-icon collapsed"
                                                            href="#min-max-info6253"
                                                          >
                                                            <i
                                                              _ngcontent-bym-c102
                                                              className="fas fa-info-circle m-l-10"
                                                            />
                                                          </a>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="min-max-info collapse"
                                                            id="min-max-info6253"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Min:
                                                              </b>
                                                              100
                                                            </span>
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Max:
                                                              </b>
                                                              100000
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="custom-odds-new"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="con-boxes"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="box-1 float-left lay text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                199
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                100
                                                              </span>
                                                            </button>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="back box-1 float-left text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                200
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                100
                                                              </span>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div _ngcontent-bym-c102>
                                                <div _ngcontent-bym-c102>
                                                  <div
                                                    _ngcontent-bym-c102
                                                    className="fancy-tripple"
                                                  >
                                                    <div
                                                      _ngcontent-bym-c102
                                                      className="table-row suspended"
                                                      data-title="ball running"
                                                    >
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="float-left country-name box-4"
                                                      >
                                                        <span
                                                          _ngcontent-bym-c102
                                                        >
                                                          <b
                                                            _ngcontent-bym-c102
                                                          >
                                                            39.3 Over Runs ENG
                                                          </b>
                                                          <em
                                                            _ngcontent-bym-c102
                                                          />
                                                        </span>
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="info-block"
                                                        >
                                                          <a
                                                            _ngcontent-bym-c102
                                                            data-bs-toggle="collapse"
                                                            data-bs-target
                                                            aria-expanded="false"
                                                            className="info-icon collapsed"
                                                            href="#min-max-info6254"
                                                          >
                                                            <i
                                                              _ngcontent-bym-c102
                                                              className="fas fa-info-circle m-l-10"
                                                            />
                                                          </a>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="min-max-info collapse"
                                                            id="min-max-info6254"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Min:
                                                              </b>
                                                              100
                                                            </span>
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Max:
                                                              </b>
                                                              100000
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="custom-odds-new"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="con-boxes"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="box-1 float-left lay text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                202
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                100
                                                              </span>
                                                            </button>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="back box-1 float-left text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                203
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                100
                                                              </span>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div _ngcontent-bym-c102>
                                                <div _ngcontent-bym-c102>
                                                  <div
                                                    _ngcontent-bym-c102
                                                    className="fancy-tripple"
                                                  >
                                                    <div
                                                      _ngcontent-bym-c102
                                                      className="table-row suspended"
                                                      data-title="ball running"
                                                    >
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="float-left country-name box-4"
                                                      >
                                                        <span
                                                          _ngcontent-bym-c102
                                                        >
                                                          <b
                                                            _ngcontent-bym-c102
                                                          >
                                                            Only 40th Over Runs
                                                            ENG
                                                          </b>
                                                          <em
                                                            _ngcontent-bym-c102
                                                          />
                                                        </span>
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="info-block"
                                                        >
                                                          <a
                                                            _ngcontent-bym-c102
                                                            data-bs-toggle="collapse"
                                                            data-bs-target
                                                            aria-expanded="false"
                                                            className="info-icon collapsed"
                                                            href="#min-max-info6255"
                                                          >
                                                            <i
                                                              _ngcontent-bym-c102
                                                              className="fas fa-info-circle m-l-10"
                                                            />
                                                          </a>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="min-max-info collapse"
                                                            id="min-max-info6255"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Min:
                                                              </b>
                                                              100
                                                            </span>
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Max:
                                                              </b>
                                                              25000
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="custom-odds-new"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="con-boxes"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="box-1 float-left lay text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                5
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                110
                                                              </span>
                                                            </button>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="back box-1 float-left text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                5
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                90
                                                              </span>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                            </div>
                                          </div>
                                        </app-fancy-detail>
                                      </div>
                                    </div>
                                  </tab>
                                  <tab
                                    _ngcontent-bym-c104
                                    role="tabpanel"
                                    aria-labelledby
                                    className="tab-pane"
                                  >
                                    <div _ngcontent-bym-c104 />
                                    <div
                                      _ngcontent-bym-c104
                                      className="fancy-market"
                                    >
                                      <div _ngcontent-bym-c104>
                                        <div
                                          _ngcontent-bym-c104
                                          className="table-header"
                                        >
                                          <div
                                            _ngcontent-bym-c104
                                            className="market-title float-left country-name box-4"
                                          >
                                            <span
                                              _ngcontent-bym-c104
                                              className="text-uppercase mr-1"
                                            >
                                              w/p market
                                            </span>
                                            <p
                                              _ngcontent-bym-c104
                                              className="float-right mb-0"
                                            >
                                              <i
                                                _ngcontent-bym-c104
                                                data-toggle="modal"
                                                data-target="#Fancy_Rules"
                                                className="fas fa-info-circle"
                                              />
                                            </p>
                                          </div>
                                          <div
                                            _ngcontent-bym-c104
                                            className="box-1 float-left lay text-center"
                                          >
                                            <b _ngcontent-bym-c104>No</b>
                                          </div>
                                          <div
                                            _ngcontent-bym-c104
                                            className="back box-1 float-left back text-center"
                                          >
                                            <b _ngcontent-bym-c104>Yes</b>
                                          </div>
                                        </div>
                                        <app-fancy-detail
                                          _ngcontent-bym-c104
                                          _nghost-bym-c102
                                        >
                                          <div _ngcontent-bym-c102>
                                            <div
                                              _ngcontent-bym-c102
                                              className="table-body"
                                            >
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102>
                                                <div _ngcontent-bym-c102>
                                                  <div
                                                    _ngcontent-bym-c102
                                                    className="fancy-tripple"
                                                  >
                                                    <div
                                                      _ngcontent-bym-c102
                                                      className="table-row suspended"
                                                      data-title="ball running"
                                                    >
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="float-left country-name box-4"
                                                      >
                                                        <span
                                                          _ngcontent-bym-c102
                                                        >
                                                          <b
                                                            _ngcontent-bym-c102
                                                          >
                                                            Fall of 7th wkt Runs
                                                            ENG
                                                          </b>
                                                          <em
                                                            _ngcontent-bym-c102
                                                          />
                                                        </span>
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="info-block"
                                                        >
                                                          <a
                                                            _ngcontent-bym-c102
                                                            data-bs-toggle="collapse"
                                                            data-bs-target
                                                            aria-expanded="false"
                                                            className="info-icon collapsed"
                                                            href="#min-max-info6256"
                                                          >
                                                            <i
                                                              _ngcontent-bym-c102
                                                              className="fas fa-info-circle m-l-10"
                                                            />
                                                          </a>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="min-max-info collapse"
                                                            id="min-max-info6256"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Min:
                                                              </b>
                                                              100
                                                            </span>
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Max:
                                                              </b>
                                                              100000
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="custom-odds-new"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="con-boxes"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="box-1 float-left lay text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                215
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                110
                                                              </span>
                                                            </button>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="back box-1 float-left text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                215
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                90
                                                              </span>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div _ngcontent-bym-c102>
                                                <div _ngcontent-bym-c102>
                                                  <div
                                                    _ngcontent-bym-c102
                                                    className="fancy-tripple"
                                                  >
                                                    <div
                                                      _ngcontent-bym-c102
                                                      className="table-row suspended"
                                                      data-title="ball running"
                                                    >
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="float-left country-name box-4"
                                                      >
                                                        <span
                                                          _ngcontent-bym-c102
                                                        >
                                                          <b
                                                            _ngcontent-bym-c102
                                                          >
                                                            Fall of 7th wkt Run
                                                            Bhav ENG
                                                          </b>
                                                          <em
                                                            _ngcontent-bym-c102
                                                          />
                                                        </span>
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="info-block"
                                                        >
                                                          <a
                                                            _ngcontent-bym-c102
                                                            data-bs-toggle="collapse"
                                                            data-bs-target
                                                            aria-expanded="false"
                                                            className="info-icon collapsed"
                                                            href="#min-max-info6257"
                                                          >
                                                            <i
                                                              _ngcontent-bym-c102
                                                              className="fas fa-info-circle m-l-10"
                                                            />
                                                          </a>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="min-max-info collapse"
                                                            id="min-max-info6257"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Min:
                                                              </b>
                                                              100
                                                            </span>
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Max:
                                                              </b>
                                                              100000
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="custom-odds-new"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="con-boxes"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="box-1 float-left lay text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                198
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                8
                                                              </span>
                                                            </button>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="back box-1 float-left text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                198
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                5
                                                              </span>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div _ngcontent-bym-c102>
                                                <div _ngcontent-bym-c102>
                                                  <div
                                                    _ngcontent-bym-c102
                                                    className="fancy-tripple"
                                                  >
                                                    <div
                                                      _ngcontent-bym-c102
                                                      className="table-row suspended"
                                                      data-title="ball running"
                                                    >
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="float-left country-name box-4"
                                                      >
                                                        <span
                                                          _ngcontent-bym-c102
                                                        >
                                                          <b
                                                            _ngcontent-bym-c102
                                                          >
                                                            J Bethell Runs
                                                          </b>
                                                          <em
                                                            _ngcontent-bym-c102
                                                          />
                                                        </span>
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="info-block"
                                                        >
                                                          <a
                                                            _ngcontent-bym-c102
                                                            data-bs-toggle="collapse"
                                                            data-bs-target
                                                            aria-expanded="false"
                                                            className="info-icon collapsed"
                                                            href="#min-max-info6258"
                                                          >
                                                            <i
                                                              _ngcontent-bym-c102
                                                              className="fas fa-info-circle m-l-10"
                                                            />
                                                          </a>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="min-max-info collapse"
                                                            id="min-max-info6258"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Min:
                                                              </b>
                                                              100
                                                            </span>
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Max:
                                                              </b>
                                                              100000
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="custom-odds-new"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="con-boxes"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="box-1 float-left lay text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                58
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                100
                                                              </span>
                                                            </button>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="back box-1 float-left text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                58
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                80
                                                              </span>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div _ngcontent-bym-c102>
                                                <div _ngcontent-bym-c102>
                                                  <div
                                                    _ngcontent-bym-c102
                                                    className="fancy-tripple"
                                                  >
                                                    <div
                                                      _ngcontent-bym-c102
                                                      className="table-row suspended"
                                                      data-title="ball running"
                                                    >
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="float-left country-name box-4"
                                                      >
                                                        <span
                                                          _ngcontent-bym-c102
                                                        >
                                                          <b
                                                            _ngcontent-bym-c102
                                                          >
                                                            B Carse Runs
                                                          </b>
                                                          <em
                                                            _ngcontent-bym-c102
                                                          />
                                                        </span>
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="info-block"
                                                        >
                                                          <a
                                                            _ngcontent-bym-c102
                                                            data-bs-toggle="collapse"
                                                            data-bs-target
                                                            aria-expanded="false"
                                                            className="info-icon collapsed"
                                                            href="#min-max-info6259"
                                                          >
                                                            <i
                                                              _ngcontent-bym-c102
                                                              className="fas fa-info-circle m-l-10"
                                                            />
                                                          </a>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="min-max-info collapse"
                                                            id="min-max-info6259"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Min:
                                                              </b>
                                                              100
                                                            </span>
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Max:
                                                              </b>
                                                              100000
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="custom-odds-new"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="con-boxes"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="box-1 float-left lay text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                19
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                110
                                                              </span>
                                                            </button>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="back box-1 float-left text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                19
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                90
                                                              </span>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div _ngcontent-bym-c102>
                                                <div _ngcontent-bym-c102>
                                                  <div
                                                    _ngcontent-bym-c102
                                                    className="fancy-tripple"
                                                  >
                                                    <div
                                                      _ngcontent-bym-c102
                                                      className="table-row suspended"
                                                      data-title="ball running"
                                                    >
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="float-left country-name box-4"
                                                      >
                                                        <span
                                                          _ngcontent-bym-c102
                                                        >
                                                          <b
                                                            _ngcontent-bym-c102
                                                          >
                                                            J Bethell Run Bhav
                                                          </b>
                                                          <em
                                                            _ngcontent-bym-c102
                                                          />
                                                        </span>
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="info-block"
                                                        >
                                                          <a
                                                            _ngcontent-bym-c102
                                                            data-bs-toggle="collapse"
                                                            data-bs-target
                                                            aria-expanded="false"
                                                            className="info-icon collapsed"
                                                            href="#min-max-info62510"
                                                          >
                                                            <i
                                                              _ngcontent-bym-c102
                                                              className="fas fa-info-circle m-l-10"
                                                            />
                                                          </a>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="min-max-info collapse"
                                                            id="min-max-info62510"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Min:
                                                              </b>
                                                              100
                                                            </span>
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Max:
                                                              </b>
                                                              100000
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="custom-odds-new"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="con-boxes"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="box-1 float-left lay text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                38
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                7
                                                              </span>
                                                            </button>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="back box-1 float-left text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                38
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                4
                                                              </span>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div _ngcontent-bym-c102>
                                                <div _ngcontent-bym-c102>
                                                  <div
                                                    _ngcontent-bym-c102
                                                    className="fancy-tripple"
                                                  >
                                                    <div
                                                      _ngcontent-bym-c102
                                                      className="table-row suspended"
                                                      data-title="ball running"
                                                    >
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="float-left country-name box-4"
                                                      >
                                                        <span
                                                          _ngcontent-bym-c102
                                                        >
                                                          <b
                                                            _ngcontent-bym-c102
                                                          >
                                                            B Carse Run Bhav
                                                          </b>
                                                          <em
                                                            _ngcontent-bym-c102
                                                          />
                                                        </span>
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="info-block"
                                                        >
                                                          <a
                                                            _ngcontent-bym-c102
                                                            data-bs-toggle="collapse"
                                                            data-bs-target
                                                            aria-expanded="false"
                                                            className="info-icon collapsed"
                                                            href="#min-max-info62511"
                                                          >
                                                            <i
                                                              _ngcontent-bym-c102
                                                              className="fas fa-info-circle m-l-10"
                                                            />
                                                          </a>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="min-max-info collapse"
                                                            id="min-max-info62511"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Min:
                                                              </b>
                                                              100
                                                            </span>
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Max:
                                                              </b>
                                                              100000
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="custom-odds-new"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="con-boxes"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="box-1 float-left lay text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                5
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                8
                                                              </span>
                                                            </button>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="back box-1 float-left text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                5
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                5
                                                              </span>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div _ngcontent-bym-c102>
                                                <div _ngcontent-bym-c102>
                                                  <div
                                                    _ngcontent-bym-c102
                                                    className="fancy-tripple"
                                                  >
                                                    <div
                                                      _ngcontent-bym-c102
                                                      className="table-row suspended"
                                                      data-title="ball running"
                                                    >
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="float-left country-name box-4"
                                                      >
                                                        <span
                                                          _ngcontent-bym-c102
                                                        >
                                                          <b
                                                            _ngcontent-bym-c102
                                                          >
                                                            J Bethell Boundaries
                                                          </b>
                                                          <em
                                                            _ngcontent-bym-c102
                                                          />
                                                        </span>
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="info-block"
                                                        >
                                                          <a
                                                            _ngcontent-bym-c102
                                                            data-bs-toggle="collapse"
                                                            data-bs-target
                                                            aria-expanded="false"
                                                            className="info-icon collapsed"
                                                            href="#min-max-info62512"
                                                          >
                                                            <i
                                                              _ngcontent-bym-c102
                                                              className="fas fa-info-circle m-l-10"
                                                            />
                                                          </a>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="min-max-info collapse"
                                                            id="min-max-info62512"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Min:
                                                              </b>
                                                              100
                                                            </span>
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Max:
                                                              </b>
                                                              25000
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="custom-odds-new"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="con-boxes"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="box-1 float-left lay text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                5
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                100
                                                              </span>
                                                            </button>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="back box-1 float-left text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                6
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                100
                                                              </span>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div _ngcontent-bym-c102>
                                                <div _ngcontent-bym-c102>
                                                  <div
                                                    _ngcontent-bym-c102
                                                    className="fancy-tripple"
                                                  >
                                                    <div
                                                      _ngcontent-bym-c102
                                                      className="table-row suspended"
                                                      data-title="ball running"
                                                    >
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="float-left country-name box-4"
                                                      >
                                                        <span
                                                          _ngcontent-bym-c102
                                                        >
                                                          <b
                                                            _ngcontent-bym-c102
                                                          >
                                                            B Carse Boundaries
                                                          </b>
                                                          <em
                                                            _ngcontent-bym-c102
                                                          />
                                                        </span>
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="info-block"
                                                        >
                                                          <a
                                                            _ngcontent-bym-c102
                                                            data-bs-toggle="collapse"
                                                            data-bs-target
                                                            aria-expanded="false"
                                                            className="info-icon collapsed"
                                                            href="#min-max-info62513"
                                                          >
                                                            <i
                                                              _ngcontent-bym-c102
                                                              className="fas fa-info-circle m-l-10"
                                                            />
                                                          </a>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="min-max-info collapse"
                                                            id="min-max-info62513"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Min:
                                                              </b>
                                                              100
                                                            </span>
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Max:
                                                              </b>
                                                              25000
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="custom-odds-new"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="con-boxes"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="box-1 float-left lay text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                2
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                110
                                                              </span>
                                                            </button>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="back box-1 float-left text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                2
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                90
                                                              </span>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div _ngcontent-bym-c102>
                                                <div _ngcontent-bym-c102>
                                                  <div
                                                    _ngcontent-bym-c102
                                                    className="fancy-tripple"
                                                  >
                                                    <div
                                                      _ngcontent-bym-c102
                                                      className="table-row suspended"
                                                      data-title="ball running"
                                                    >
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="float-left country-name box-4"
                                                      >
                                                        <span
                                                          _ngcontent-bym-c102
                                                        >
                                                          <b
                                                            _ngcontent-bym-c102
                                                          >
                                                            7th wkt pship
                                                            Boundaries ENG
                                                          </b>
                                                          <em
                                                            _ngcontent-bym-c102
                                                          />
                                                        </span>
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="info-block"
                                                        >
                                                          <a
                                                            _ngcontent-bym-c102
                                                            data-bs-toggle="collapse"
                                                            data-bs-target
                                                            aria-expanded="false"
                                                            className="info-icon collapsed"
                                                            href="#min-max-info62514"
                                                          >
                                                            <i
                                                              _ngcontent-bym-c102
                                                              className="fas fa-info-circle m-l-10"
                                                            />
                                                          </a>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="min-max-info collapse"
                                                            id="min-max-info62514"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Min:
                                                              </b>
                                                              100
                                                            </span>
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Max:
                                                              </b>
                                                              25000
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="custom-odds-new"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="con-boxes"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="box-1 float-left lay text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                3
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                100
                                                              </span>
                                                            </button>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="back box-1 float-left text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                4
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                100
                                                              </span>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div _ngcontent-bym-c102>
                                                <div _ngcontent-bym-c102 />
                                              </div>
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                            </div>
                                          </div>
                                        </app-fancy-detail>
                                      </div>
                                    </div>
                                  </tab>
                                  <tab
                                    _ngcontent-bym-c104
                                    role="tabpanel"
                                    aria-labelledby
                                    className="tab-pane"
                                  >
                                    <div _ngcontent-bym-c104 />
                                    <div
                                      _ngcontent-bym-c104
                                      className="fancy-market"
                                    >
                                      <div _ngcontent-bym-c104>
                                        <div
                                          _ngcontent-bym-c104
                                          className="table-header"
                                        >
                                          <div
                                            _ngcontent-bym-c104
                                            className="market-title float-left country-name box-4"
                                          >
                                            <span
                                              _ngcontent-bym-c104
                                              className="text-uppercase mr-1"
                                            >
                                              odd/even
                                            </span>
                                            <p
                                              _ngcontent-bym-c104
                                              className="float-right mb-0"
                                            >
                                              <i
                                                _ngcontent-bym-c104
                                                data-toggle="modal"
                                                data-target="#Fancy_Rules"
                                                className="fas fa-info-circle"
                                              />
                                            </p>
                                          </div>
                                          <div
                                            _ngcontent-bym-c104
                                            className="box-1 float-left lay text-center"
                                          >
                                            <b _ngcontent-bym-c104>No</b>
                                          </div>
                                          <div
                                            _ngcontent-bym-c104
                                            className="back box-1 float-left back text-center"
                                          >
                                            <b _ngcontent-bym-c104>Yes</b>
                                          </div>
                                        </div>
                                        <app-fancy-detail
                                          _ngcontent-bym-c104
                                          _nghost-bym-c102
                                        >
                                          <div _ngcontent-bym-c102>
                                            <div
                                              _ngcontent-bym-c102
                                              className="table-body"
                                            >
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102>
                                                <div _ngcontent-bym-c102>
                                                  <div
                                                    _ngcontent-bym-c102
                                                    className="fancy-tripple"
                                                  >
                                                    <div
                                                      _ngcontent-bym-c102
                                                      className="table-row"
                                                      data-title
                                                    >
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="float-left country-name box-4"
                                                      >
                                                        <span
                                                          _ngcontent-bym-c102
                                                        >
                                                          <b
                                                            _ngcontent-bym-c102
                                                          >
                                                            50 Over Odd Run Bhav
                                                            ENG Adv
                                                          </b>
                                                          <em
                                                            _ngcontent-bym-c102
                                                          />
                                                        </span>
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="info-block"
                                                        >
                                                          <a
                                                            _ngcontent-bym-c102
                                                            data-bs-toggle="collapse"
                                                            data-bs-target
                                                            aria-expanded="false"
                                                            className="info-icon collapsed"
                                                            href="#min-max-info62518"
                                                          >
                                                            <i
                                                              _ngcontent-bym-c102
                                                              className="fas fa-info-circle m-l-10"
                                                            />
                                                          </a>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="min-max-info collapse"
                                                            id="min-max-info62518"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Min:
                                                              </b>
                                                              100
                                                            </span>
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Max:
                                                              </b>
                                                              25000
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="custom-odds-new"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="con-boxes"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="box-1 float-left lay text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                0
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                0
                                                              </span>
                                                            </button>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="back box-1 float-left text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                1
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                98
                                                              </span>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div _ngcontent-bym-c102>
                                                <div _ngcontent-bym-c102>
                                                  <div
                                                    _ngcontent-bym-c102
                                                    className="fancy-tripple"
                                                  >
                                                    <div
                                                      _ngcontent-bym-c102
                                                      className="table-row"
                                                      data-title
                                                    >
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="float-left country-name box-4"
                                                      >
                                                        <span
                                                          _ngcontent-bym-c102
                                                        >
                                                          <b
                                                            _ngcontent-bym-c102
                                                          >
                                                            50 Over Even Run
                                                            Bhav ENG Adv
                                                          </b>
                                                          <em
                                                            _ngcontent-bym-c102
                                                          />
                                                        </span>
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="info-block"
                                                        >
                                                          <a
                                                            _ngcontent-bym-c102
                                                            data-bs-toggle="collapse"
                                                            data-bs-target
                                                            aria-expanded="false"
                                                            className="info-icon collapsed"
                                                            href="#min-max-info62519"
                                                          >
                                                            <i
                                                              _ngcontent-bym-c102
                                                              className="fas fa-info-circle m-l-10"
                                                            />
                                                          </a>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="min-max-info collapse"
                                                            id="min-max-info62519"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Min:
                                                              </b>
                                                              100
                                                            </span>
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Max:
                                                              </b>
                                                              25000
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="custom-odds-new"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="con-boxes"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="box-1 float-left lay text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                0
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                0
                                                              </span>
                                                            </button>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="back box-1 float-left text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                1
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                98
                                                              </span>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </app-fancy-detail>
                                      </div>
                                    </div>
                                  </tab>
                                  <tab
                                    _ngcontent-bym-c104
                                    role="tabpanel"
                                    aria-labelledby
                                    className="tab-pane"
                                  >
                                    <div _ngcontent-bym-c104 />
                                    <div
                                      _ngcontent-bym-c104
                                      className="fancy-market"
                                    >
                                      <div _ngcontent-bym-c104>
                                        <div
                                          _ngcontent-bym-c104
                                          className="table-header"
                                        >
                                          <div
                                            _ngcontent-bym-c104
                                            className="market-title float-left country-name box-4"
                                          >
                                            <span
                                              _ngcontent-bym-c104
                                              className="text-uppercase mr-1"
                                            >
                                              xtra market
                                            </span>
                                            <p
                                              _ngcontent-bym-c104
                                              className="float-right mb-0"
                                            >
                                              <i
                                                _ngcontent-bym-c104
                                                data-toggle="modal"
                                                data-target="#Fancy_Rules"
                                                className="fas fa-info-circle"
                                              />
                                            </p>
                                          </div>
                                          <div
                                            _ngcontent-bym-c104
                                            className="box-1 float-left lay text-center"
                                          >
                                            <b _ngcontent-bym-c104>No</b>
                                          </div>
                                          <div
                                            _ngcontent-bym-c104
                                            className="back box-1 float-left back text-center"
                                          >
                                            <b _ngcontent-bym-c104>Yes</b>
                                          </div>
                                        </div>
                                        <app-fancy-detail
                                          _ngcontent-bym-c104
                                          _nghost-bym-c102
                                        >
                                          <div _ngcontent-bym-c102>
                                            <div
                                              _ngcontent-bym-c102
                                              className="table-body"
                                            >
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102>
                                                <div _ngcontent-bym-c102 />
                                              </div>
                                              <div _ngcontent-bym-c102>
                                                <div _ngcontent-bym-c102>
                                                  <div
                                                    _ngcontent-bym-c102
                                                    className="fancy-tripple"
                                                  >
                                                    <div
                                                      _ngcontent-bym-c102
                                                      className="table-row suspended"
                                                      data-title="ball running"
                                                    >
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="float-left country-name box-4"
                                                      >
                                                        <span
                                                          _ngcontent-bym-c102
                                                        >
                                                          <b
                                                            _ngcontent-bym-c102
                                                          >
                                                            7th wkt Caught Out
                                                            ENG
                                                          </b>
                                                          <em
                                                            _ngcontent-bym-c102
                                                          />
                                                        </span>
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="info-block"
                                                        >
                                                          <a
                                                            _ngcontent-bym-c102
                                                            data-bs-toggle="collapse"
                                                            data-bs-target
                                                            aria-expanded="false"
                                                            className="info-icon collapsed"
                                                            href="#min-max-info62517"
                                                          >
                                                            <i
                                                              _ngcontent-bym-c102
                                                              className="fas fa-info-circle m-l-10"
                                                            />
                                                          </a>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="min-max-info collapse"
                                                            id="min-max-info62517"
                                                          >
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Min:
                                                              </b>
                                                              100
                                                            </span>
                                                            <span
                                                              _ngcontent-bym-c102
                                                            >
                                                              <b
                                                                _ngcontent-bym-c102
                                                              >
                                                                Max:
                                                              </b>
                                                              25000
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        _ngcontent-bym-c102
                                                        className="custom-odds-new"
                                                      >
                                                        <div
                                                          _ngcontent-bym-c102
                                                          className="con-boxes"
                                                        >
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="box-1 float-left lay text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                1
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                60
                                                              </span>
                                                            </button>
                                                          </div>
                                                          <div
                                                            _ngcontent-bym-c102
                                                            className="back box-1 float-left text-center"
                                                          >
                                                            <button
                                                              _ngcontent-bym-c102
                                                            >
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="odd d-block"
                                                              >
                                                                1
                                                              </span>
                                                              <span
                                                                _ngcontent-bym-c102
                                                                className="d-block"
                                                              >
                                                                40
                                                              </span>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div _ngcontent-bym-c102 />
                                              <div _ngcontent-bym-c102 />
                                            </div>
                                          </div>
                                        </app-fancy-detail>
                                      </div>
                                    </div>
                                  </tab>
                                </div>
                              </tabset>
                            </div>
                          </tab>
                          <tab
                            _ngcontent-bym-c104
                            role="tabpanel"
                            aria-labelledby
                            className="tab-pane"
                          >
                            <iframe
                              _ngcontent-bym-c104
                              className="premium-iframe"
                            />
                          </tab>
                        </div>
                      </tabset>
                      <div _ngcontent-bym-c104>
                        <div _ngcontent-bym-c104>
                          <div _ngcontent-bym-c104 />
                        </div>
                        <div _ngcontent-bym-c104>
                          <div _ngcontent-bym-c104>
                            <app-market-detail
                              _ngcontent-bym-c104
                              _nghost-bym-c100
                            >
                              <div _ngcontent-bym-c100>
                                <div
                                  _ngcontent-bym-c100
                                  className="market-title mt-1"
                                >
                                  Tied Match
                                  <button
                                    _ngcontent-bym-c100
                                    className="btn-cashout"
                                  >
                                    cashout
                                  </button>
                                  <p
                                    _ngcontent-bym-c100
                                    className="float-right mb-0"
                                  >
                                    <i
                                      _ngcontent-bym-c100
                                      className="fas fa-info-circle"
                                    />
                                  </p>
                                </div>
                                <div
                                  _ngcontent-bym-c100
                                  className="main-market"
                                >
                                  <div
                                    _ngcontent-bym-c100
                                    className="table-header"
                                  >
                                    <div
                                      _ngcontent-bym-c100
                                      className="float-left country-name box-6 min-max"
                                    >
                                      <b _ngcontent-bym-c100>
                                        Min:100 Max:50000
                                      </b>
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
                                  <div
                                    _ngcontent-bym-c100
                                    className="table-body"
                                  >
                                    <div
                                      _ngcontent-bym-c100
                                      className="table-row"
                                      data-title
                                    >
                                      <div
                                        _ngcontent-bym-c100
                                        className="float-left country-name box-4"
                                      >
                                        <span
                                          _ngcontent-bym-c100
                                          className="team-name"
                                        >
                                          <b _ngcontent-bym-c100>Yes</b>
                                        </span>
                                        <p
                                          _ngcontent-bym-c100
                                          className="mob-expo-cs"
                                        >
                                          <span
                                            _ngcontent-bym-c100
                                            className="float-left"
                                          />
                                        </p>
                                      </div>
                                      <div
                                        _ngcontent-bym-c100
                                        className="back-1 back1 blink box-1 float-left hidden-portrait text-center"
                                      >
                                        <button _ngcontent-bym-c100>
                                          <span
                                            _ngcontent-bym-c100
                                            className="odd d-block"
                                          >
                                            75
                                          </span>
                                          <span
                                            _ngcontent-bym-c100
                                            className="d-block"
                                          >
                                            55
                                          </span>
                                        </button>
                                      </div>
                                      <div
                                        _ngcontent-bym-c100
                                        className="back-2 back2 blink box-1 float-left hidden-portrait text-center"
                                      >
                                        <button _ngcontent-bym-c100>
                                          <span
                                            _ngcontent-bym-c100
                                            className="odd d-block"
                                          >
                                            100
                                          </span>
                                          <span
                                            _ngcontent-bym-c100
                                            className="d-block"
                                          >
                                            352.57
                                          </span>
                                        </button>
                                      </div>
                                      <div
                                        _ngcontent-bym-c100
                                        className="back blink box-1 float-left lock text-center"
                                      >
                                        <button
                                          _ngcontent-bym-c100
                                          data-toggle="modal"
                                          data-target="#Placebet"
                                        >
                                          <span
                                            _ngcontent-bym-c100
                                            className="odd d-block"
                                          >
                                            110
                                          </span>
                                          <span
                                            _ngcontent-bym-c100
                                            className="d-block"
                                          >
                                            20.9
                                          </span>
                                        </button>
                                      </div>
                                      <div
                                        _ngcontent-bym-c100
                                        className="blink box-1 float-left lay text-center"
                                      >
                                        <button _ngcontent-bym-c100>
                                          <span
                                            _ngcontent-bym-c100
                                            className="odd d-block"
                                          >
                                            150
                                          </span>
                                          <span
                                            _ngcontent-bym-c100
                                            className="d-block"
                                          >
                                            66.38
                                          </span>
                                        </button>
                                      </div>
                                      <div
                                        _ngcontent-bym-c100
                                        className="blink box-1 float-left hidden-portrait lay-2 text-center"
                                      >
                                        <button _ngcontent-bym-c100>
                                          <span
                                            _ngcontent-bym-c100
                                            className="odd d-block"
                                          >
                                            950
                                          </span>
                                          <span
                                            _ngcontent-bym-c100
                                            className="d-block"
                                          >
                                            1.61
                                          </span>
                                        </button>
                                      </div>
                                      <div
                                        _ngcontent-bym-c100
                                        className="blink box-1 float-left hidden-portrait lay-1 text-center"
                                      >
                                        <button _ngcontent-bym-c100>
                                          <span
                                            _ngcontent-bym-c100
                                            className="odd d-block"
                                          >
                                            0
                                          </span>
                                          <span
                                            _ngcontent-bym-c100
                                            className="d-block"
                                          >
                                            0
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                    <div
                                      _ngcontent-bym-c100
                                      className="table-row"
                                      data-title
                                    >
                                      <div
                                        _ngcontent-bym-c100
                                        className="float-left country-name box-4"
                                      >
                                        <span
                                          _ngcontent-bym-c100
                                          className="team-name"
                                        >
                                          <b _ngcontent-bym-c100>No</b>
                                        </span>
                                        <p
                                          _ngcontent-bym-c100
                                          className="mob-expo-cs"
                                        >
                                          <span
                                            _ngcontent-bym-c100
                                            className="float-left"
                                          />
                                        </p>
                                      </div>
                                      <div
                                        _ngcontent-bym-c100
                                        className="back-1 back1 blink box-1 float-left hidden-portrait text-center"
                                      >
                                        <button _ngcontent-bym-c100>
                                          <span
                                            _ngcontent-bym-c100
                                            className="odd d-block"
                                          >
                                            0
                                          </span>
                                          <span
                                            _ngcontent-bym-c100
                                            className="d-block"
                                          >
                                            0
                                          </span>
                                        </button>
                                      </div>
                                      <div
                                        _ngcontent-bym-c100
                                        className="back-2 back2 blink box-1 float-left hidden-portrait text-center"
                                      >
                                        <button _ngcontent-bym-c100>
                                          <span
                                            _ngcontent-bym-c100
                                            className="odd d-block"
                                          >
                                            0
                                          </span>
                                          <span
                                            _ngcontent-bym-c100
                                            className="d-block"
                                          >
                                            0
                                          </span>
                                        </button>
                                      </div>
                                      <div
                                        _ngcontent-bym-c100
                                        className="back blink box-1 float-left lock text-center"
                                      >
                                        <button
                                          _ngcontent-bym-c100
                                          data-toggle="modal"
                                          data-target="#Placebet"
                                        >
                                          <span
                                            _ngcontent-bym-c100
                                            className="odd d-block"
                                          >
                                            0
                                          </span>
                                          <span
                                            _ngcontent-bym-c100
                                            className="d-block"
                                          >
                                            0
                                          </span>
                                        </button>
                                      </div>
                                      <div
                                        _ngcontent-bym-c100
                                        className="blink box-1 float-left lay text-center"
                                      >
                                        <button _ngcontent-bym-c100>
                                          <span
                                            _ngcontent-bym-c100
                                            className="odd d-block"
                                          >
                                            1.01
                                          </span>
                                          <span
                                            _ngcontent-bym-c100
                                            className="d-block"
                                          >
                                            34908.25
                                          </span>
                                        </button>
                                      </div>
                                      <div
                                        _ngcontent-bym-c100
                                        className="blink box-1 float-left hidden-portrait lay-2 text-center"
                                      >
                                        <button _ngcontent-bym-c100>
                                          <span
                                            _ngcontent-bym-c100
                                            className="odd d-block"
                                          >
                                            1.02
                                          </span>
                                          <span
                                            _ngcontent-bym-c100
                                            className="d-block"
                                          >
                                            40353.9
                                          </span>
                                        </button>
                                      </div>
                                      <div
                                        _ngcontent-bym-c100
                                        className="blink box-1 float-left hidden-portrait lay-1 text-center"
                                      >
                                        <button _ngcontent-bym-c100>
                                          <span
                                            _ngcontent-bym-c100
                                            className="odd d-block"
                                          >
                                            1.03
                                          </span>
                                          <span
                                            _ngcontent-bym-c100
                                            className="d-block"
                                          >
                                            1968
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </app-market-detail>
                          </div>
                          <div _ngcontent-bym-c104 />
                        </div>
                      </div>
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
        </tabset>
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

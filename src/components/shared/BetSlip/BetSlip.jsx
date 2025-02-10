/* eslint-disable react/no-unknown-property */

const BetSlip = ({ setRunnerId }) => {
  return (
    <div _ngcontent-ukj-c100="">
      <div _ngcontent-ukj-c100="" _nghost-ukj-c63="">
        <div _ngcontent-ukj-c63="" class="new-betslip back">
          <div _ngcontent-ukj-c63="" id="goto-1.238886397-1006"></div>
          <div _ngcontent-ukj-c63="" class="row mx-0">
            <div _ngcontent-ukj-c63="" class="col-6">
              <div _ngcontent-ukj-c63="" class="input-group">
                <div _ngcontent-ukj-c63="" class="input-group-prepend">
                  <span _ngcontent-ukj-c63="" class="input-group-text">
                    -
                  </span>
                </div>
                <input
                  _ngcontent-ukj-c63=""
                  type="number"
                  placeholder="15"
                  readonly="readonly"
                  min="1.01"
                  max="999.99"
                  class="form-control ng-untouched ng-pristine ng-valid"
                />
                <div _ngcontent-ukj-c63="" class="input-group-append">
                  <span _ngcontent-ukj-c63="" class="input-group-text">
                    +
                  </span>
                </div>
              </div>
            </div>
            <div _ngcontent-ukj-c63="" class="col-6">
              <input
                _ngcontent-ukj-c63=""
                type="number"
                placeholder="00"
                class="form-control ng-untouched ng-pristine ng-valid"
              />
            </div>
          </div>
          <div _ngcontent-ukj-c63="" class="row mx-0">
            <div _ngcontent-ukj-c63="" class="new-stakes mb-0 col-12 px-0">
              <button _ngcontent-ukj-c63="" class="ot-stake">
                <i _ngcontent-ukj-c63="" class="fa fa-plus"></i> 100
              </button>
              <button _ngcontent-ukj-c63="" class="ot-stake">
                <i _ngcontent-ukj-c63="" class="fa fa-plus"></i> 200
              </button>
              <button _ngcontent-ukj-c63="" class="ot-stake">
                <i _ngcontent-ukj-c63="" class="fa fa-plus"></i> 500
              </button>
              <button _ngcontent-ukj-c63="" class="ot-stake">
                <i _ngcontent-ukj-c63="" class="fa fa-plus"></i> 1000
              </button>
              <button _ngcontent-ukj-c63="" class="ot-stake">
                <i _ngcontent-ukj-c63="" class="fa fa-plus"></i> 2000
              </button>
              <button _ngcontent-ukj-c63="" class="ot-stake">
                <i _ngcontent-ukj-c63="" class="fa fa-plus"></i> 5000
              </button>
              <button _ngcontent-ukj-c63="" class="ot-stake">
                <i _ngcontent-ukj-c63="" class="fa fa-plus"></i> 10000
              </button>
              <button _ngcontent-ukj-c63="" class="ot-stake">
                <i _ngcontent-ukj-c63="" class="fa fa-plus"></i> 25000
              </button>
              <button _ngcontent-ukj-c63="" class="min-stake">
                min stake
              </button>
              <button _ngcontent-ukj-c63="" class="max-stake">
                max stake
              </button>
              <button _ngcontent-ukj-c63="" class="all-in-stake">
                Edit Stake
              </button>
              <button _ngcontent-ukj-c63="" class="clear-stake">
                clear
              </button>
            </div>
          </div>
          <div _ngcontent-ukj-c63="" class="row mx-0">
            <div _ngcontent-ukj-c63="" class="col-6 px-0">
              <button
                onClick={() => setRunnerId(null)}
                _ngcontent-ukj-c63=""
                class="new-cancel-button"
              >
                cancel
              </button>
            </div>
            <div _ngcontent-ukj-c63="" class="col-6 px-0">
              <button
                _ngcontent-ukj-c63=""
                class="new-placebet-button"
                disabled=""
              >
                place bet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;

import { useState } from "react";
import AmountBox from "../../components/modules/Deposit/AmountBox";
import BankAccountUploadTransaction from "../../components/modules/Deposit/BankAccountUploadTransaction";
import DepositTransaction from "../../components/modules/Deposit/DepositTransaction";

const Deposit = () => {
  const [tab, setTab] = useState("amountBox");
  const [amount, setAmount] = useState(null);

  return (
    <div className="col-md-10 featured-box">
      <div className="bankingUi">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-12 text-center pt-3 logo-section"
              style={{ display: "none" }}
            >
              <img
                className="img-fluid main-logo"
                src="https://speedcdn.io/assets/logos/gold365.com.png"
                style={{ width: "150px" }}
              />
              <h2>G51India53(387.2)</h2>
            </div>
            {tab === "amountBox" ? (
              <AmountBox
                amount={amount}
                setAmount={setAmount}
                setTab={setTab}
              />
            ) : (
              <BankAccountUploadTransaction amount={amount} setTab={setTab} />
            )}

            <DepositTransaction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;

/* eslint-disable react/no-unknown-property */

import { useContext } from "react";
import { ApiContext } from "../../context/ApiProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Settings } from "../../api";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { setUser } from "../../redux/features/auth/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const navigate = useNavigate();
  const { logo } = useContext(ApiContext);
  const dispatch = useDispatch();
  const [handleLogin] = useLoginMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ username, password }) => {
    const loginData = {
      username: username,
      password: password,
      b2c: Settings.b2c,
    };
    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      const memberId = result?.result?.memberId;
      dispatch(setUser({ user, token }));
      localStorage.setItem("memberId", memberId);
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);
      localStorage.setItem("bonusToken", bonusToken);
      if (token && user) {
        navigate("/");
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  /* handle login demo user */
  const loginWithDemo = async () => {
    /* Random token generator */
    /* Encrypted the post data */
    const loginData = {
      username: "demo",
      password: "",
      b2c: Settings.b2c,
    };
    const result = await handleLogin(loginData).unwrap();
    // console.log(result);
    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;

      dispatch(setUser({ user, token }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);

      localStorage.setItem("bonusToken", bonusToken);
      if (token && user) {
        navigate("/");
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };
  return (
    <div _nghost-wjb-c42>
      <div _ngcontent-wjb-c42 className="login-wrapper">
        <div _ngcontent-wjb-c42 className="text-center logo-login mb-3">
          <img
            onClick={() => navigate("/")}
            _ngcontent-wjb-c42
            alt="logo"
            src={logo}
          />
        </div>
        <div _ngcontent-wjb-c42 className="login-form">
          <form
            onSubmit={handleSubmit(onSubmit)}
            _ngcontent-wjb-c42
            noValidate
            autoComplete="off"
            className="ng-untouched ng-pristine ng-invalid"
          >
            <div _ngcontent-wjb-c42 className="form-group mb-4">
              <input
                {...register("username", { required: true })}
                _ngcontent-wjb-c42
                formcontrolname="username"
                type="text"
                aria-required="true"
                aria-invalid="false"
                className="form-control ng-untouched ng-pristine ng-invalid"
                placeholder="Username"
              />
            </div>
            <div _ngcontent-wjb-c42 className="form-group mb-4">
              <input
                {...register("password", { required: true })}
                _ngcontent-wjb-c42
                formcontrolname="password"
                type="password"
                placeholder="Password"
                aria-required="true"
                aria-invalid="false"
                className="form-control ng-untouched ng-pristine ng-invalid"
              />
            </div>
            <div _ngcontent-wjb-c42 className="form-group mb-1">
              <button
                _ngcontent-wjb-c42
                type="submit"
                className="btn btn-primary btn-block"
              >
                Login
                <FontAwesomeIcon icon={faSignInAlt} className="ml-2" />
              </button>
            </div>
            <div _ngcontent-wjb-c42 className="form-group mb-0">
              <button
                onClick={loginWithDemo}
                _ngcontent-wjb-c42
                type="button"
                className="btn btn-primary btn-block"
              >
                Login with Demo ID
                <FontAwesomeIcon icon={faSignInAlt} className="ml-2" />
              </button>
            </div>
            {Settings.registration && (
              <div _ngcontent-wjb-c42 className="form-group mt-1">
                <button
                  onClick={() => navigate("/register")}
                  _ngcontent-wjb-c42
                  type="button"
                  className="btn btn-primary btn-block"
                >
                  Registration
                  <FontAwesomeIcon icon={faSignInAlt} className="ml-2" />
                </button>
              </div>
            )}

            <small _ngcontent-wjb-c42 className="recaptchaTerms">
              This site is protected by reCAPTCHA and the Google{" "}
              <a _ngcontent-wjb-c42>Privacy Policy </a>
              and <a _ngcontent-wjb-c42>Terms of Service </a>
              apply.
            </small>
            <div _ngcontent-wjb-c42 className="form-group mt-1" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

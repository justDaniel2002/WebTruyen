import PropTypes from "prop-types";
import { LoginContainer } from "../components/loginContainer";
import logo from "../assets/novelcomlogo.png";
import { SignUpContainer } from "../components/signUpContainer";

export const Auth = ({ type = "login" }) => {
  return (
    <>
      <div className="overflow-hidden md:h-[calc(100vh-96px)] h-[calc(100vh-64px)] max-w-screen-xl m-auto bg-white text-black">
        <div className="h-full flex items-center justify-between md:justify-between overflow-hidden">
          <img
            alt="blb"
            className="md:block hidden w-2/6 overflow-hidden border-gray-300 border-2 rounded-md"
            src={logo}
          />
          <div className="md:w-3/6  overflow-hidden">
            {type == "login" ? (
              <LoginContainer />
            ) : type == "signUp" ? (
              <SignUpContainer />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

//Prop type valiation
Auth.propTypes = {
  type: PropTypes.oneOf(["login", "signUp"]), // Prop validation for 'type' prop
};

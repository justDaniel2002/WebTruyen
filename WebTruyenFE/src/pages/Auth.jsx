import { LoginContainer } from "../components/loginContainer";
import logo from "../assets/novelcomlogo.png"
import { SignUpContainer } from "../components/signUpContainer";

export const Auth = ({type = "login"}) => {
  return (
    <>
      <div class="overflow-hidden md:h-[calc(100vh-96px)] h-[calc(100vh-64px)] bg-white text-black">
        <div class="h-full flex items-center justify-center md:justify-between overflow-hidden">
          <img
            alt="blb"
            class="md:block hidden w-3/6 overflow-hidden"
            src={logo}
          />
          <div class="md:w-2/6 md:mr-24 overflow-hidden">
            {type == "login"?<LoginContainer />:type == "signUp"?<SignUpContainer />:""}
          </div>
        </div>
      </div>
    </>
  );
};

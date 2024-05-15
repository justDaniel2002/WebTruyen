import { signal, useSignal } from "@preact/signals-react";
import { getUserInfo, login } from "../apis/service";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { checkPasswordLength, getEmailPrefix, validateEmail } from "../helpers/helper";
import { useRecoilState } from "recoil";
import { jwtATom, userInfoAtom } from "../states/atom";
import { toast } from "react-toastify";

export const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [cookies, setCookie] = useCookies(["JWT"]);
  const [JWT, setJWT] = useRecoilState(jwtATom);
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const navigate = useNavigate();

  const Login = async () => {
    if (!validateEmail(email)) {
      toast.warning("Email sai cú pháp");
      return;
    }

    if (!checkPasswordLength(password)) {
      toast.warning("Mật khẩu phải lớn hơn hoặc bằng 6 kí tự");
      return;
    }
    const result = await login({
      email: email,
      password: password,
    });
    if (result?.type != "error") {
      getUserInfo(result).then((res) => {
        if (res?.type == "error") {
          setCookie('JWT', undefined);
          setJWT(undefined);
          setUserInfo(undefined);
        } else {
          setCookie('JWT', result);
          setJWT(result);
          setUserInfo({ ...res, username: getEmailPrefix(res.email) });
          toast.info(`Xin chào ${getEmailPrefix(res.email)}`);
          if(res?.role.id==2){
            navigate("/admin");
          }else{
            navigate("/");
          }
        }
      });
      
    }
  };

  return (
    <>
      <div className="rounded-xl px-7 py-10 bg-white border-black border text-black">
        <h3 className="font-bold text-5xl mb-8 text-center">NOVELCOM</h3>

        <div className="mb-3">
          <div className="mb-3 text-xl font-semibold">Email</div>
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            className="w-full rounded-xl px-5 py-2 border border-black"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <div className="mb-3 text-xl font-semibold">Password</div>
          <input
            onChange={(event) => {
              setPass(event.target.value);
            }}
            className="w-full rounded-xl px-5 py-2 border border-black"
            placeholder="Password"
            type="password"
          />
        </div>
        <div className="text-right">
          <button>Quên mật khẩu ?</button>
        </div>
        <div className="my-10"></div>
        <button
          onClick={Login}
          className="bg-blue-500 rounded-md justify-center p-3 font-medium text-white items-center inline-flex border-2 hover:-translate-x-2 hover:text-black hover:bg-white transition ease-in-out w-full mb-2"
        >
          Đăng Nhập
        </button>
      </div>
    </>
  );
};

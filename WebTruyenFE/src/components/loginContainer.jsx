import { signal, useSignal } from "@preact/signals-react";
import { login } from "../apis/service";
import { useCookies } from 'react-cookie';

export const LoginContainer = () => {
  useSignal;
  const email = signal("");
  const password = signal("");
  const [, setCookie] = useCookies(['JWT']);

  const Login = async () => {
    const result = await login({ email: email.value, password: password.value });
    setCookie(result)
  };

  return (
    <>
      <div className="rounded-xl px-7 py-10 bg-white border-black border text-black">
        <h3 className="font-bold text-5xl mb-8 text-center">NOVELCOM</h3>

        <div className="mb-3">
          <div className="mb-3 text-xl font-semibold">Email</div>
          <input
            onChange={(event) => {
              email.value = event.target.value;
            }}
            className="w-full rounded-xl px-5 py-2 border border-black"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <div className="mb-3 text-xl font-semibold">Password</div>
          <input
            onChange={(event) => {
              password.value = event.target.value;
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

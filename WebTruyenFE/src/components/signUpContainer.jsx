import { signal, useSignal } from "@preact/signals-react";
import { register } from "../apis/service";

export const SignUpContainer = () => {
  useSignal;
  const email = signal("email");
  const password = signal("password");

  const Register = async () => {
    await register({ email: email.value, password: password.value });
  };
  return (
    <>
      <div className="rounded-xl px-7 py-10 bg-white border-black border text-black">
        <h3 class="font-bold text-5xl mb-8 text-center">NOVELCOM</h3>

        <div class="mb-3">
          <div className="mb-3 text-xl font-semibold">Email</div>
          <input
            value={email.value}
            onChange={(event) => {
              email.value = event.target.value;
            }}
            className="w-full rounded-xl px-5 py-2 border border-black"
            placehoder="Email"
          />
        </div>
        <div class="mb-3">
          <div className="mb-3 text-xl font-semibold">Password</div>
          <input
            value={password.value}
            onChange={(event) => {
              password.value = event.target.value;
            }}
            className="w-full rounded-xl px-5 py-2 border border-black"
            placehoder="Password"
            type="password"
          />
        </div>
        <div class="mb-3">
          <div className="mb-3 text-xl font-semibold">Re-Password</div>
          <input
            className="w-full rounded-xl px-5 py-2 border border-black"
            placehoder="Password"
            type="Re enter password"
          />
        </div>
        <div class="my-10"></div>
        <button
          onClick={Register}
          class="bg-blue-500 rounded-md justify-center p-3 font-medium text-white items-center inline-flex border-2 hover:-translate-x-2 hover:text-black hover:bg-white transition ease-in-out w-full mb-2"
        >
          Đăng Kí
        </button>
      </div>
    </>
  );
};

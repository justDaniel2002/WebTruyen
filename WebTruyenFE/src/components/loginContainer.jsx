export const LoginContainer = () => {
  return (
    <>
      <div className="rounded-xl px-7 py-10 bg-white border-black border text-black">
        <h3 className="font-bold text-5xl mb-8 text-center">NOVELCOM</h3>

        <div className="mb-3">
            <div className="mb-3 text-xl font-semibold">Email</div>
          <input
            className="w-full rounded-xl px-5 py-2 border border-black"
            placehoder="Email"
          />
        </div>
        <div className="mb-3">
        <div className="mb-3 text-xl font-semibold">Password</div>
          <input
            className="w-full rounded-xl px-5 py-2 border border-black"
            placehoder="Password"
            type="password"
          />
        </div>
        <div className="text-right">
          <button>Quên mật khẩu ?</button>
        </div>
        <div className="my-10"></div>
        <button
         
          className="bg-blue-500 rounded-md justify-center p-3 font-medium text-white items-center inline-flex border-2 hover:-translate-x-2 hover:text-black hover:bg-white transition ease-in-out w-full mb-2"
        >
          Đăng Nhập
        </button>

        {/* <div className="text-center mb-4">{$t("or use another account")}</div>
        <div className="flex justify-center text-5xl">
          <div role="button" on:click={LWF} on:keydown={LWF} tabindex="0">
            <Icon icon="logos:facebook" className="mr-3" />
          </div>
          <div role="button" on:click={LWG} on:keydown={LWG} tabindex="0">
            <Icon icon="akar-icons:google-contained-fill" />
          </div>
        </div> */}

       
      </div>
    </>
  );
};

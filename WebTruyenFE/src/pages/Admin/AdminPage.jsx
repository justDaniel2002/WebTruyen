import logo from "../../assets/novelcomlogo.png";
export const AdminPage = () => {
  return (
    <>
      <div>
        <img src={logo} className="h-screen absolute -z-10" />
        <div className="opacity-50 bg-slate-100 h-screen flex flex-wrap rounded-2xl px-10 py-20 mx-20 my-10 text-white">
          <div className="opacity-100 w-1/4 px-10 pr-20 py-5 mx-10 text-xl font-semibold rounded-xl bg-slate-800 h-fit">
            <div className="">Novel</div>
            <hr className="my-3 border-white"/>
            <div className="font-normal">0</div>
          </div>
          <div className="opacity-100 w-1/4 px-10 pr-20 py-5 mx-10 text-xl font-semibold rounded-xl bg-slate-800 h-fit">
            <div className="">Account</div>
            <hr className="my-3 border-white"/>
            <div className="font-normal">0</div>
          </div>
          
        </div>
      </div>
    </>
  );
};

import { Link, useNavigate } from "react-router-dom";
import minilogo from "../assets/minilogowhite.png";
import { DropdownNav } from "./dropdownNav";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-blue-950 text-white">
      <div className="flex justify-between py-2 items-center lg:max-w-screen-xl m-auto">
        <Link to={"/"}>
          <img src={minilogo} className="w-12" />
        </Link>
        <div>
          <DropdownNav
            content={"Danh sách"}
            list={[{content:"Truyện mới cập nhập",link:""}, {content:"Truyện Hot",link:""}]}
          />
          <DropdownNav content={"Thể loại"} list={[{content:"Tiên Hiệp",link:""}, {content:"Kiếm Hiệp",link:""}]} />
          <DropdownNav
            content={"Tủ sách"}
            list={[{content:"Truyện đã đọc",link:""}, {content:"Truyện đã thích",link:""}]}
          />
        </div>

        <div className="flex">
          <div className="flex bg-white text-black mr-10">
            <input className="px-3 py-1" placeholder="Search" />
          </div>
          <div className="flex">
            <button
              onClick={() => navigate("/signUp")}
              className="mr-3 rounded-xl py-2 px-5 bg-blue-800 hover:bg-blue-500"
            >
              Đăng kí
            </button>
            <button
              onClick={() => navigate("/login")}
              className="rounded-xl py-2 px-5 bg-blue-800 hover:bg-blue-500"
            >
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

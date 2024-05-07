import { useNavigate } from "react-router-dom";
import minilogo from "../assets/minilogowhite.png";
import { DropdownNav } from "./dropdownNav";

export const Navbar = () => {

  const navigate = useNavigate()
  return (
    <div className="flex justify-around px-20 py-10 items-center bg-blue-950 text-white">
      <img src={minilogo} className="w-20"/>
      <DropdownNav
        content={"Danh sách"}
        list={["Truyện mới cập nhập", "Truyện Hot"]}
      />
      <DropdownNav content={"Thể loại"} list={["Tiên hiệp", "Kiếm hiệp"]} />
      <DropdownNav content={"Tủ sách"} list={["Truyện đã đọc", "Truyện đã thích"]} />
      <div className="flex bg-white text-black">
        <input className="px-3 py-1" placeholder="Search"/> 
      </div>

      

      <div className="flex">
        <button onClick={() => navigate("/signUp")} className="mr-3 rounded-xl py-2 px-5 bg-blue-800 hover:bg-blue-500">Đăng kí</button>
        <button onClick={() => navigate("/login")} className="rounded-xl py-2 px-5 bg-blue-800 hover:bg-blue-500">Đăng nhập</button>
      </div>
    </div>
  );
};

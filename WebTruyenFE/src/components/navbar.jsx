//import minilogo from "../assets/mininovelcomlogowhite.png";
import { DropdownNav } from "./dropdownNav";

export const Navbar = () => {
  return (
    <div className="flex justify-around px-20 py-10 items-center bg-blue-950 text-white">
      <img src="../assets/mininovelcomlogowhite.png" />
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
        <button className="mr-3">Đăng kí</button>
        <button>Đăng nhập</button>
      </div>
    </div>
  );
};

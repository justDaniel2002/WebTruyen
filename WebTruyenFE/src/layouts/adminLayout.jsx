import { Outlet } from "react-router-dom";
import { NovelManager } from "../data/data";
import { Dropdown } from "../components/drowdown";
import { useRecoilState } from "recoil";
import { categoriesAtom, storiesAtom } from "../states/atom";
import { getCategory, getStories } from "../apis/service";
import { useEffect } from "react";

export const AdminLayout = () => {
  
  return (
    <>
      <div className="flex">
        <div className="w-1/5 flex-col flex text-white bg-blue-950 pl-10 py-10 min-h-screen text-2xl font-medium">
          <div>
            <Dropdown content={"Quản lý truyện tranh"} list={NovelManager} />
          </div>
          <div>
            <Dropdown content={"Quản lý tài khoản"} list={[]} />
          </div>
        </div>
        <div className="w-4/5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

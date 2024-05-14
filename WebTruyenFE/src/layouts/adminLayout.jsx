import { Outlet, useNavigate } from "react-router-dom";
import { NovelManager } from "../data/data";
import { Dropdown } from "../components/drowdown";
import { useRecoilState } from "recoil";
import { categoriesAtom, storiesAtom, userInfoAtom } from "../states/atom";
import { getCategory, getStories } from "../apis/service";
import { useEffect } from "react";

export const AdminLayout = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
    const navigate = useNavigate();
    useEffect(() => {
        if (userInfo?.role?.id != 2) {
            navigate("/");
          }
    }, [])
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

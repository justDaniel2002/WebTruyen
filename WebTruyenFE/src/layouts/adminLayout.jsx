import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar"
import { DropdownNav } from "../components/dropdownNav"
import { NovelManager } from "../data/data"
import { Dropdown } from "../components/drowdown"

export const AdminLayout = () => {
    return <>
    <div className="flex">
        <div className="w-1/5 flex-col flex text-white bg-blue-950 pl-10 py-10 min-h-screen text-2xl font-medium">
            <div><Dropdown content={"Quản lý truyện tranh"} list={NovelManager}/></div>
            <div><Dropdown content={"Quản lý tài khoản"} list={[]}/></div>
            
        </div>
        <div className="w-4/5">
            <Outlet />
        </div>
    </div>
    </>
}
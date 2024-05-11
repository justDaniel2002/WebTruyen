import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { useRecoilState } from "recoil";
import { useEffect, useReducer } from "react";
import { categoriesAtom, storiesAtom } from "../states/atom";
import { getCategory, getStories } from "../apis/service";

export const MainLayout = () => {
  const [categories, setCate] = useRecoilState(categoriesAtom);
  const [stories, setStories] = useRecoilState(storiesAtom);
  useEffect( () => {
    getCategory().then((res) => setCate(res));
    getStories({}).then((res) => setStories(res));
  }, []);
  return (
    <div className="bg-neutral-200 min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

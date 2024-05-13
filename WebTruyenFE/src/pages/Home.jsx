import { CardContain } from "../components/cardContain";
import { listCard } from "../mock/data";
import { useRecoilState } from "recoil";
import { categoriesAtom, storiesAtom } from "../states/atom";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "../components/drowdown";
import { signal, useSignal } from "@preact/signals-react";

export const Home = () => {
  const [stories, setStories] = useRecoilState(storiesAtom);
  const [categories, setCate] = useRecoilState(categoriesAtom);

  const storyCategory = signal("");

  const navigate = useNavigate();
  return (
    <main>
      {/*Home code*/}
      <div className="max-w-screen-xl m-auto  mt-6">
        <div className="flex justify-between w-full border-2 border-b-gray-400">
          <h2 className="text-xl font-medium">Truyện hot</h2>
          <div>
            <select
              onChange={(e) => (storyCategory.value = e.target.value)}
              id="countries"
              className=" border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-2 "
            >
              <option defaultValue={"all"}>Thể loại</option>
              {categories.map((element, index) => {
                return (
                  <option key={index} value={element.name}>
                    {element.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="px-4 w-full mt-4 flex  flex-wrap gap-y-3">
          {stories.map((element) => {
            return (
              <div
                key={element.id}
                className="w-[14.28%] h-[200px] transition ease-in-out hover:scale-110"
              >
                <div
                  onClick={() => navigate(`/noveldetail/${element.id}`)}
                  className="w-[90%] h-full"
                >
                  <CardContain
                    image={element.image}
                    name={element.title}
                    id={element.id}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between w-full mt-8 border-2 border-b-gray-400">
          <h2 className="text-xl font-medium">Truyện moi cay nhat</h2>
          <div>
            <select
              id="countries"
              className=" border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-2 "
            >
              <option defaultValue={"all"}>Thể loại</option>
              {categories.map((element, index) => {
                return (
                  <option key={index} value={element.name}>
                    {element.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="w-full">
          <div className="w-[70%]"></div>
          <div className="w-[30%]"></div>
        </div>
      </div>
    </main>
  );
};

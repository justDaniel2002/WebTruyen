import ReactModal from "react-modal";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { RTEditor } from "./richTextEditor";
import { useRecoilState } from "recoil";
import { categoriesAtom } from "../states/atom";

export const CreateEditNovel = (novel = undefined) => {
  const [editNovel, setNovel] = useState(novel);
  const [chapterModal, setChapterModal] = useState(false);
  const [categories, setCate] = useRecoilState(categoriesAtom);
  const [editChapter, setEditChapter] = useState();

  const UploadTruyen = () => {
    const image = document.getElementById("image").value;
    console.log(image);
  };
  return (
    <>
      <div className="py-20 px-20 text-xl">
        <div className="my-5">
          <div className="mb-5">Tên Truyện</div>
          <input
            className="rounded-lg p-3 border-2 w-1/3"
            value={editNovel?.title}
            onChange={(event) =>
              setNovel({ ...editNovel, title: event.target.value })
            }
          />
        </div>
        <div className="my-5">
          <div className="mb-5">Ảnh Truyện</div>
          <input
            type="file"
            className="rounded-lg p-3 border-2 w-1/3"
            id="image"
          />
        </div>
        <div className="my-5">
          <div className="mb-5">Thể Loại</div>
          <select
            value={editNovel?.categoryId}
            onChange={(event) =>
              setNovel({ ...editNovel, categoryId: event.target.value })
            }
            className="rounded-lg p-3 border-2 w-1/4"
          >
            {categories.map((c) => (
              <option value={c.id}>{c?.name}</option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <div className="mb-5">Tác Giả</div>
          <input
            value={editNovel?.author}
            onChange={(event) =>
              setNovel({ ...editNovel, author: event.target.value })
            }
            className="rounded-lg p-3 border-2 w-1/3"
          />
        </div>
        <div>
          <div>Mô tả</div>
          <textarea
            className="rounded-lg p-3 border-2 w-full"
            value={editNovel?.description}
            onChange={(event) =>
              setNovel({ ...editNovel, description: event.target.value })
            }
          ></textarea>
        </div>
        <hr className="my-5" />
        <div className="underline underline-offset-8 flex items-center">
          CHƯƠNG <span>{chapterModal.v}</span>{" "}
          <span
            onClick={() => {
              setChapterModal(true);
            }}
          >
            <Icon icon="icons8:plus" className="ml-1 text-2xl" />
          </span>
        </div>

        <div className="flex mb-5">
          <div className="w-1/2 cursor-pointer pr-5">
            {editNovel?.chapers?.slice(0, 50)?.map((c) => {
              if (c.status) {
                return (
                  <div
                    key={c.id}
                    onClick={() => navigate(`/chapter/${novel.id}/${c.id}`)}
                    className="text-medium hover:underline"
                  >
                    * Chương {c.order}: {c.name}
                  </div>
                );
              } else {
                return (
                  <div
                    key={c.id}
                    className="flex items-center justify-between text-medium hover:underline"
                  >
                    <span>
                      * Chương {c.order}: {c.name}
                    </span>{" "}
                    <span className="flex items-center">
                      <Icon icon="material-symbols:lock" className="mr-2" />{" "}
                      Khóa
                    </span>
                  </div>
                );
              }
            })}
          </div>
          <div className="w-1/2"></div>
        </div>

        <div onClick={UploadTruyen} className="flex justify-end">
          <button className="py-2 px-5 bg-blue-900 text-white hover:bg-blue-700 text-base">
            {novel ? "Cập Nhập" : "Đăng"}
          </button>
        </div>
      </div>

      <ReactModal
        isOpen={chapterModal}
        className="w-1/2 m-auto px-10 py-5 bg-neutral-800 text-white text-xl overflow-y-scroll max-h-screen"
        contentLabel="Nội dung chương"
      >
        <div>
          <div
            className="flex justify-end"
            onClick={() => setChapterModal(false)}
          >
            <Icon icon="ion:log-out" className="text-3xl" />
          </div>
          <div className="my-5">
            <div className="mb-5">Tên Chương</div>
            <input className="rounded-lg p-3 border-2 w-1/3 text-black" />
          </div>
          <div className="my-5">
            <div className="mb-5">Nội Dung</div>
            <RTEditor />
          </div>
          <div className="flex justify-end">
            <button className="py-2 px-5 bg-blue-800 mt-3 text-white">
              Đăng
            </button>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

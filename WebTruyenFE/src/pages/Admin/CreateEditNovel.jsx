import { signal, useSignal } from "@preact/signals-react";
import ReactModal from "react-modal";
import { RTEditor } from "../../components/richTextEditor";
 "react"

export const CreateEditNovel = (novel = {}) => {
  useSignal;
  const editnovel = signal(novel);
  return (
    <>
      <div className="py-20 px-20 text-xl">
        <div className="my-5">
          <div className="mb-5">Tên Truyện</div>
          <input className="rounded-lg p-3 border-2 w-1/3" />
        </div>
        <div className="my-5">
          <div className="mb-5">Thể Loại</div>
          <select multiple className="rounded-lg p-3 border-2 w-1/4">
            <option>Hành Động</option>
            <option>Lãng Mạn</option>
          </select>
        </div>
        <div className="my-5">
          <div className="mb-5">Tác Giả</div>
          <input className="rounded-lg p-3 border-2 w-1/3" />
        </div>
        <div>
          <div>Mô tả</div>
          <textarea className="rounded-lg p-3 border-2 w-full"></textarea>
        </div>
        <hr className="my-5" />
        <div className="underline underline-offset-8">CHƯƠNG</div>
      </div>

      <ReactModal
        isOpen={false}
        className="w-1/2 m-auto"
        contentLabel="Nội dung chương"
      >
        <RTEditor />
      </ReactModal>
    </>
  );
};

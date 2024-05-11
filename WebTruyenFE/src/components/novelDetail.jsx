import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

export const NovelDetail = ({ novel }) => {
  const navigate = useNavigate()
  return (
    <>
      <div className="px-20 py-5 flex">
        <div className="w-3/4">
          <div className="underline text-2xl font-serif underline-offset-8 mb-10">
            THÔNG TIN TRUYỆN
          </div>
          <div className="mt-5 flex mb-5">
            <div className="w-1/4">
              <img src={novel?.image} alt="novelimg"  />
              <div className="mt-10">
                <div className="mb-3"><span className="font-bold text-neutral-700">Tác giả: </span> {novel?.author} </div>
                <div className="mb-3"><span className="font-bold text-neutral-700">Thể loại: </span> {novel?.category?.name} </div>
                <div className="mb-3"><span className="font-bold text-neutral-700">Số chương: </span> {novel?.chapers?.length??0} </div>
              </div>
            </div>
            <div className="w-3/4 px-10">
              <div className="text-center">{novel?.title??""}</div>
              <hr className="my-5 w-full" />
              <div className="flex text-lg justify-center mb-5">
                <Icon icon="emojione:star" />
                <Icon icon="emojione:star" />
                <Icon icon="emojione:star" />
                <Icon icon="emojione:star" />
                <Icon icon="emojione:star" />
                <Icon icon="emojione:star" />
                <Icon icon="emojione:star" />
                <Icon icon="emojione:star" />
                <Icon icon="emojione:star" />
                <Icon icon="emojione:star" />
              </div>
              <div className="text-lg font-thin">
                <p>{novel?.description} </p>
              </div>
            </div>
          </div>

          <div className="underline text-2xl font-serif underline-offset-8 mb-10">DANH SÁCH CHƯƠNG</div>
          <div className="flex mb-5">
            <div className="w-1/2">
              {novel?.chapers?.slice(0,50)?.map(c => {
                return (
                <div key={c.id} onClick={() => navigate(`/chapter/${novel.id}/${c.id}`)} className="text-medium">* Chương {c.order}: {c.name}</div>
              )
              })}
            </div>
            <div className="w-1/2"></div>
          </div>
          <div className="underline text-2xl font-serif underline-offset-8 mb-10">BÌNH LUẬN TRUYỆN</div>
        </div>

        <div className="w-1/4 bg-neutral-200 p-5">
          <div className="underline text-lg font-serif underline-offset-8 mb-5">TRUYỆN CÙNG TÁC GIẢ</div>
          <hr className="my-5 w-full" />
        </div>
      </div>
    </>
  );
};

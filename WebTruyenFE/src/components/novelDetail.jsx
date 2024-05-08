import { Icon } from "@iconify/react/dist/iconify.js";

export const Detail = () => {
  return (
    <>
      <div className="px-20 py-5 flex">
        <div className="w-3/4">
          <div className="underline underline-offset-0">Thông tin truyện</div>
          <div className="mt-5 flex mb-5">
            <img alt="novelimg" className="w-1/4" />
            <div className="w-3/4">
              <div className="text-center">Tên truyện</div>
              <hr className="my-5 w-full" />
              <div className="flex justify-between mb-5">
                <Icon icon="emojione:star" />
                <Icon icon="emojione:star" />
                <Icon icon="emojione:star" />
                <Icon icon="emojione:star" />
                <Icon icon="emojione:star" />
              </div>
              <div>
                <div>Tác giả: </div>
                <div>Người đăng: </div>
                <div>Thể loại: </div>
                <div>Mô tả: </div>
              </div>
            </div>
          </div>

          <div className="underline underline-offset-0">DANH SÁCH CHƯƠNG</div>
          <div className="flex mb-5">
            <div className="w-1/2"></div>
            <div className="w-1/2"></div>
          </div>
          <div className="underline underline-offset-0">BÌNH LUẬN TRUYỆN</div>
        </div>

        <div className="w-1/4 bg-neutral-200">
          <div>TRUYỆN CÙNG TÁC GIẢ</div>
          <hr className="my-5 w-full" />
        </div>
      </div>
    </>
  );
};

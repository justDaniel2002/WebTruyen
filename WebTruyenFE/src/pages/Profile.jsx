import { useRecoilState } from "recoil";
import { jwtATom, userInfoAtom } from "../states/atom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { callAPIFEPostToken, getUserInfo } from "../apis/service";
import { CreateQR } from "../apis/apis";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [JWT, setJWT] = useRecoilState(jwtATom);
  const [QR, setQR] = useState(undefined);
  const navigate = useNavigate();
  getUserInfo(JWT).then((res) => {
    if (res?.type == "error") {
      setJWT(undefined);
      setUserInfo(undefined);
      navigate("/login");
    } else {
      setUserInfo({ ...res, username: getEmailPrefix(res.email) });
    }
  });

  const createPayment = async (ammount) => {
    callAPIFEPostToken(JWT, CreateQR, ammount).then((res) => {
      setQR(res.fileContents);
    });
  };
  return (
    <>
      <div className="px-40 py-10 text-xl">
        <div className="underline text-2xl font-serif underline-offset-8 mb-10">
          THÔNG TIN CÁ NHÂN
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-left">Email</div>
          <div className="text-left">{userInfo?.email}</div>
          <div></div>
          <div className="text-left">Số điện thoại</div>
          <div className="text-left">{userInfo?.phone}</div>
          <Icon icon="material-symbols:edit" />
          <div className="text-left">Địa chỉ</div>
          <div className="text-left">{userInfo?.address}</div>
          <Icon icon="material-symbols:edit" />
          <div className="text-left">Số dư</div>
          <div className="text-left">{userInfo?.accountBalance ?? 0} xu</div>
          <Icon icon="material-symbols:edit" />
          <div className="text-left">Nạp xu vào tài khoản</div>
          <div className="flex font-medium">
            <button
              onClick={() => createPayment(1000)}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-5 text-white rounded-2xl mr-3"
            >
              100 xu
            </button>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-5 text-white rounded-2xl mr-3">
              1000 xu
            </button>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-5 text-white rounded-2xl mr-3">
              10000 xu
            </button>
          </div>
        </div>
        {QR ? <img src={`data:image/jpeg;base64, ${QR}`} /> : ""}
      </div>
    </>
  );
};

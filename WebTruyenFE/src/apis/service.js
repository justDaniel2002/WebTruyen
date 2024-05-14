import axios from "axios";
import {
  AuthLogin,
  AuthRegister,
  GetCategories,
  GetStories,
  GetUserInfo,
} from "./apis";
import { toast } from "react-toastify";

export const register = async (data) => {
  try {
    const res = await axios.post(AuthRegister, data);
    toast.info("Đăng kí thành công, hãy kiểm tra email của bạn");
    return res.data;
  } catch (error) {
    toast.error("Đăng kí thất bại");
    return {
      error,
      type: "error",
    };
  }
};

export const login = async (data) => {
  try {
    const res = await axios.post(AuthLogin, data);
    return res.data;
  } catch (error) {
    toast.error("Đăng nhập thất bại");
    return {
      error,
      type: "error",
    };
  }
};

export const getCategory = async () => {
  const res = await axios.get(GetCategories);
  return res.data;
};

export const getStories = async (data) => {
  const res = await axios.post(GetStories, data);
  return res.data;
};

export const callApiFEGet = async (URL, params = "") => {
  const res = await axios.get(URL + params);
  return res.data;
};

export const callApiFEPost = async (URL, data = {}) => {
  try {
    const res = await axios.post(URL, data);
    return res.data;
  } catch (error) {
    toast.error(error.message);
    return {
      error,
      type: "error",
    };
  }
};

export const callAPIFEPostToken = async (token, url, data) => {
  try {
    const res = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    toast.error(error.message);
    return {
      error,
      type: "error",
    };
  }
};

export const getUserInfo = async (token) => {
  // try {
  //   const res = await axios.post(GetUserInfo, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${token}`
  //     }
  //   });
  //   return res.data;
  // } catch (error) {
  //   toast.error("Đăng nhập hết thời hạn");
  //   return {
  //     error,
  //     type: "error",
  //   };
  // }

  let res = {};
  const options = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  await fetch(GetUserInfo, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      res = response.json();
    })
    .catch((error) => {
      toast.error("Đăng nhập hết thời hạn");
      res = { ...error, type: "error" };
    });

  return res;
};

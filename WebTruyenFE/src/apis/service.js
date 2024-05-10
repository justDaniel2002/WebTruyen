import axios from "axios";
import { AuthLogin, AuthRegister, GetCategories, GetStories } from "./apis";
import { toast } from "react-toastify";

export const register = async (data) => {
  try {
    const res = await axios.post(AuthRegister, data);
    return res.data;
  } catch (error) {
    toast(error.message, "error");
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
    toast(error.message, "error");
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

export const callApiFEGet = async(URL,params = "") => {
 const res = await axios.get(URL+params);
 return res.data;
}

export const callApiFEPost = async(URL, data = {}) => {
  try {
    const res = await axios.post(URL, data);
    return res.data;
  } catch (error) {
    toast(error.message, "error");
    return {
      error,
      type: "error",
    };
  }
}

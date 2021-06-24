import axios from "axios";
export const API = "http://localhost:5000";
export const Network = () => {
  return {
    post: (url, data, method = "POST", token = null) => {
      return new Promise((resolve, reject) => {
        const baseURL = API + url;
        const contentType = "application/json";
        const options = {
          headers: {
            Accept: "application/json",
            "Content-Type": contentType,
            Authorization: token ? `Bearer ${token}` : null,
          },
        };
        axios
          .post(baseURL, data, options)
          .then((res) => res?.data)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => reject(err));
      });
    },
    upload: (url, data, options = {}, token = null) => {
      return new Promise((resolve, reject) => {
        const baseURL = API + url;
        const FD = new FormData();
        for (const key in data) {
          FD.append(key, data[key]);
        }

        axios
          .post(baseURL, FD, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Access-Control-Allow-Origin": "*",
            },
          })
          .then((httpResponse) => {
            resolve(httpResponse);
          })
          .catch((httpError) => reject(httpError));
      });
    },
    get: (url, options = {}, token = null) => {
      return new Promise((resolve, reject) => {
        const baseURL = API + url;

        const contentType = "application/json";
        const options = {
          headers: {
            Accept: "application/json",
            "Content-Type": contentType,
            Authorization: token ? `Bearer ${token}` : null,
          },
        };
        axios
          .get(baseURL, options)
          .then((res) => {
            return res?.data;
          })
          .then((res) => {
            resolve(res);
          })
          .catch((err) => reject(err));
      });
    },
  };
};

import axios, { type AxiosResponse, AxiosError } from "axios";

export const baseUrl = (path: string | number): string => {
  return `${import.meta.env.VITE_BASE_URL}${path}`;
};

export default class HTTPService {
  static get(path = ""): Promise<any> {
    return axios({
      method: "get",
      url: baseUrl(path),
      withCredentials: true,
    })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((err: AxiosError) => {
        if (axios.isAxiosError(err)) {
          console.error("Axios Error:", err.response?.data || err.message);
        } else {
          console.error("Unexpected Error:", err);
        }
      });
  }

  static post(path = "", data: any): Promise<any> {
    return axios({
      method: "post",
      url: baseUrl(path),
      data,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((err: AxiosError) => {
        if (axios.isAxiosError(err)) {
          console.error("Axios Error:", err.response?.data || err.message);
        } else {
          console.error("Unexpected Error:", err);
        }
      });
  }

  static patch(path = "", data: any): Promise<any> {
    return axios({
      method: "patch",
      url: baseUrl(path),
      data,
      withCredentials: true,
    })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((err: AxiosError) => {
        if (axios.isAxiosError(err)) {
          console.error("Axios Error:", err.response?.data || err.message);
        } else {
          console.error("Unexpected Error:", err);
        }
      });
  }

  static delete(path = ""): Promise<any> {
    return axios({
      method: "delete",
      url: baseUrl(path),
      withCredentials: true,
    })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((err: AxiosError) => {
        if (axios.isAxiosError(err)) {
          console.error("Axios Error:", err.response?.data || err.message);
        } else {
          console.error("Unexpected Error:", err);
        }
      });
  }
}

import axios, { type AxiosResponse, AxiosError } from "axios";

export const baseUrl = (path: string | number): string => {
  return `${import.meta.env.VITE_BASE_URL}${path}`;
};

export default class HTTPService {
  private static getAuthHeader() {
    const token = localStorage.getItem("accessToken");

    return token ? { Authorization: `Bearer ${token}` } : {};
  }

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
        ...this.getAuthHeader(),
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

// import axios, { type AxiosResponse, AxiosError } from "axios";

// export const baseUrl = (path: string | number): string => {
//   return `${import.meta.env.VITE_BASE_URL}${path}`;
// };

// export default class HTTPService {
//   private static getAuthHeader() {
//     const token = localStorage.getItem("accessToken");
//     // console.log(localStorage);
//     return token ? { Authorization: `Bearer ${token}` } : {};
//   }

//   static get(path = ""): Promise<any> {
//     return axios({
//       method: "get",
//       url: baseUrl(path),
//       headers: {
//         ...this.getAuthHeader(),
//       },
//       withCredentials: true,
//     })
//       .then((response: AxiosResponse) => {
//         return response.data;
//       })
//       .catch((err: AxiosError) => {
//         if (axios.isAxiosError(err)) {
//           throw err.response?.data || err.message;
//         } else {
//           throw err;
//         }
//       });
//   }

//   static post(path = "", data: any): Promise<any> {
//     return axios({
//       method: "post",
//       url: baseUrl(path),
//       data,
//       headers: {
//         "Content-Type": "application/json",
//         ...this.getAuthHeader(),
//       },
//       withCredentials: true,
//     })
//       .then((response: AxiosResponse) => {
//         return response.data;
//       })
//       .catch((err: AxiosError) => {
//         if (axios.isAxiosError(err)) {
//           throw err.response?.data || err.message;
//         } else {
//           throw err;
//         }
//       });
//   }

//   static patch(path = "", data: any): Promise<any> {
//     return axios({
//       method: "patch",
//       url: baseUrl(path),
//       data,
//       headers: {
//         "Content-Type": "application/json",
//         ...this.getAuthHeader(),
//       },
//       withCredentials: true,
//     })
//       .then((response: AxiosResponse) => {
//         return response.data;
//       })
//       .catch((err: AxiosError) => {
//         if (axios.isAxiosError(err)) {
//           throw err.response?.data || err.message;
//         } else {
//           throw err;
//         }
//       });
//   }

//   static delete(path = ""): Promise<any> {
//     return axios({
//       method: "delete",
//       url: baseUrl(path),
//       headers: {
//         ...this.getAuthHeader(),
//       },
//       withCredentials: true,
//     })
//       .then((response: AxiosResponse) => {
//         return response.data;
//       })
//       .catch((err: AxiosError) => {
//         if (axios.isAxiosError(err)) {
//           throw err.response?.data || err.message;
//         } else {
//           throw err;
//         }
//       });
//   }
// }

import type { IAuthData, IAuthResponse } from "../types";

import HTTPService from "~/services/HTTPService";
import axios from "axios";

// Safe localStorage access
const setStoredToken = (token: string): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("accessToken", token);
  }
};

export const getRegistrationData = async (
  data: IAuthData
): Promise<IAuthResponse> => {
  try {
    const response = await HTTPService.post("/auth/register", data);

    // Store the token in localStorage for persistence
    if (response.data.token) {
      setStoredToken(response.data.token);
    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        JSON.stringify({
          status: error.response?.status,
          data: error.response?.data,
        })
      );
    }
    throw error;
  }
};

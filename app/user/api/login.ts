import type { AxiosPromise } from "axios";
import HTTPService from "~/services/HTTPService";
import type { ILoginData } from "./types";
import { SERVER_PATHS } from "~/constants";

export const loginAPI = async ({
  password,
  email,
}: ILoginData): Promise<AxiosPromise> => {
  const data = await HTTPService.post(SERVER_PATHS.signin, {
    password,
    email,
  });
  return data;
};

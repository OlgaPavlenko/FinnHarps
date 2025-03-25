import type { AxiosPromise } from "axios";
import HTTPService from "~/services/HTTPService";
import type { IAuthData } from "./types";
import { SERVER_PATHS } from "~/constants";

export const registrationAPI = async ({
  firstName,
  lastName,
  password,
  email,
}: IAuthData): Promise<AxiosPromise> => {
  console.log(SERVER_PATHS.registration);
  const data = await HTTPService.post(SERVER_PATHS.registration, {
    firstName,
    lastName,
    password,
    email,
  });
  return data.data;
};

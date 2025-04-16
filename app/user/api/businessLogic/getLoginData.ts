import type { IAuthResponse, ILoginData } from "../types";

import { loginAPI } from "../login";

export const getLoginData = async ({
  password,
  email,
}: ILoginData): Promise<IAuthResponse> => {
  const { data } = await loginAPI({ password, email });
  return data;
};

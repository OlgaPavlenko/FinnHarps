export interface IAuth {
  userId: string;
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  isAuthenticated?: boolean;
  role: string;
  token: string | null;
}

export interface IAuthData {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export interface ILoginData {
  password: string;
  email: string;
}

export interface IAuthResponse {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
  accessToken: string;
  role: string;
}

export interface IFormData {
  email: string;
  password: string;
}

export interface IErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confPassword?: string;
}

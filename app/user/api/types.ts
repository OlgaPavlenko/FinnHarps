export interface IAuth {
  userId: string;
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  isAuthenticated: boolean;
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
  userId: string;
  token: string;
}

export interface IFormData {
  email: string;
  password: string;
}

export interface IErrors {
  email?: string;
  password?: string;
}

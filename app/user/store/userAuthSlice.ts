import type { IAuth, IAuthData, IAuthResponse, ILoginData } from "../api/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getLoginData } from "../api/businessLogic/getLoginData";
import { getRegistrationData } from "../api/businessLogic/getRegistrationData";

export const registration = createAsyncThunk<IAuthResponse, IAuthData>(
  "auth/registration",
  async (data) => {
    const response = await getRegistrationData(data);
    return response;
  }
);

export const login = createAsyncThunk<IAuthResponse, ILoginData>(
  "auth/login",
  async (data) => {
    const response = await getLoginData(data);
    return response;
  }
);

// Safe localStorage access
const getStoredToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("authToken");
  }
  return null;
};

const initialState: IAuth = {
  userId: "",
  userFirstName: "",
  userLastName: "",
  userEmail: "",
  isAuthenticated: false,
  token: getStoredToken(),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuth(state) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("authToken");
      }
      return initialState;
    },
    setAuthFromToken(state, action) {
      state.token = action.payload;
      state.isAuthenticated = !!action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registration.fulfilled, (state, action) => {
        state.userFirstName = action.payload.firstName;
        state.userLastName = action.payload.lastName;
        state.userEmail = action.payload.email;
        state.userId = action.payload.userId;
        state.isAuthenticated = true;
        state.token = action.payload.token;
      })
      .addCase(registration.rejected, (state, action) => {
        const { message } = action.error;
        if (message) {
          console.log(message);
        }
        return initialState;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.userFirstName = action.payload.firstName;
        state.userLastName = action.payload.lastName;
        state.userEmail = action.payload.email;
        state.userId = action.payload.userId;
        state.isAuthenticated = true;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        const { message } = action.error;
        if (message) {
          console.log(JSON.parse(message).data);
        } else {
          console.log("AuthStatuses:error");
        }
        return initialState;
      });
  },
});

export const { clearAuth, setAuthFromToken } = authSlice.actions;

export const authReducer = authSlice.reducer;

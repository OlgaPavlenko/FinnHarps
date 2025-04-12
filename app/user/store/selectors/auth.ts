import type { RootState } from "~/store";
import { createSelector } from "@reduxjs/toolkit";

const stateSelector = (state: RootState) => state.auth;

export const userRoleSelector = createSelector(
  stateSelector,
  (state) => state.role
);

export const isAuthenticatedSelector = createSelector(
  stateSelector,
  (state) => state.isAuthenticated
);

export const tokenSelector = createSelector(
  stateSelector,
  (state) => state.token
);

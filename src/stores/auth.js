import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthed: localStorage.getItem("user") !== undefined,
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const AuthSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    signup(state, action) {
      state.isAuthed = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
      setTimeout(() => {
        localStorage.removeItem("user");
      }, 5 * 60 * 60 * 1000);
    },
    login(state, action) {
      state.isAuthed = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
      setTimeout(() => {
        localStorage.removeItem("user");
      }, 5 * 60 * 60 * 1000);
    },
    logout(state) {
      state.isAuthed = false;
      localStorage.removeItem("user");
    },
  },
});

export default AuthSlice.reducer;
export const authActions = AuthSlice.actions;

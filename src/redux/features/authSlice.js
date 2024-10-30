
const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, loginStatus: false },
  reducers: {
    logIn: (state, action) => {
      const { email, password } = action.payload;
      if (email == "sanu123@gmail.com" && password === "123") {
        (state.user = { email }), (state.loginStatus = true);
      } else {
        state.loginStatus = false;
      }
    },
    logOut: (state) => {
      (state.user = null), (state.loginStatus = false);
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;

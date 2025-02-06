import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "@/utils/auth";
import Cookies from "js-cookie";

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const credentials = { email, password };
      const response = await login(credentials);
      console.log("Login User",response?.auth_token);
      
      if (response.errors) {
        return rejectWithValue(response.errors); // Return validation errors
      }

      Cookies.set("authToken", response.auth_token, { expires: 1 }); 

      return response; // Return user data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      Cookies.remove("authToken");
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token; 
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logoutUser, setUser } = authSlice.actions;
export const getUser = (state) => state.auth.user;
export default authSlice.reducer;

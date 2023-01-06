import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { push } from 'connected-react-router';

const initialState = {
  allUserData: null,
  userDetail: null,
  navDetail: null,
  isLoading: true,
  isError: false,
};
export const fetchData = createAsyncThunk("fetchData", async () => {
  const response = await fetch("https://panorbit.in/api/users.json");
  const data = await response.json();
  return data;
});
export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allUserData = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
  reducers: {
    fetchSingleUser: (state, action) => {
      const singlData = state.allUserData.users.find(
        (user) => user.id === action.payload
      );
      state.userDetail = singlData;
      // Todo ===============================
      state.navDetail = Object.assign(
        {},
        {
          id: singlData.id,
          name: singlData.name,
          profileImage: singlData.profilepicture,
          email: singlData.email,
        }
      );
      // for (let i = 0; i < 2; i++) {
      //   let id = Math.floor(Math.random() * 10) + 1;
      //   console.log("random id", id);
      //   let randomData = state.allUserData.users.find((user) => user.id === id);
      //   console.log("randomData", randomData);
      //   state.navDetail = Object.assign(state.navDetail, {
      //     id: randomData.id,
      //     name: randomData.name,
      //     profileImage: randomData.profilepicture,
      //   });
      // }
      // console.log("sate.nav", state.navDetail);
    },
  },
});

export const { fetchSingleUser } = userSlice.actions;
export const selectUserDetail = (state) => state.user.userDetail;
export const selectAllDetail = (state) => state.user.allUserData;
export const selectNavDetail = (state) => state.user.navDetail;
export default userSlice.reducer;

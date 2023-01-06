import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
// import { push } from 'connected-react-router';

const initialState = {
  allUserData: null,
  userDetail: null,
  navDetail: null,
  cardData: null,
  cardData_2: null,
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
          id: singlData?.id,
          name: singlData?.name,
          profileImage: singlData?.profilepicture,
          email: singlData?.email,
        }
      );
    },
    fetchCardData: (state, action) => {
      var random = undefined;
      for (let i = 0; i < 1; i++) {
        let randomId = Math.floor(Math.random() * 10) + 1;
        if (randomId !== action.payload) {
          let tempData = state?.allUserData?.users?.find(
            (user) => user.id === randomId
          );
          state.cardData = Object.assign(
            {},
            {
              id: tempData?.id,
              name: tempData?.name,
              profileImage: tempData?.profilepicture,
              email: tempData?.email,
            }
          );
          i++;
        }
      }
      for (let i = 0; i < 1; i++) {
        let randomId_2 = Math.floor(Math.random() * 10) + 1;
        if (randomId_2 !== random && randomId_2 !== action.payload) {
          let tempData = state?.allUserData?.users?.find(
            (user) => user.id === randomId_2
          );
          state.cardData_2 = Object.assign(
            {},
            {
              id: tempData?.id,
              name: tempData?.name,
              profileImage: tempData?.profilepicture,
              email: tempData?.email,
            }
          );
          i++;
        }
      }
      //! ======================================
      // state.cardData = state.navDetail;
      // for (let i = 0; i < 2; i++) {
      //   let randomId = Math.floor(Math.random() * 10) + 1;
      //   const tempData = state?.allUserData?.users?.find(
      //     (user) => user.id === randomId
      //   );
      //   console.log("temp", current(tempData))
      //   state.cardData = state.cardData.map((prevData) => [
      //     ...prevData,
      //     {
      //       id: tempData?.id,
      //       name: tempData?.name,
      //       profileImage: tempData?.profilepicture,
      //       email: tempData?.email,
      //     },
      //   ]);
      // }
    },
  },
});

export const { fetchSingleUser, fetchCardData } = userSlice.actions;
export const selectAllDetail = (state) => state.user.allUserData;
export const selectUserDetail = (state) => state.user.userDetail;
export const selectNavDetail = (state) => state.user.allUserData;
export const selectcardData = (state) => state.user.cardData;
export const selectcardData_2 = (state) => state.user.cardData_2;
export default userSlice.reducer;

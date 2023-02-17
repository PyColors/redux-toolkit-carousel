import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import unsplashApi from "../../api/unsplash";

export const getBackgroundImage = createAsyncThunk(
  "backgroundImage/getImage",
  unsplashApi.getImage
);

export const backgroundImageSlice = createSlice({
  name: "backgroundImage",
  initialState: {
    imageUrls: [],
    currentImageUrlIndex: 0,
    isLoadingImages: false,
  },
  reducers: {
    switchToNextBackgroundImage: (state) => {
      state.currentImageUrlIndex =
        (state.currentImageUrlIndex + 1) % state.imageUrls.length;
    },
    switchToPreviousBackgroundImage: (state) => {
      let newIndex = state.currentImageUrlIndex - 1;
      if (newIndex < 0) {
        newIndex = state.imageUrls.length - 1;
      }

      state.currentImageUrlIndex = newIndex;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getBackgroundImage.pending, (state) => {
      state.isLoadingImages = true;
    })
    .addCase(getBackgroundImage.fulfilled, (state, action) => {
      state.isLoadingImages = false;
      state.imageUrls = action.payload;
      state.currentImageUrlIndex = 0;
    })
  },
});

export const {
  switchToNextBackgroundImage,
  switchToPreviousBackgroundImage
} = backgroundImageSlice.actions;


export const isLoading = (state) => state.backgroundImage.isLoadingImages;

export default backgroundImageSlice.reducer;

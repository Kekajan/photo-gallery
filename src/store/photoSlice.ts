import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPhoto } from "../types";

interface PhotoState {
  photoData: IPhoto[];
}

const initialState: PhotoState = {
  photoData: [],
};

const photoSlice = createSlice({
  name: "photoSlice",
  initialState,
  reducers: {
    appendPhotoData: (state, action: PayloadAction<IPhoto[]>) => {
      state.photoData = [...state.photoData, ...action.payload];
    },
  },
});

export const { appendPhotoData } = photoSlice.actions;

export default photoSlice.reducer;

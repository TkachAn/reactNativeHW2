import { createSlice } from "@reduxjs/toolkit";
//
console.log("photoSlise");
//
const initialPhoto = {
  photoId: null,
  photo: null,
  title: null,
  photoLocation: null,
  currentLocation: null,
};
export const photoSlice = createSlice({
  name: "photo",
  initialPhoto,
  reducers: {
    createPhoto: (state, { payload }) => {
      state.photoId = payload.photoId;
      state.photo = payload.photo;
      state.title = payload.title;
      state.photoLocation = payload.photoLocation;
      state.currentLocation = payload.currentLocation;
    },
    deletePhoto: (state, { payload }) => {
      state.photoId = null;
      state.photo = null;
      state.title = null;
      state.photoLocation = null;
      state.currentLocation = null;
    },
  },
});

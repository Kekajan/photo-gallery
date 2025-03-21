import { axiosInstance } from "./http.service";
import { IPhoto } from "../types";
import { appendPhotoData, AppDispatch } from "../store";

export const getPhotos = async (
  page: number = 0,
  dispatch: AppDispatch
): Promise<void> => {
  try {
    const response = await axiosInstance.get(`/photos?_page=${page}`);
    const photos: IPhoto[] = response?.data || [];
    dispatch(appendPhotoData(photos));
  } catch (error) {
    console.error(error);
  }
};

export const getPhotoById = async (id: number): Promise<IPhoto | null> => {
  try {
    const response = await axiosInstance.get(`/photos/${id}`);
    return response?.data || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}
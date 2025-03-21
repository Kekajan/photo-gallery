export interface IPhoto {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IPhotoState {
  photos: IPhoto[];
  loading: boolean;
  error: string | null;
}

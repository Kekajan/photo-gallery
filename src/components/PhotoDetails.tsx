import React from "react";
import { IPhoto } from "../types";

interface PhotoDetailsProps {
  photo: IPhoto;
}

const PhotoDetails: React.FC<PhotoDetailsProps> = ({ photo }) => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <img
        src={photo.url}
        alt={photo.title}
        className="w-full h-80 object-cover rounded-lg"
      />
      <h2 className="text-lg font-semibold mt-4">{photo.title}</h2>
      <p className="text-gray-600 mt-2">Album ID: {photo.albumId}</p>
      <p className="text-gray-600">Photo ID: {photo.id}</p>
    </div>
  );
};

export default PhotoDetails;

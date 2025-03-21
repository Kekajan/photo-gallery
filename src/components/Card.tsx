import React from "react";
import { IPhoto } from "../types";

interface PhotoCardProps {
  photo: IPhoto;
  onViewDetails: (id: number) => void;
}

const Card: React.FC<PhotoCardProps> = ({ photo, onViewDetails }) => {
  return (
    <div className="bg-white rounded-sm p-4 flex flex-col items-center shadow-md">
      <img
        src={photo.thumbnailUrl}
        alt={photo.title}
        className="w-32 h-32 object-cover rounded-md"
      />
      <h3 className="text-sm mt-2 font-poppins flex-grow  text-black px-3 py-2 rounded-lg">
        {photo.title}
      </h3>
      <button
        onClick={() => onViewDetails(photo.id)}
        className="bg-blue-500 text-white px-4 py-3 mt-2 inline-block rounded hover:bg-blue-600 transition text-left w-fit"
      >
        View Details
      </button>
    </div>
  );
};

export default Card;

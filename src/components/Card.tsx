import React from "react";
import { Photo } from "../types/types";

interface PhotoCardProps {
  photo: Photo;
  onViewDetails: (id: number) => void;
}

const Card: React.FC<PhotoCardProps> = ({ photo, onViewDetails }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img
        src={photo.thumbnailUrl}
        alt={photo.title}
        className="w-32 h-32 object-cover rounded-md"
      />
      <h3 className="text-sm font-semibold text-gray-800 mt-2 text-center">
        {photo.title}
      </h3>
      <button
        onClick={() => onViewDetails(photo.id)}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        View Details
      </button>
    </div>
  );
};

export default Card;

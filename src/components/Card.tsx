import React from "react";
import { IPhoto } from "../types";

interface PhotoCardProps {
  photo: IPhoto;
  onViewDetails: (id: number) => void;
}

const Card: React.FC<PhotoCardProps> = ({ photo, onViewDetails }) => {
  const fallbackImage =
    "https://www.iconpacks.net/icons/4/free-no-image-icon-14596-thumb.png";

  return (
    <div className="rounded-sm flex flex-col pb-5 items-center min-h-[320px] shadow-md">
      <img
        src={photo.thumbnailUrl || fallbackImage}
        alt={photo.title}
        className="w-96 h-40 object-cover rounded-md"
        onError={(e) => (e.currentTarget.src = fallbackImage)}
      />
      <h3 className="text-md mt-2 font-poppins flex-grow text-black px-3 py-2 rounded-lg">
        {photo.title}
      </h3>
      <button
        onClick={() => onViewDetails(photo.id)}
        className="bg-blue-500 text-white px-4 py-2 mt-2 inline-block rounded hover:bg-blue-600 transition text-left w-fit font-medium"
      >
        View Details
      </button>
    </div>
  );
};

export default Card;

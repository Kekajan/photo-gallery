import React from "react";
import { motion } from "framer-motion";
import { IPhoto } from "../types";

interface PhotoDetailsProps {
  photo: IPhoto;
}

const PhotoDetails: React.FC<PhotoDetailsProps> = ({ photo }) => {
  const fallbackImage =
    "https://www.iconpacks.net/icons/4/free-no-image-icon-14596-thumb.png";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-xl mx-auto p-6 rounded-lg shadow-md bg-white border border-gray-200"
    >
      <motion.img
        src={photo.url || fallbackImage}
        alt={photo.title}
        className="w-full h-80 object-cover rounded-md shadow-sm"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        onError={(e) => {
          if (e.currentTarget.src !== fallbackImage) {
            e.currentTarget.src = fallbackImage;
          }
        }}
      />
      <h2 className="mt-4 font-semibold text-gray-900">{photo.title}</h2>
      <div className="mt-3 text-gray-700 space-y-1">
        <p className="text-base">
          <span className="font-semibold">Album ID:</span> {photo.albumId}
        </p>
        <p className="text-base">
          <span className="font-semibold">Image ID:</span> {photo.id}
        </p>
      </div>
    </motion.div>
  );
};

export default PhotoDetails;

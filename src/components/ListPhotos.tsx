import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { IPhoto } from "../types";

interface PhotoListProps {
  photos: IPhoto[];
  onViewDetails: (id: number) => void;
}

const PhotoList: React.FC<PhotoListProps> = ({ photos, onViewDetails }) => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-8 rounded-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {photos.map((photo, index) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <Card photo={photo} onViewDetails={onViewDetails} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PhotoList;

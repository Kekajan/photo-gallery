// import React from "react";
// import { motion } from "framer-motion";
// import { IPhoto } from "../types";

// interface PhotoDetailsProps {
//   photo: IPhoto;
// }

// const PhotoDetails: React.FC<PhotoDetailsProps> = ({ photo }) => {
//   const fallbackImage =
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNLEL-qmmLeFR1nxJuepFOgPYfnwHR56vcw&s";

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className="max-w-xl mx-auto p-6 rounded-md shadow-md"
//     >
//       <motion.img
//         src={photo.url || fallbackImage}
//         alt={photo.title}
//         className="w-full h-80 object-cover rounded-lg"
//         whileHover={{ scale: 1.05 }}
//         transition={{ duration: 0.3 }}
//         onError={(e) => (e.currentTarget.src = fallbackImage)}
//       />
//       <h2 className="text-lg font-semibold mt-4">{photo.title}</h2>
//       <p className="text-gray-600 mt-2">Album ID: {photo.albumId}</p>
//       <p className="text-gray-600">Photo ID: {photo.id}</p>
//     </motion.div>
//   );
// };

// export default PhotoDetails;

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
      className="max-w-xl mx-auto p-6 rounded-lg shadow-lg bg-white"
    >
      <motion.img
        src={photo.url || fallbackImage}
        alt={photo.title}
        className="w-full h-80 object-cover rounded-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        onError={(e) => (e.currentTarget.src = fallbackImage)}
      />
      <h2
        className="mt-4 text-2xl font-bold text-gray-800"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {photo.title}
      </h2>
      <p
        className="mt-2 text-gray-800 text-base"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        <span className="font-medium text-gray-800">Album ID:</span>{" "}
        {photo.albumId}
      </p>
      <p
        className="text-gray-800 text-base"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        <span className="font-medium text-gray-800">Photo ID:</span> {photo.id}
      </p>
    </motion.div>
  );
};

export default PhotoDetails;

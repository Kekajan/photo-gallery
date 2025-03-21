import React from "react";
import Card from "./Card";
import { IPhoto } from "../types";

interface PhotoListProps {
  photos: IPhoto[];
  onViewDetails: (id: number) => void;
}

const PhotoList: React.FC<PhotoListProps> = ({ photos, onViewDetails }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map((photo) => (
        <Card key={photo.id} photo={photo} onViewDetails={onViewDetails} />
      ))}
    </div>
  );
};

export default PhotoList;

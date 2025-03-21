import React from "react";
import Card from "../components/Card";
import { Photo } from "../types/types";

interface ListPhotosProps {
  photos: Photo[];
  onViewDetails: (id: number) => void;
}

const ListPhotos: React.FC<ListPhotosProps> = ({ photos, onViewDetails }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map((photo) => (
        <Card key={photo.id} photo={photo} onViewDetails={onViewDetails} />
      ))}
    </div>
  );
};

export default ListPhotos;
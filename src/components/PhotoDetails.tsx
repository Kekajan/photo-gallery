import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Photo } from "../types/types";

const PhotoDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotoDetails = async () => {
      try {
        const response = await axios.get<Photo>(
          `https://jsonplaceholder.typicode.com/photos/${id}`
        );
        setPhoto(response.data);
      } catch (err) {
        setError("Failed to load photo details.");
      } finally {
        setLoading(false);
      }
    };

    fetchPhotoDetails();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {photo && (
        <>
          <img
            src={photo.url}
            alt={photo.title}
            className="w-full h-80 object-cover rounded-lg"
          />
          <h2 className="text-lg font-semibold mt-4">{photo.title}</h2>
          <p className="text-gray-600 mt-2">Album ID: {photo.albumId}</p>
          <p className="text-gray-600">Photo ID: {photo.id}</p>
        </>
      )}
    </div>
  );
};

export default PhotoDetails;
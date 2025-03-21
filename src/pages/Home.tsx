import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Photo } from "../types/types";
import ListPhotos from "../components/ListPhotos";

const Home: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get<Photo[]>(
          "https://jsonplaceholder.typicode.com/photos?_limit=20"
        );
        setPhotos(response.data);
      } catch (err) {
        setError("Failed to load photos.");
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  const handleViewDetails = (id: number) => {
    navigate(`/photo/${id}`);
  };

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Photo Gallery</h1>
      <ListPhotos photos={photos} onViewDetails={handleViewDetails} />
    </div>
  );
};

export default Home;
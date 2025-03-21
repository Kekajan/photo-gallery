import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPhoto } from "../types";
import { getPhotoById } from "../services";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import PhotoDetails from "../components/PhotoDetails";
import { motion } from "framer-motion";

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [photo, setPhoto] = useState<IPhoto | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const photoData: IPhoto[] = useSelector(
    (state: RootState) => state.photos.photoData
  );

  useEffect(() => {
    setLoading(true);
    if (photoData.length > 0) {
      const photo = photoData.find((photo) => photo.id === parseInt(id!));
      setPhoto(photo!);
      setLoading(false);
    } else {
      fetchPhotoDetails();
    }
  }, [id]);

  const fetchPhotoDetails = async () => {
    try {
      const response = await getPhotoById(parseInt(id!));
      setPhoto(response);
    } catch (err) {
      setError("Failed to load photo details" + err);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
    );
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!photo) return <p className="text-center text-red-500">No photo found</p>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <PhotoDetails photo={photo} />
    </div>
  );
};

export default Details;

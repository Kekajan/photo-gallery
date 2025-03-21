import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListPhotos from "../components/ListPhotos";
import { IPhoto } from "../types";
import { getPhotos } from "../services";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { motion } from "framer-motion";
import Loader from "../components/Loader";

const Home: React.FC = () => {
  const photoData: IPhoto[] = useSelector(
    (state: RootState) => state.photos.photoData
  );
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [buttonLoading, setButtonLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(page == 1);
      setButtonLoading(page !== 1);
      try {
        await getPhotos(page, dispatch);
      } catch (err) {
        setError("Failed to load photos: " + err);
      } finally {
        setLoading(false);
        setButtonLoading(false);
      }
    };

    fetchPhotos();
  }, [page, dispatch]);

  const handleViewDetails = (id: number) => {
    navigate(`/photo/${id}`);
  };

  const handleLoad = () => {
    setPage(page + 1);
  };

  if (loading)
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    );
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Photo Gallery</h1>
      <ListPhotos photos={photoData} onViewDetails={handleViewDetails} />
      {/* <button onClick={handleLoad} className="mt-6">
        {buttonLoading ? "loading.." : "Load More."}
      </button> */}
      {/* <button
        onClick={handleLoad}
        className="bg-blue-500 text-white px-4 py-2 mt-6 inline-block rounded hover:bg-blue-600 transition text-left w-fit font-medium"
      >
        Load More
      </button> */}
      <button
        onClick={handleLoad}
        className="bg-blue-500 text-white px-4 py-2 mt-6 inline-flex items-center gap-2 rounded hover:bg-blue-600 transition text-left w-fit font-medium"
        disabled={buttonLoading}
      >
        {buttonLoading ? <Loader /> : "Load More"}
      </button>
    </div>
  );
};

export default Home;

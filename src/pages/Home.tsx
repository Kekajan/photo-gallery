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
  const [searchQuery, setSearchQuery] = useState<string>("");
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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredPhotos = photoData.filter((photo) =>
    photo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      {/* <h1 className="text-2xl font-bold text-center mb-6">Photo Gallery</h1> */}
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Photo Gallery
      </h1>
      <div className="mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search photos by title"
          className="w-100 p-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <ListPhotos photos={filteredPhotos} onViewDetails={handleViewDetails} />
      <button
        onClick={handleLoad}
        className="bg-blue-500 text-white px-4 py-2 mt-6 inline-flex items-center gap-2 rounded hover:bg-blue-600 transition text-left w-fit font-medium"
        disabled={buttonLoading}
      >
        {buttonLoading ? <Loader /> : "Load more..."}
      </button>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { VEDIO_API_URL } from "../utils/constants";
import { VedioCard } from "./VedioCard";
import { Link } from "react-router-dom";

const VedioContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state to manage fetch status

  const getVideos = async () => {
    try {
      const data = await fetch(VEDIO_API_URL);
      const json = await data.json();
      setVideos(json.items);
      setLoading(false); // Stop loading once the data is fetched
    } catch (error) {
      console.error("Failed to fetch videos:", error);
      setLoading(false); // Stop loading even on error
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
      {/* Loading State */}
      {loading ? (
        <div className="col-span-full text-center text-gray-600 text-lg animate-pulse">
          Loading videos...
        </div>
      ) : videos.length === 0 ? (
        // Empty State when there are no videos
        <div className="col-span-full text-center text-gray-600 text-lg">
          No videos available at the moment
        </div>
      ) : (
        // Render videos if available
        videos.map((video, index) => (
          <Link to={`/watch/${video.id}`} key={index}>
            <VedioCard vedios={video} />
          </Link>
        ))
      )}
    </div>
  );
};

export default VedioContainer;

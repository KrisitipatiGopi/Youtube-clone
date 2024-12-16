import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";

const Watch = ({ vedios }) => {
  console.log(vedios);
  const vedioId = useParams();
  console.log(vedioId.id);
  if(!vedioId) return

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-10 mt-5">
        <iframe
          width="1000"
          height="500"
          src={`https://www.youtube.com/embed/${vedioId.id}?controls=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Watch;

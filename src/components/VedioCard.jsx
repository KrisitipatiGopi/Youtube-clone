import React from 'react';

export const VedioCard = ({ vedios }) => {




  if (!vedios) return null;
  

  const { snippet, statistics } = vedios;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
      {/* Video Thumbnail */}
      <img
        src={snippet.thumbnails.medium.url}
        alt={snippet.channelTitle}
        className="rounded-lg w-full mb-4"
      />

      {/* Video Details */}
      <div className="flex flex-col space-y-2">
        {/* Video Title */}
        <p className="font-semibold text-gray-800 text-lg line-clamp-2">
          {snippet.title}
        </p>

        {/* Views and Channel Info */}
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <p>{statistics.viewCount} views</p>
        </div>

        {/* Published Date (optional, can be added in future) */}
      </div>
    </div>
  );
};

export default VedioCard;

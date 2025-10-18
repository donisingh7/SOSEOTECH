import React from 'react';

const ResourceCard = ({ imgSrc, title, description, link = '#' }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transform hover:-translate-y-1 transition-transform duration-300">
      <div className="flex-shrink-0">
        <img className="w-full h-40 object-cover" src={imgSrc} alt={title} />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-base flex-grow mb-6">
          {description}
        </p>
        <a
          href={link}
          className="inline-block self-start bg-gray-800 text-white font-semibold py-2 px-5 rounded-md hover:bg-gray-900"
        >
          READ MORE
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;
import React from 'react';
import Image from 'next/image'; // Use Next.js Image for optimization

const BlogCard = ({ title, description, image, avatar, author, designation }) => {
  return (
    <div className="bg-glass-no-border rounded-md shadow-lg flex flex-col h-full">
      {/* Image Section */}
      <div className="relative w-full h-48"> {/* Adjust height for full coverage */}
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-md"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          <p className="text-white text-xs mt-2">{description}</p>
        </div>

        {/* Break Line */}
        <hr className="border-gray-300 my-4" />

        {/* Author Section */}
        <div className="flex items-center space-x-3">
          <Image
            src={avatar}
            alt="Author Avatar"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-white">{author}</p>
            <p className="text-sm text-white">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

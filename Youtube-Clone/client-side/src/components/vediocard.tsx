import React from "react";
import Image from "next/image";

type VideoCardProps = {
  title: string;
  thumbnail: string;
  channel: string;
  author: string;
  views: string;
  timestamp: string;
};

export default function VideoCard({
  title,
  thumbnail,
  channel,
  author,
  views,
  timestamp,
}: VideoCardProps) {
  return (
    <div className="p-4">
      <Image
        className="rounded-xl"
        src={`/${thumbnail}`}
        alt="Video thumbnail"
        width={500}
        height={300}
        layout="responsive"
      />
      <div className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-1 flex items-center lg:w-8 h-10">
          <img
            className="rounded-full"
            src={`/${channel}`}
            alt="Channel logo"
            // width={48}
            // height={48}
          /> 
        </div>
        <div className="col-span-11">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-400 mt-1">{author}</p>
          <p className="text-gray-400">
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

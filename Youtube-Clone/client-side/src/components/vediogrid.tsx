import VideoCard from "@/components/vediocard";
import React from 'react'



const VEDIOS = [
  {
    title: "Songs that boost you into God Mode | 🧠 🆒",
    thumbnail: "photo1.jpg",
    channel: "chanel.png",
    author: "INTREPID EGO",
    views: "9.9M views",
    timestamp: "1 year ago",
  },
  {
    title: "Songs that boost you into Bad Mode | 🧠 🆒",
    thumbnail: "photo1.jpg",
    channel: "chanel.png",
    author: "INTREPID EGO",
    views: "9.9M views",
    timestamp: "1 year ago",
  },

  {
    title: "Songs that boost you into Code Mode | 🧠 🆒",
    thumbnail: "photo1.jpg",
    channel: "chanel.png",
    author: "INTREPID EGO",
    views: "9.9M views",
    timestamp: "1 year ago",
  },

  {
    title: "Songs that boost you into Hate Mode | 🧠 🆒",
    thumbnail: "photo1.jpg",
    channel: "chanel.png",
    author: "INTREPID EGO",
    views: "9.9M views",
    timestamp: "1 year ago",
  },
];
export default function VedioGrid() {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {VEDIOS.map(vedios=><div>
      <VideoCard
      title={vedios.title}
        thumbnail={vedios.thumbnail}
        channel={vedios.channel}
        author={vedios.author}
        views={vedios.views}
        timestamp={vedios.timestamp}
/>

    </div>)}
  </div>;
}

// src/component/ArtistTabContent.js
import React from "react";
import { artists } from "../data/rightSidebarData";
function ArtistTabContent() {
  return (
    <div>
      {artists.map((artist, index) => (
        <div
          key={index}
          className="w-[244px] h-[126px] rounded-lg flex items-end mb-4 relative"
        >
          <img
            src={artist.backgroundImage}
            alt="background"
            className="opacity-100 w-full h-full object-cover rounded-lg"
          />
          <div className="flex absolute m-4 w-full">
            <div
              className="rounded-3xl border-2 border-white h-3 w-3 absolute left-10"
              style={{ backgroundColor: artist.statusColor }}
            ></div>
            <img
              src={artist.profileImage}
              alt="artist"
              className=" h-12 w-12  "
            />
            <div className="flex flex-col text-white mx-4">
              <span className="text-md">{artist.name}</span>
              <span className="text-xs">{artist.handle}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArtistTabContent;

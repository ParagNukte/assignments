import React from "react";
import "../App.css";
import { horizontalScrollItems } from "../data/horizontalScrollData";

function HorizontalScrollSection() {
  return (
    <div className="w-[620px] my-4 overflow-x-auto flex space-x-4">
      {horizontalScrollItems.map((item) => (
        <div key={item.id} className="flex-none">
          <img
            src={item.imageSrc}
            alt={`Item ${item.id}`}
            className="w-[252px] h-[180px] object-cover rounded-lg"
          />
          <div className="mt-2 flex flex-col">
            <span className="flex justify-start text-sm">
              {item.description}
            </span>
            <div className="flex justify-between">
              <span className="block text-lg font-semibold barFont">
                {item.price}
              </span>
              <span className="block text-sm text-gray-500">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <img
                    key={index}
                    src="/interactive-icons/star.svg"
                    alt="star"
                    className="w-3 h-3 inline-block"
                  />
                ))}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HorizontalScrollSection;

import { Star } from "lucide-react";
import React, { useState } from "react";


const RatingStar = ({ totalStars = 5, onRating,defaultRating }) => {
  const [rating, setRating] = useState(defaultRating | 0);
  const [hover, setHover] = useState(null);

  const handleRating = (rate) => {
    setRating(rate);
    if (onRating) onRating(rate); // Callback for parent component
  };

  return (
    <div className="flex space-x-1 px-2">
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;
        return (
          <Star
            key={starValue}
            className={`w-4 h-4 cursor-pointer transition-colors ${
              starValue <= (hover || rating)
                ? "text-yellow-400"
                : "text-gray-400"
            }`}
            size={24}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(null)}
            onClick={() => handleRating(starValue)}
          />
        );
      })}
    </div>
  );
};

export default RatingStar;

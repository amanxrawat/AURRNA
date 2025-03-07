import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";


const ReviewStars = ({ rating }) => {
  const MAX_STARS = 5;
  const fullStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = rating % 1 !== 0; // Check if there's a half star
  const emptyStars = MAX_STARS - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

  return (
    <div className="flex gap-1">
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={`full-${index}`} fill="orange" className="text-yellow-400 w-5 h-5" />
      ))}

      {/* Half Star (if applicable) */}
      {hasHalfStar && <FaStarHalfAlt fill="orange" className="text-yellow-400 w-5 h-5" />}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={`empty-${index}`} fill="orange" className="text-gray-300 w-5 h-5" />
      ))}
    </div>
  );
};

export default ReviewStars;

import { useState } from "react";

const initialReviews = [
  {
    id: 1,
    user: "Alice",
    rating: 5,
    comment: "Excellent product! Highly recommended.",
    date: "2023-05-15",
  },
  {
    id: 2,
    user: "Bob",
    rating: 4,
    comment: "Good quality, but a bit pricey.",
    date: "2023-05-10",
  },
  {
    id: 3,
    user: "Charlie",
    rating: 3,
    comment: "Average product. Does the job.",
    date: "2023-05-05",
  },
];

export default function ReviewSection() {
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({ rating: 0, comment: "" });

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.rating === 0 || newReview.comment.trim() === "") return;
    const review = {
      id: reviews.length + 1,
      user: "You",
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split("T")[0],
    };
    setReviews([...reviews, review]);
    setNewReview({ rating: 0, comment: "" });
  };

  return (
    <div className="p-6">
      <div>
        <h2 className="mb-4 text-2xl font-bold">Customer Reviews</h2>
        <div className="mb-4 flex items-center">
          <span className="mr-2 text-4xl font-bold">
            {averageRating.toFixed(1)}
          </span>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`text-2xl ${star <= Math.round(averageRating) ? "text-yellow-400" : "text-gray-300"}`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="ml-2 text-gray-600">({reviews.length} reviews)</span>
        </div>
      </div>
      <div className="space-y-6">
        <div className="rounded-md border p-4 shadow-md">
          <h3 className="mb-2 text-lg font-semibold">Recent Reviews</h3>
          {reviews.map((review) => (
            <div key={review.id} className="border-b py-2 last:border-b-0">
              <div className="flex items-center">
                <span className="mr-2 font-semibold">{review.user}</span>
                <span className="text-sm text-gray-500">{review.date}</span>
                <div className="ml-auto flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`text-sm ${star <= review.rating ? "text-yellow-400" : "text-gray-300"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
        <div className="rounded-md border p-4 shadow-md">
          <h3 className="mb-2 text-lg font-semibold">Write a Review</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold">Rating</label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`cursor-pointer text-2xl ${star <= newReview.rating ? "text-yellow-400" : "text-gray-300"}`}
                    onClick={() => setNewReview({ ...newReview, rating: star })}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="block font-semibold">Your Review</label>
              <textarea
                className="w-full rounded-md border p-2"
                placeholder="Write your review here..."
                value={newReview.comment}
                onChange={(e) =>
                  setNewReview({ ...newReview, comment: e.target.value })
                }
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-2 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

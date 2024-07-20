import StarRating from "./starRating";

const ReviewItem = ({ review }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <div className="flex w-full justify-between items-center">
        <div className="flex justify-center items-center">
        <img
          src={review.userImage}
          alt={review.userName}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div className="text-[23px] leading-[-0.165px] text-black font-medium">
          {review.userName}
        </div>
        </div>
      <StarRating rating={review.rating} />
      </div>
      <p className="mt-2 text-[19px] leading-[-0.165px] text-black font-[400]">{review.text}</p>
    </div>
  );
};

export default ReviewItem;

import { useState } from "react";
import { dummyReviews } from "./dummyReviews";
import ReviewItem from "./reviewItem";

const ReviewList = () => {
  const [visibleReviews, setVisibleReviews] = useState(1);

  const showMore = () => {
    setVisibleReviews((prev) => Math.min(prev + 3, dummyReviews.length));
  };

  return (
    <div className="px-6 mb-8">
      {dummyReviews.length === 0 ? (
        <span className="text-[18px] font-medium">BE THE FIRST ONE TO REVIEW IT !!</span>
      ) : (
        dummyReviews
          .slice(0, visibleReviews)
          .map((review) => <ReviewItem key={review.id} review={review} />)
      )}
      {visibleReviews < dummyReviews.length && (
        <button
          onClick={showMore}
          className="mt-4 flex items-center justify-center gap-1 font-semibold text-black hover:underline"
        >
          Show more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M12.5 15.7032C12.3958 15.7032 12.3004 15.6858 12.2135 15.6511C12.1267 15.6164 12.0399 15.5556 11.9531 15.4688L6.79688 10.3125C6.65799 10.1737 6.59288 9.98703 6.60157 9.75265C6.61025 9.51828 6.68403 9.33165 6.82292 9.19276C6.99653 9.01915 7.18316 8.94536 7.38282 8.9714C7.58247 8.99745 7.76042 9.07991 7.91667 9.2188L12.5 13.8021L17.0833 9.2188C17.2222 9.07991 17.4089 9.00179 17.6432 8.98442C17.8776 8.96706 18.0642 9.04519 18.2031 9.2188C18.3767 9.35769 18.4505 9.53998 18.4245 9.76567C18.3984 9.99137 18.316 10.1823 18.1771 10.3386L13.0469 15.4688C12.9601 15.5556 12.8733 15.6164 12.7865 15.6511C12.6997 15.6858 12.6042 15.7032 12.5 15.7032Z"
              fill="black"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ReviewList;

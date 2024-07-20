import { useState } from "react";
import StarRating from "./starRating";

const WriteReview = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ rating, text });
    setIsOpen(false);
    setRating(0);
    setText("");
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" text-black flex justify-center items-center mb-3 gap-1 hover:underline rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M4.6875 24.6874C4.27083 24.6874 3.90625 24.5312 3.59375 24.2187C3.28125 23.9062 3.125 23.5416 3.125 23.1249V7.49992C3.125 7.08325 3.28125 6.71867 3.59375 6.40617C3.90625 6.09367 4.27083 5.93742 4.6875 5.93742H15.2344L13.6719 7.49992H4.6875V23.1249H20.3125V14.0624L21.875 12.4999V23.1249C21.875 23.5416 21.7187 23.9062 21.4062 24.2187C21.0937 24.5312 20.7292 24.6874 20.3125 24.6874H4.6875ZM17.2396 6.14575L18.3594 7.2395L10.9375 14.6353V16.8749H13.151L20.599 9.427L21.6927 10.5208L14.2708 17.9687C14.1319 18.1076 13.9627 18.2204 13.763 18.3072C13.5634 18.394 13.3594 18.4374 13.151 18.4374H10.1562C9.93056 18.4374 9.74392 18.3636 9.59635 18.2161C9.44878 18.0685 9.375 17.8819 9.375 17.6562V14.6614C9.375 14.453 9.4184 14.2491 9.50521 14.0494C9.59201 13.8497 9.70486 13.6805 9.84375 13.5416L17.2396 6.14575ZM21.6927 10.5208L17.2396 6.14575L19.8437 3.54159C20.1389 3.24645 20.5078 3.09888 20.9505 3.09888C21.3932 3.09888 21.7622 3.25513 22.0573 3.56763L24.2448 5.78117C24.5399 6.09367 24.6875 6.46259 24.6875 6.88794C24.6875 7.31329 24.5312 7.67353 24.2188 7.96867L21.6927 10.5208Z"
            fill="black"
          />
        </svg>

        <p className="font-medium">Write a review!</p>
      </button>
      {isOpen && (
        <form onSubmit={handleSubmit} className="mt-4">
          <div>
            <label>Rating:</label>
            <StarRating rating={rating} onRatingChange={setRating} />
          </div>
          <div className="mt-2">
            <label>Review:</label>
            <textarea
            required
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>
          <button
            type="submit"
            className="mt-2 bg-black text-white px-4 py-2 rounded"
          >
            Submit Review
          </button>
        </form>
      )}
    </div>
  );
};

export default WriteReview;

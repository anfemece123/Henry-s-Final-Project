import React from "react";
import { useSelector } from "react-redux";
import Rating from "@mui/material/Rating";

export default function ReviewSystem(props) {
  const details = useSelector((state) => state.details.details);

  return (
    <div className="border border-slate-600 shadow-2xl shadow-gray-600 hover:shadow-2xl">
      <div>
        <p>Product Reviews</p>
      </div>
      <div>
        {!details.Reviews ? (
          <p>No Reviews For This Product</p>
        ) : (
          details.Reviews.map((review) => (
            <div>
              {review.isVisible && (
                <div>
                  <p>User:{review.UserId}</p>
                  <p>
                    Calification:
                    <Rating
                      name="half-rating-read"
                      defaultValue={review.calification}
                      precision={0.5}
                      readOnly
                    />
                  </p>
                  <p>Comment:{review.comment}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

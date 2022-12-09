import React from "react";
import { useSelector } from "react-redux";
export default function ReviewSystem(props) {
  const details = useSelector((state) => state.details.details);
  console.log(details);
  return (
    <>
      <div>
        <p>Product Reviews</p>
      </div>
      <div>
        {!details.Reviews ? (
          <p>No Reviews</p>
        ) : (
          details.Reviews.map((review) => (
            <div>
              <p>User:{review.UserId}</p>
              <p>Calification:{review.calification}</p>
              <p>Comment:{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

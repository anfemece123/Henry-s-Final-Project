import React from "react";
import { useSelector } from "react-redux";
import Rating from "@mui/material/Rating";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function ReviewSystem(props) {
  const details = useSelector((state) => state.details.details);

  return (
    <MDBContainer className="h-100 p-0 m-0 overflow-auto">
      {(details.Reviews === undefined || details.Reviews.length === 0) && (
        <MDBRow className="h-100 p-0 m-0">
          <MDBCol className="h-100 p-0 m-0 d-flex flex-column justify-content-center align-items-center">
            <h3 className="text-center">No Reviews Yet</h3>{" "}
          </MDBCol>
        </MDBRow>
      )}

      {details.Reviews &&
        details.Reviews.map(
          (review, index) =>
            review.isVisible && (
              <MDBRow className="h-100 p-0 m-0">
                <MDBCol
                  key={index}
                  className="h-100 p-0 m-0 d-flex flex-column justify-content-center align-items-center shadow-gray-600 hover:shadow-2xl square border-top border-bottom border-dark"
                >
                  <p>User: {review.UserId}</p>
                  <Rating
                    name="half-rating-read"
                    defaultValue={review.calification}
                    precision={0.5}
                    readOnly
                    className="mb-3"
                  />
                  <h5>"{review.comment}"</h5>
                </MDBCol>
              </MDBRow>
            )
        )}
    </MDBContainer>
  );
}

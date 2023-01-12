import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MDBIcon,
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import Rating from "@mui/material/Rating";
import {
  getAllReviews,
  updateReview,
} from "../../../Redux/Reducer/RatingSlice";

// components

export default function ReviewsAdmin() {
  const reviews = useSelector((state) => state.reviews.allReview);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReviews());
  }, []);

  function alertButtonDelete(e) {
    dispatch(updateReview(e));
    dispatch(getAllReviews());
  }

  return (
    <MDBTable responsive>
      <MDBTableHead>
        <tr className="table-warning">
          <th scope="col">User</th>
          <th scope="col">Product</th>
          <th scope="col">Calification</th>
          <th scope="col">Coments</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {Array.isArray(reviews)
          ? reviews.map((element, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={element.User.profileImage}
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">
                          {element.User.first_name} {element.User.last_name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={element.Product.image}
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">{element.Product.title}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Rating
                      name="half-rating-read"
                      defaultValue={element.calification}
                      precision={0.5}
                      readOnly
                    />
                  </td>
                  <td>
                    <p>{element.comment}</p>
                  </td>
                  <td>
                      {element.isVisible ? (
                      <MDBBadge color="success" pill>
                        Active
                      </MDBBadge>
                    ) : (
                      <MDBBadge color="danger" pill>
                         Hidden
                      </MDBBadge>
                    )}
                  </td>

                  <td>
                    <MDBBtn
                      value={element.id}
                      type="submit"
                      onClick={() => {
                        {
                          alertButtonDelete(element.id);
                        }
                      }}
                      color="link"
                      rounded
                      size="sm"
                    >
                      <MDBIcon color="danger" fas icon="ban" />
                    </MDBBtn>
                  </td>
                </tr>
              );
            })
          : null}
      </MDBTableBody>
    </MDBTable>
  );
}

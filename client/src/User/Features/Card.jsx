import React from "react";
import { Link } from "react-router-dom";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

export default function Card({
  id,
  title,
  price,
  size,
  gender,
  stock,
  images,
}) {
  return (
    <MDBCard>
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image hover-overlay text-center"
        style={{ maxWidth: "320px", minWidth: "320px" }}
      >
        <MDBCardImage
          src={images}
          style={{ width: "200px", height: "150px" }}
          fluid
        />
      </MDBRipple>
      <MDBCardBody className="text-center justify-content-center m-auto">
        <Link to={`/detail/${id}`}>
          <MDBCardTitle className="text-center">{title}</MDBCardTitle>
        </Link>
        <MDBCardText>
          <span>Price: $</span>
          <span>{price}</span>
          <br />
          <span>Size: </span>
          <span>{size}</span>

          {stock ? (
            <div>
              <span>Stock:</span>
              <span> {stock}</span>
            </div>
          ) : (
            <div>
              <span>Stock:</span>
              <span>Not Available</span>
            </div>
          )}

          {gender ? (
            <div>
              <span>Gender:</span>
              <span> {gender}</span>
            </div>
          ) : (
            <div>
              <span>Gender:</span>
              <span> All</span>
            </div>
          )}
        </MDBCardText>
        <Link to={`/detail/${id}`}>
          <MDBBtn>Details</MDBBtn>
        </Link>
      </MDBCardBody>
    </MDBCard>
  );
}

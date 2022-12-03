import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function Cards({
  id,
  title,
  price,
  size,
  gender,
  stock,
  images,
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={images}
        style={{ minHeight: "300px", maxHeight: "300px" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <span>Price:$</span>
          <span> {price}</span>
          <span>Size:</span>
          <span> {size}</span>
          <div>
            <div>
              {stock ? (
                <div>
                  <span>Stock:</span>
                  <span> {stock}</span>
                </div>
              ) : (
                <div>
                  <span>Stock:</span>
                  <span>No disponible</span>
                </div>
              )}
            </div>
            <div>
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
            </div>
          </div>
        </Card.Text>
        <Button variant="success">
          <Link
            className="text-decoration-none text-black"
            to={`/detail/${id}`}
          >
            Comprar
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../Redux/Reducer/productDetails";
import { useParams } from "react-router";
import Loading from "../Features/Loading";
import NavBar from "../Features/Navigation";
import Footer from "../Features/Footer";
import { addProduct } from "../../Redux/Reducer/cartSlice";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

export default function Details() {
  const details = useSelector((state) => state.details);
  const loading = useSelector((state) => state.loadin);
  const error = useSelector((state) => state.details.error);
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = details.details;
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const handleClick = () => {
    dispatch(
      addProduct({
        ...product,
        quantity,
        price: details.details.price * quantity,
        price2: details.details.price,
      })
    );
  };
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  // Falta stock

  if (loading) return <Loading />;
  if (!loading && error) return <h1>{error}</h1>;
  return (
    <Container fluid className="min-vh-100" lg={12}>
      <Row>
        <Col lg={12} md={12} xs={12}>
          <NavBar />
        </Col>
        <Col lg={6} md={6} xs={12}>
          <Image
            src={details.details.image}
            alt={`pic-for${details.details.title}`}
            fluid
            style={{ maxHeight: "700px", minHeight: "700px" }}
          />
        </Col>
        <Col lg={2} md={3} xs={12} className="pt-5">
          <Stack gap={5}>
            <div>PRODUCT: {details.details.title}</div>
            <div>PRICE: ${details.details.price}</div>
            <div>SIZE: {details.details.size}</div>
            <div>COLOR: {details.details.color}</div>
            <div>SEASON: {details.details.season}</div>
            <div>GENDER: {details.details.gender}</div>
            <div>STOCK: {details.details.stock}</div>
          </Stack>
        </Col>
        <Col lg={4} md={5} xs={9} className="pt-5 pb-5 d-flex gap-4 m-auto">
          <RemoveIcon onClick={() => handleQuantity("dec")} />
          <p>{quantity}</p>
          <AddIcon onClick={() => handleQuantity("inc")} />
          <div>
            {details.details.stock >= 1 && (
              <Button onClick={handleClick}>Añadir al carrito</Button>
            )}
          </div>
        </Col>
        <Col md={12} xs={12}>
          <div>
            <Footer />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

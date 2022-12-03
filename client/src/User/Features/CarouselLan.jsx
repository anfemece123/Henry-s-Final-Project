import { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Reducer/allProductSlice";
import Image from "react-bootstrap/Image";

function CarouselLan() {
  const product = useSelector((state) => state.allProducts.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Image
          className="d-block w-100"
          src={product[0].image}
          alt="First slide"
          style={{ height: "600px" }}
          fluid
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image
          className="d-block w-100"
          src={product[2].image}
          alt="Second slide"
          style={{ height: "600px" }}
          fluid
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image
          className="d-block w-100"
          src={product[4].image}
          alt="Second slide"
          style={{ height: "600px" }}
          fluid
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image
          className="d-block w-100"
          src={product[3].image}
          alt="Second slide"
          style={{ height: "600px" }}
          fluid
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={product[1].image}
          style={{ height: "600px" }}
          alt="Third slide"
          fluid
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselLan;

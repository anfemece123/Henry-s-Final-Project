import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Features/Card";
import NavBar from "../Features/NavBar";
import Loading from "../Features/Loading";

export default function Home() {
  const product = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if (product.loading) return <Loading />;
  if (product.error) return <ErrorSearch />;

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="col-span-5 mt-5 mb-2">
        <div className="text-center uppercase font-noto-serif text-3xl">
          <h1>Products</h1>
        </div>
      </div>
      <div>
        {/* Aca van las Cards */}
        <div>
          {product
            ? product.allProducts.map((element) => {
                return (
                  <div>
                    <Card
                      id={element.id}
                      title={element.title}
                      // color={element.color}
                      price={element.price}
                      // size={element.size}
                      // gender={element.gender}
                      stock={element.stock}
                      category={element.category}
                      images={element.image}
                      thumbnail={element.thumbnail}
                    />
                  </div>
                );
              })
            : null}
        </div>
      </div>
      
    </div>
  );
}

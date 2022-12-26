import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProId,
  getAllProducts,
  getById,
} from "../../../Redux/Reducer/allProductSlice";
import {
  MDBIcon,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

import { useNavigate } from "react-router-dom";

export default function ProductsAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.allProducts.allProducts);

  function alertButtonDelete(e) {
    dispatch(deleteProId(e));
  }

  function editBotoAlert(e) {
    swal({
      title: "Are you sure?",
      text: "You are about to modify this product.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(getAllProducts());
        navigate("/formEditProduct");
      } else {
        swal("Your product is safe!");
      }
    });
  }
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <MDBTable responsive>
        <MDBTableHead>
          <tr className="table-success">
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Gender</th>
            <th scope="col">Size</th>
            <th scope="col">Stock</th>
            <th scope="col">Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {products
            ? products.map((element) => {
                return (
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={element.image}
                          alt=""
                          style={{ width: "45px", height: "45px" }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p className="fw-bold mb-1">{element.title}</p>
                          <p className="text-muted mb-0">{element.category}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">${element.price}</p>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">{element.gender}</p>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">{element.size}</p>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">{element.stock}</p>
                    </td>
                    <td>
                      <MDBIcon
                        color="danger"
                        value={element.id}
                        type="submit"
                        onClick={() => {
                          {
                            alertButtonDelete(element.id);
                          }
                        }}
                        rounded
                        size="sm"
                        fas
                        icon="trash-alt"
                      />

                      <a
                        className="pr-3"
                        value={element.id}
                        type="submit"
                        onClick={() => {
                          {
                            editBotoAlert(element.id);
                          }
                        }}
                        rounded
                        size="sm"
                      >
                        <MDBIcon
                          className="ms-2"
                          onClick={() => dispatch(getById(element.id))}
                          icon="pen"
                        />
                      </a>
                    </td>
                  </tr>
                );
              })
            : null}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

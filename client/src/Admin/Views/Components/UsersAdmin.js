import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUserId, getAllusers } from "../../../Redux/Reducer/Users";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

export default function UsersAdmin() {
  const user = useSelector((state) => state.users.allUsers);
  const error = useSelector((state) => state.users.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllusers());
  }, [dispatch]);
  function alertButtonDelete(e) {
    dispatch(deleteUserId(e));
    dispatch(getAllusers());
  }

  if (useSelector((state) => !state.users.loading && state.users.error))
    return <h1>{error}</h1>;
  return (
    <MDBTable responsive>
      <MDBTableHead>
        <tr className="table-primary">
          <th scope="col">Name</th>
          <th scope="col">information</th>
          <th scope="col">Banned</th>
          <th scope="col">Privileges(ADM)</th>
          <th scope="col">Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {Array.isArray(user)
          ? user.map((element) => {
              return (
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={element.profileImage}
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">
                          {element.first_name} {element.last_name}
                        </p>
                        <p className="text-muted mb-0">{element.email}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">{element.address}</p>
                    <p className="text-muted mb-0">{element.phoneNumber}</p>
                  </td>
                  <td>
                    {element.isBanned ? (
                      <MDBBadge color="danger" pill>
                        {element.isBanned ? "Baned" : "Active"}
                      </MDBBadge>
                    ) : (
                      <MDBBadge color="success" pill>
                        {element.isBanned ? "Baned" : "Active"}
                      </MDBBadge>
                    )}
                  </td>
                  <td>{element.isAdmin ? "Yes" : "No"}</td>
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
                      Ban
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

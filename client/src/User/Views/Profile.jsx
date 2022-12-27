import React, { useEffect } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import BusinessIcon from "@mui/icons-material/Business";
import Footer from "../../User/Features/Footer";
import NavBar from "../../User/Features/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getAllusers, getByIdUser } from "../../Redux/Reducer/Users";
import EditIcon from "@mui/icons-material/Edit";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user2 = useSelector((state) => state.users.userId);
  const user = useSelector((state) => state.auth.auth);
  useEffect(() => {
    dispatch(getByIdUser(user.id));
  }, [dispatch]);

  function editBotoAlert(e) {
    swal({
      title: "Are you sure?",
      text: "Remember to complete all the fields",
      icon: "info",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        navigate("/formEditUser");
      }
    });
  }
  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <NavBar />
          <div className="float-end">
            <button
              onClick={() => {
                {
                  editBotoAlert(user.id);
                }
              }}
            >
              <EditIcon onClick={() => dispatch(getByIdUser(user.id))} />
            </button>
          </div>
        </Col>
        <Col lg={12} className="text-center">
          <Image
            alt={user2.first_name}
            src={user2.profileImage}
            fluid
            roundedCircle
            style={{ minHeight: "320px" }}
          />
        </Col>
        <Col lg={12}>
          <h3 className="text-center">
            {user2.first_name} {user2.last_name}
          </h3>
        </Col>
        <Row
          lg={3}
          className="d-flex justify-content-center text-center mt-5 mb-5"
        >
          <Col>
            <EmailIcon />
            {user2.email}
          </Col>
          <Col>
            <PhoneIphoneIcon />
            {user2.phoneNumber}
          </Col>
          <Col>
            <BusinessIcon />
            {user2.address}
          </Col>
          <Col className="mt-5 border-circle shadow-lg text-start lh-base">
            <div className="m-3">
              An artist of considerable range, {user.first_name}
              {user.last_name} the name taken by Melbourne-raised,
              Brooklyn-based Nick Murphy writes, performs and records all of his
              own music, giving it a warm, intimate feel with a solid groove
              structure. An artist of considerable range.
            </div>
            <a
              href="#pablo"
              className="float-end"
              onClick={(e) => e.preventDefault()}
            >
              Show more
            </a>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

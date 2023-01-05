import React, { useEffect } from "react";
import Footer from "../../User/Features/Footer";
import NavBar from "../../User/Features/NavBar";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getAllusers, getByIdUser } from "../../Redux/Reducer/Users";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import BusinessIcon from "@mui/icons-material/Business";
import { Image } from "react-bootstrap";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";

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
      title: "Are you sure?",
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
    <MDBContainer fluid className="p-0 m-0">
      <MDBRow>
        <MDBCol lg={12}>
          <NavBar />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol className="d-flex justify-content-end p-3">
          <MDBBtn
            onClick={() => {
              {
                editBotoAlert(user.id);
              }
            }}
          >
            <EditIcon onClick={() => dispatch(getByIdUser(user.id))} />
          </MDBBtn>
        </MDBCol>
      </MDBRow>
      <MDBRow className="mt-3 mb-2">
        <MDBCol lg={12} className="text-center">
          <Image
            alt={user2.first_name}
            src={user2.profileImage}
            fluid
            roundedCircle
            style={{ minHeight: "320px" }}
          />
        </MDBCol>
      </MDBRow>
      <MDBRow className="mt-5 mb-2">
        <MDBCol lg={12}>
          <h3 className="text-center">
            {user2.first_name} {user2.last_name}
          </h3>
        </MDBCol>
      </MDBRow>
      <MDBRow className="d-flex justify-content-center text-center mt-3 mb-5">
        <MDBCol size="8" md="4" className="mt-3">
          <EmailIcon />
          &nbsp; {user2.email}
        </MDBCol>
        <MDBCol size="8" md="4" className="mt-3">
          <PhoneIphoneIcon />
          &nbsp; {user2.phoneNumber}
        </MDBCol>
        <MDBCol size="8" md="4" className="mt-3">
          <BusinessIcon />
          &nbsp; {user2.address}
        </MDBCol>
      </MDBRow>
      <MDBRow lg={8} className="d-flex justify-content-center mt-5 mb-5">
        <MDBCol className="mt-5 border-circle shadow-lg text-center lh-base">
          <div className="m-3">
            An artist of considerable range,{user.first_name}&nbsp;
            {user.last_name} the name taken by Melbourne-raised, Brooklyn-based
            Nick Murphy writes, performs and records all of his own music,
            giving it a warm, intimate feel with a solid groove structure. An
            artist of considerable range.
          </div>
          <a
            href="#pablo"
            className="float-end"
            onClick={(e) => e.preventDefault()}
          >
            Show more
          </a>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol lg={12} className="mt-5">
          <Footer />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

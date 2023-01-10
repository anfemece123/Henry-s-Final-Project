import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import image from "../../Images/welcome-bg.jpg";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";

const Welcome = () => {
  const url = "https://henry-s-final-project-backend-production.up.railway.app";
  const URL = useParams().confirmationCode;
  console.log("el path es: ", URL);
  const verifyUser = (URL) => {
    return axios
      .get(`http://localhost:3001/auth/confirm/${URL}`)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.message));
  };

  if (URL) {
    verifyUser(URL);
  }

  return (
    <MDBContainer style={{minHeight: "100vh"}} fluid className="text-center d-flex justify-content-center align-items-center bg-slate-200 p-0 m-0">
      <MDBRow className="m-auto">
        <MDBCol>
        <Card sx={{ maxWidth: 800 }} className="shadow-lg">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h2" component="div">
                Welcome!
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Your account has been confirmed. You can now make your purchases
                after logging in.
                <br />
                Enjoy your stay!
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className="d-flex justify-content-center">
            <Link to="/login">
              <MDBBtn color="primary" outline >
                Log In
              </MDBBtn>
            </Link>
          </CardActions>
        </Card>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Welcome;

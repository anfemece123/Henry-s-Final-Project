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

const Welcome = () => {
  const url = "https://henry-s-final-project-backend-production.up.railway.app";
  const URL = useParams().confirmationCode;
  console.log("el path es: ", URL);
  const verifyUser = (URL) => {
    return axios
      .get(`${url}/auth/confirm/${URL}`)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.message));
  };

  if (URL) {
    verifyUser(URL);
  }

  return (
    <div className="text-center flex min-h-screen min-w-full bg-slate-200">
      <div className="m-auto">
        <Card sx={{ maxWidth: 800 }}>
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
          <CardActions>
            <Button size="large" className="text-center" color="primary">
              <Link to={"/login"}> Log in</Link>
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Welcome;

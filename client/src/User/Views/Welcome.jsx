import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const Welcome = () => {
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
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>Account confirmed!</strong>
        </h3>
      </header>
      <Link to={"/login"}>Please Login</Link>
    </div>
  );
};

export default Welcome;

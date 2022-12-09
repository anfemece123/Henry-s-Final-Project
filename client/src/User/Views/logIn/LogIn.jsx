import { React, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Features/NavBar";
import { logIn } from "../../../Redux/actions/index";
import { useNavigate, useNavigation } from "react-router-dom";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { errorRemove } from "../../../Redux/Reducer/authSlice";
import jwt_decode from "jwt-decode";
import { redirect } from "react-router-dom";
import { googleAuth } from "../../../Redux/actions/index";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="/home">
        TIENDANUESTR@
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme();

export default function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [googleUser, setGoogleUser] = useState({});

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const user = useSelector((state) => state.auth.auth);

  const errorAuth = useSelector((state) => state.auth.errorAuth);

  useEffect(() => {
    if (Object.keys(user).length >= 1) {
      navigate("/home");
    }
  }, [user]);

  // Todo lo de google hasta el siguiente comment
  const handleCallBack = (response) => {
    const userObject = jwt_decode(response.credential);
    setGoogleUser(userObject);
    document.getElementById("signInDiv").hidden = true;
    const credentials = response.credential;
    dispatch(googleAuth(credentials));
  };

  const handleSingOut = () => {
    setGoogleUser({});
    document.getElementById("signInDiv").hidden = false;
  };

  useEffect(() => {
    // Variables globales de google (vienen del script que estan en el html)
    google.accounts.id.initialize({
      client_id:
        "367427673923-91opfd7qm11akhltnu97v0emf9e06tj1.apps.googleusercontent.com",
      callback: handleCallBack,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });

    google.accounts.id.prompt(); // Esto hace que te "popee" el cartelito de elegir cuenta al loguearte

    // hasta aca llega google
    dispatch(errorRemove());

    if (errorAuth.length === 0) {
      return;
    } else {
      swal({
        title: "Error!",
        text: errorAuth,
        icon: "error",
        button: "ok",
      });
    }
  }, [errorAuth]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(input));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={input.email}
              autoComplete="Your user email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={input.password}
              label="Password"
              type="password"
              id="password"
              onChange={handleChange}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            {/* TODO LO DE GOOGLE TEMPORAL */}
            <div id="signInDiv"></div>
            <Button
              type="submit"
              id="signOut"
              onClick={(e) => handleSingOut(e)}
            >
              Sing Out
            </Button>
            {user && (
              <div>
                <img src={googleUser.picture} alt={googleUser.name} />
                <h3>{googleUser.name}</h3>
              </div>
            )}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" to="/formRegister">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

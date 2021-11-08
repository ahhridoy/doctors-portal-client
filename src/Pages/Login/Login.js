import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import loginImg from "../../images/login.png";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history)
}

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
            <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 3 }}
              name="email"
              onBlur={handleOnBlur}
              id="standard-basic"
              label="Your Email"
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 3 }}
              name="password"
              onBlur={handleOnBlur}
              id="standard-basic"
              label="Password"
              variant="standard"
              type="password"
            />
            <Button
              sx={{ width: "75%", m: 3 }}
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
            <Link to="/register">
              <Button variant="text">NEW USER? PLEASE REGISTER?</Button>
            </Link>
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">Login successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </form>
          <p>------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <img src={loginImg} alt="" style={{ width: "100%" }}></img>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;

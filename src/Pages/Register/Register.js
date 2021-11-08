import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from "@mui/material";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import loginImg from "../../images/login.png";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const {user, registerUser, isLoading, authError} = useAuth();

  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData}
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleRegisterSubmit = (e) => {
    if(loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          { !isLoading && 
            <form onSubmit={handleRegisterSubmit}>
            <TextField
              sx={{ width: "75%", m: 3 }}
              name="name"
              onBlur={handleOnBlur}
              id="standard-basic"
              label="Your Name"
              variant="standard"
            />
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
            <TextField
              sx={{ width: "75%", m: 3 }}
              name="password2"
              onBlur={handleOnBlur}
              id="standard-basic"
              label="Re-Type Password"
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
            <Link to="/login">
              <Button variant="text">ALREADY HAVE AN ACCOUNT? PLEASE LOGIN?</Button>
            </Link>
          </form>
          }
          {isLoading && <CircularProgress />}
          {user?.email && <Alert severity="success">User Created successfully!</Alert>}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <img src={loginImg} alt="" style={{ width: "100%" }}></img>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
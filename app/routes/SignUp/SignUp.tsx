import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import { LockOutlined } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export interface IErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confPassword?: string;
}

export const url = import.meta.env.VITE_DB_URL;

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confPassword: "",
  });

  const [errors, setErrors] = useState({} as IErrors);
  const [valid, setValid] = useState(true);

  const onSignInButton = (event: React.FormEvent) => {
    event.preventDefault();
    let isValid = true;
    let validationErrors: IErrors = {};
    const { firstName, lastName, email, password, confPassword } = formData;

    if (firstName === "" || firstName === null) {
      isValid = false;
      validationErrors.firstName = "First name required";
    }

    if (lastName === "" || lastName === null) {
      isValid = false;
      validationErrors.lastName = "last name required";
    }

    if (email === "" || email === null) {
      isValid = false;
      validationErrors.email = "email required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      validationErrors.email = "email is not valid";
    }

    if (password === "" || password === null) {
      isValid = false;
      validationErrors.password = "password required";
    } else if (password.length < 6) {
      isValid = false;
      validationErrors.password = "password length at least 6 char";
    }

    if (confPassword !== password) {
      isValid = false;
      validationErrors.confPassword = "confirm password not match to password";
    }

    setErrors(validationErrors);
    setValid(isValid);

    if (Object.keys(validationErrors).length === 0) {
      axios
        .post(url as string, formData)
        .then((result) => {
          alert("Registered successfully");
          navigate("/login");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, textAlign: "center" }}>
        <Avatar sx={{ m: "auto", bgcolor: "purple" }}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5" sx={{ mt: 1, mb: 2 }}>
          Sign Up
        </Typography>

        <Box component="form" onSubmit={onSignInButton} sx={{ mt: 1 }}>
          {valid ? <></> : <span>{errors.firstName}</span>}
          <TextField
            margin="normal"
            fullWidth
            label="Enter your name"
            variant="outlined"
            autoComplete="given-name"
            onChange={(event) =>
              setFormData({ ...formData, firstName: event.target.value })
            }
          />
          {valid ? <></> : <span>{errors.lastName}</span>}
          <TextField
            margin="normal"
            fullWidth
            label="Enter your last name"
            variant="outlined"
            autoComplete="family-name"
            onChange={(event) =>
              setFormData({ ...formData, lastName: event.target.value })
            }
          />
          {valid ? <></> : <span>{errors.email}</span>}
          <TextField
            margin="normal"
            fullWidth
            label="Enter user email"
            variant="outlined"
            autoComplete="email"
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
          />
          {valid ? <></> : <span>{errors.password}</span>}
          <TextField
            margin="normal"
            fullWidth
            label="Enter password"
            type="password"
            variant="outlined"
            autoComplete="new-password"
            onChange={(event) =>
              setFormData({ ...formData, password: event.target.value })
            }
          />
          {valid ? <></> : <span>{errors.confPassword}</span>}
          <TextField
            margin="normal"
            fullWidth
            label="Confirm your password"
            type="password"
            variant="outlined"
            autoComplete="new-password"
            onChange={(event) =>
              setFormData({ ...formData, confPassword: event.target.value })
            }
          />

          <FormControlLabel control={<Checkbox />} label="Remember me" />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, bgcolor: "blue" }}
          >
            SIGN UP
          </Button>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
            <Link href="#" variant="body2">
              Sign In
            </Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUp;

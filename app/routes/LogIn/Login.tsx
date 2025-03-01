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

import { url, type IErrors } from "../SignUp/SignUp";
import { LockOutlined } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface IFormData {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<IFormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({} as IErrors);
  const [valid, setValid] = useState(true);

  const onSignIn = (event: React.FormEvent) => {
    const { email, password } = formData;
    event.preventDefault();
    let isValid = true;
    let validationErrors: IErrors = {};

    if (email === "" || email === null) {
      isValid = false;
      validationErrors.email = "email required";
    } else if (!/\S+@\S+\.\S+/.test(email as string)) {
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

    axios
      .get(url as string)
      .then((result) => {
        result.data.map((user: { email: string; password: string }) => {
          if (user.email === formData.email) {
            if (user.password === formData.password) {
              alert("login successfully");
              navigate("/about");
            } else {
              isValid = false;
              validationErrors.password = "Wrong Password";
            }
          } else if (formData.email !== "") {
            isValid = false;
            validationErrors.email = "Wrong Email";
          }
        });
        setErrors(validationErrors);
        setValid(isValid);
      })
      .catch((err) => console.log(err));
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
        position: "relative",
        top: "50%",
      }}
    >
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, textAlign: "center" }}>
        <Avatar sx={{ m: "auto", bgcolor: "purple" }}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5" sx={{ mt: 1, mb: 2 }}>
          Sign In
        </Typography>

        <Box component="form" onSubmit={onSignIn} sx={{ mt: 1 }}>
          {valid ? <></> : <span>{errors.email}</span>}
          <TextField
            margin="normal"
            fullWidth
            label="Enter user email"
            variant="outlined"
            autoComplete="useremail"
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
            autoComplete="current-password"
            onChange={(event) =>
              setFormData({ ...formData, password: event.target.value })
            }
          />

          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
            sx={{ display: "flex", justifyContent: "start" }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, bgcolor: "blue" }}
          >
            SIGN IN
          </Button>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
            <Link href="/registration" variant="body2">
              Sign Up
            </Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;

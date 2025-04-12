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

import type { AppDispatch } from "~/store";
import type { IErrors } from "~/user/api/types";
import { LockOutlined } from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import { registration } from "~/user/store/userAuthSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const url = import.meta.env.VITE_DB_URL;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SignUp = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const handleDrawerClose = () => {
    handleClose();
    navigate(`/`);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confPassword: "",
  });

  const [errors, setErrors] = useState({} as IErrors);
  const [valid, setValid] = useState(true);

  const onSignUpButton = (event: React.FormEvent) => {
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
      dispatch(registration({ firstName, lastName, email, password }));
      navigate("/application");
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleDrawerClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Avatar sx={{ m: "auto", bgcolor: "purple" }}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5" sx={{ mt: 1, mb: 2 }}>
          Sign Up
        </Typography>

        <Box component="form" onSubmit={onSignUpButton} sx={{ mt: 1 }}>
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
            <Link href="/login" variant="body2">
              Sign In
            </Link>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default SignUp;

import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import type { IErrors, IFormData, ILoginData } from "~/user/api/types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import type { AppDispatch } from "~/store";
import { LockOutlined } from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import { login } from "~/user/store/userAuthSlice";
import { useNavigate } from "react-router-dom";
import { userRoleSelector } from "~/user/store/selectors/auth";

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

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const role = useSelector(userRoleSelector);

  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const handleDrawerClose = () => {
    handleClose();
    navigate(`/`);
  };

  const [formData, setFormData] = useState<IFormData>({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (role) {
      navigate(`/${role}`);
    }
  }, [role]);

  const [errors, setErrors] = useState<IErrors>({});
  const [valid, setValid] = useState(true);

  const onSignIn = async (event: React.FormEvent) => {
    event.preventDefault();

    let isValid = true;
    let validationErrors: IErrors = {};

    if (formData.email === "" || formData.email === null) {
      isValid = false;
      validationErrors.email = "email required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email as string)) {
      isValid = false;
      validationErrors.email = "email is not valid";
    }

    if (formData.password === "" || formData.password === null) {
      isValid = false;
      validationErrors.password = "password required";
    } else if (formData.password.length < 6) {
      isValid = false;
      validationErrors.password = "password length at least 6 char";
    }

    if (!isValid) {
      setErrors(validationErrors);
      setValid(false);
      return;
    }

    try {
      const loginData: ILoginData = {
        email: formData.email,
        password: formData.password,
      };

      await dispatch(login(loginData)).unwrap();
    } catch (error) {
      setValid(false);
      setErrors({
        email: "Invalid email",
        password: "Invalid password",
      });
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
          Sign In
        </Typography>

        <Box component="form" onSubmit={onSignIn} sx={{ mt: 1 }}>
          {!valid && errors.email && (
            <Typography color="error" variant="caption" display="block">
              {errors.email}
            </Typography>
          )}
          <TextField
            margin="normal"
            fullWidth
            label="Enter user email"
            variant="outlined"
            autoComplete="useremail"
            value={formData.email}
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
          />
          {!valid && errors.password && (
            <Typography color="error" variant="caption" display="block">
              {errors.password}
            </Typography>
          )}
          <TextField
            margin="normal"
            fullWidth
            label="Enter password"
            type="password"
            variant="outlined"
            autoComplete="current-password"
            value={formData.password}
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
      </Box>
    </Modal>
  );
};

export default Login;

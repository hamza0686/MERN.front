import {
  Box,
  FormHelperText,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ecommerceOutlookAnimation } from "../../../assets";
import { useDispatch, useSelector } from "react-redux";
import { LoadingButton } from "@mui/lab";
import {
  selectLoggedInUser,
  loginAsync,
  selectLoginStatus,
  selectLoginError,
  clearLoginError,
  resetLoginStatus,
} from "../AuthSlice";
import { toast } from "react-toastify";
import { MotionConfig, motion } from "framer-motion";

export const Login = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectLoginStatus);
  const error = useSelector(selectLoginError);
  const loggedInUser = useSelector(selectLoggedInUser);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const theme = useTheme();
  const is900 = useMediaQuery(theme.breakpoints.down(900));
  const is480 = useMediaQuery(theme.breakpoints.down(480));

  // Handles user redirection
  useEffect(() => {
    if (loggedInUser?.isVerified) {
      navigate("/");
    } else if (loggedInUser && !loggedInUser.isVerified) {
      navigate("/verify-otp");
    }
  }, [loggedInUser, navigate]);

  // Handles login error and displays toast
  useEffect(() => {
    if (error) {
      toast.error(error.message || "An error occurred");
    }
  }, [error]);

  // Handles login status and dispatches reset actions in cleanup
  useEffect(() => {
    if (status === "fullfilled" && loggedInUser?.isVerified) {
      toast.success("Login successful");
      reset();
    }
    return () => {
      dispatch(clearLoginError());
      dispatch(resetLoginStatus());
    };
  }, [status, loggedInUser, dispatch, reset]);

  const handleLogin = (data) => {
    const cred = { ...data };
    delete cred.confirmPassword;
    dispatch(loginAsync(cred));
  };

  return (
    <Stack
      width="100vw"
      height="100vh"
      flexDirection="row"
      sx={{ overflowY: "hidden" }}
    >
      {!is900 && (
        <Stack bgcolor="black" flex={1} justifyContent="center">
          <Lottie animationData={ecommerceOutlookAnimation} />
        </Stack>
      )}

      <Stack flex={1} justifyContent="center" alignItems="center">
        <Stack flexDirection="row" justifyContent="center" alignItems="center">
          <Stack rowGap=".4rem">
            <Typography
              variant="h2"
              sx={{ wordBreak: "break-word" }}
              fontWeight={600}
            >
              Mern Shop
            </Typography>
            <Typography alignSelf="flex-end" color="GrayText" variant="body2">
              - Shop Anything
            </Typography>
          </Stack>
        </Stack>

        <Stack
          mt={4}
          spacing={2}
          width={is480 ? "95vw" : "28rem"}
          component="form"
          noValidate
          onSubmit={handleSubmit(handleLogin)}
        >
          <MotionInput>
            <TextField
              fullWidth
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                  message: "Enter a valid email",
                },
              })}
              placeholder="Email"
            />
            {errors.email && (
              <FormHelperText sx={{ mt: 1 }} error>
                {errors.email.message}
              </FormHelperText>
            )}
          </MotionInput>

          <MotionInput>
            <TextField
              type="password"
              fullWidth
              {...register("password", { required: "Password is required" })}
              placeholder="Password"
            />
            {errors.password && (
              <FormHelperText sx={{ mt: 1 }} error>
                {errors.password.message}
              </FormHelperText>
            )}
          </MotionInput>

          <MotionButton>
            <LoadingButton
              fullWidth
              sx={{ height: "2.5rem" }}
              loading={status === "pending"}
              type="submit"
              variant="contained"
            >
              Login
            </LoadingButton>
          </MotionButton>

          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap-reverse"
          >
            <MotionLink to="/forgot-password">Forgot password</MotionLink>
            <MotionLink to="/signup">
              Don't have an account?{" "}
              <span style={{ color: theme.palette.primary.dark }}>
                Register
              </span>
            </MotionLink>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

// Reusable Motion Components
const MotionInput = ({ children }) => (
  <motion.div whileHover={{ y: -5 }}>{children}</motion.div>
);

const MotionButton = ({ children }) => (
  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 1 }}>
    {children}
  </motion.div>
);

const MotionLink = ({ to, children }) => (
  <motion.div whileHover={{ x: 2 }} whileTap={{ scale: 1.05 }}>
    <Typography
      sx={{ textDecoration: "none", color: "text.primary" }}
      component={Link}
      to={to}
    >
      {children}
    </Typography>
  </motion.div>
);

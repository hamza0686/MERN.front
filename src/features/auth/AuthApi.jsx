import axios from "axios"; 


const axiosi = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "http://localhost:7666/", // Use environment variable or fallback to localhost
    withCredentials: true, 
});

// Signup API
export const signup = async (cred) => {
    try {
        const res = await axiosi.post("auth/signup", cred);
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

// Login API
export const login = async (cred) => {
    try {
        const res = await axiosi.post("auth/login", cred);
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

// Verify OTP API
export const verifyOtp = async (cred) => {
    try {
        const res = await axiosi.post("auth/verify-otp", cred);
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

// Resend OTP API
export const resendOtp = async (cred) => {
    try {
        const res = await axiosi.post("auth/resend-otp", cred);
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

// Forgot Password API
export const forgotPassword = async (cred) => {
    try {
        const res = await axiosi.post("auth/forgot-password", cred);
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

// Reset Password API
export const resetPassword = async (cred) => {
    try {
        const res = await axiosi.post("auth/reset-password", cred);
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

// Check Authentication API
export const checkAuth = async () => {
    try {
        const res = await axiosi.get("auth/check-auth");
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

// Logout API
export const logout = async () => {
    try {
        const res = await axiosi.get("auth/logout");
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};
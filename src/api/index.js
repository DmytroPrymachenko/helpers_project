import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api/auth",
  withCredentials: true, // 💡 дозволяє куки
});

// ▶︎ POST /register
export const register = (data) => API.post("/register", data);

// ▶︎ POST /login
export const login = (data) => API.post("/login", data);

// ▶︎ POST /logout
export const logout = () => API.post("/logout");

// ▶︎ GET /me
export const getMe = () => API.get("/me");

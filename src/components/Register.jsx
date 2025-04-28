import React, { useState } from "react";
import { register } from "../api";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register(form);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Помилка");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "2rem" }}>
      <h2>Реєстрація</h2>
      <input name="name" placeholder="Імʼя" onChange={handleChange} />
      <br />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <br />
      <input
        name="password"
        type="password"
        placeholder="Пароль"
        onChange={handleChange}
      />
      <br />
      <button type="submit">Зареєструватись</button>
      <p>{message}</p>
    </form>
  );
};

export default Register;

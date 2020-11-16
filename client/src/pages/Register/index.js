import React, { useState } from "react";
import api from "../../services/api";

export default function Register({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log("result of the submit", email, password, firstName, lastName);

    const response = await api.post("/user/register", {
      email,
      password,
      firstName,
      lastName,
    });
    const userId = response.data._id || false;

    if (userId) {
      localStorage.setItem("user", userId);
      history.push("/dashboard");
    } else {
      const { message } = response.data;
      console.log(message);
    }
  };

  return (
    <section className="full-box">
      <h2>Register:</h2>
      <p>
        Please <strong>Register</strong> for a new account
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Your first name"
          onChange={(evt) => setFirstName(evt.target.value)}
        />

        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Your last name"
          onChange={(evt) => setLastName(evt.target.value)}
        />

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
          onChange={(evt) => setEmail(evt.target.value)}
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Your password"
          onChange={(evt) => setPassword(evt.target.value)}
        />

        <button>Submit</button>
      </form>
    </section>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Login.module.css"; // Import modular CSS

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      navigate("/users"); // Redirect to Users page on success
    } catch (err) {
      setError("Invalid credentials! Please try again.");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h1>User management site assignment <br/> using React + Vite</h1>


      <form onSubmit={handleLogin} className={styles.loginForm}>
        <h2>Login</h2>
        {error && <p className={styles.error}>{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}
          required
        />

        <button type="submit" className={styles.loginButton}>Login</button>
      </form>
      <h3>By: Surabhi Mhamane</h3>
    </div>
  );
};

export default Login;

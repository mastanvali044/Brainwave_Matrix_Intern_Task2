import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve users from local storage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Find the user with matching email and password
    const user = existingUsers.find((user) => user.email === email && user.password === password);

    if (user) {
      navigate("/home"); // Redirect to ProductList.jsx
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  // Internal CSS
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f4f4f4",
      padding: "20px",
    },
    form: {
      background: "white",
      padding: "30px",
      borderRadius: "8px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px",
      textAlign: "center",
    },
    inputGroup: {
      marginBottom: "15px",
      textAlign: "left",
    },
    label: {
      display: "block",
      fontSize: "14px",
      color: "#555",
      marginBottom: "5px",
    },
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      fontSize: "16px",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#ff9800",
      color: "white",
      border: "none",
      borderRadius: "5px",
      fontSize: "18px",
      cursor: "pointer",
      transition: "background 0.3s",
    },
    buttonHover: {
      backgroundColor: "#e68900",
    },
    errorMessage: {
      color: "red",
      fontSize: "14px",
      marginBottom: "10px",
    },
    registerLink: {
      marginTop: "15px",
      fontSize: "14px",
    },
    link: {
      color: "#ff9800",
      textDecoration: "none",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p style={styles.errorMessage}>{error}</p>}
        
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.background = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.background = styles.button.backgroundColor)}
        >
          Login
        </button>
        
        <p style={styles.registerLink}>
          Don't have an account? <a href="/signup" style={styles.link}>Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;

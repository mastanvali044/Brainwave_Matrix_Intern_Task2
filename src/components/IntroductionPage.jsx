import React from "react";
import { useNavigate } from "react-router-dom";

const Introduction = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: "url('/images/background.jpg')", // Set your image path
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      color: "#ffffff", // White text for contrast
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "20px",
      width: "100%",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay for readability
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },
    title: {
      fontSize: "3rem",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    subtitle: {
      fontSize: "1.5rem",
      fontStyle: "italic",
      marginBottom: "30px",
    },
    buttonGroup: {
      display: "flex",
      gap: "20px",
      marginTop: "20px",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    button: {
      padding: "12px 24px",
      fontSize: "1rem",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      backgroundColor: "#f39c12",
      color: "#ffffff",
      transition: "all 0.3s ease-in-out",
    },
    buttonHover: {
      backgroundColor: "#d35400",
    },
    infoText: {
      marginTop: "40px",
      fontSize: "1.2rem",
      maxWidth: "90%",
      wordWrap: "break-word",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>ShopEase</h1>
        <p style={styles.subtitle}>An Eco-Friendly E-commerce Website</p>

        <div style={styles.infoText}>
          <p>Do you have an account? Or create a new one.</p>
          <div style={styles.buttonGroup}>
            <button
              style={styles.button}
              onClick={() => navigate("/login")}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#d35400")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#f39c12")}
            >
              Login
            </button>
            <button
              style={styles.button}
              onClick={() => navigate("/signup")}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#d35400")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#f39c12")}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

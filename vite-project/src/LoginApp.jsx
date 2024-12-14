import React, { useState } from "react";

function LoginApp() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleCloseForm = () => {
    setShowLoginForm(false);
    setErrorMessage(""); // Clear error message when form is closed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Both fields are required!");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    setErrorMessage("");
    console.log("Login successful:", { email, password });
    alert("Login Successful!");
    handleCloseForm(); // Close form after submission
  };

  return (
    <div>
      {/* Login Button */}
      <button onClick={handleLoginClick} style={buttonStyle}>
        Login
      </button>

      {/* Login Form (conditionally rendered) */}
      {showLoginForm && (
        <div style={formContainerStyle}>
          <div style={formStyle}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div style={formGroupStyle}>
                <label htmlFor="email" style={labelStyle}>Email:</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div style={formGroupStyle}>
                <label htmlFor="password" style={labelStyle}>Password:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={inputStyle}
                />
              </div>
              {errorMessage && <p style={errorMessageStyle}>{errorMessage}</p>}
              <button type="submit" style={buttonStyle}>
                Submit
              </button>
              <button
                type="button"
                onClick={handleCloseForm}
                style={{ ...buttonStyle, backgroundColor: "red" }}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// Styles
const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007BFF",
  color: "#FFF",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  transition: "background-color 0.3s ease",
};

const formContainerStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  padding: "30px",
  zIndex: 1000,
  backdropFilter: "blur(5px)", // Adds a blur effect to the background
};

const formStyle = {
  backgroundColor: "#FFF",
  padding: "30px",
  borderRadius: "8px",
  width: "350px",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Adds shadow for a clean look
};

const formGroupStyle = {
  marginBottom: "20px",
};

const inputStyle = {
  width: "100%",
  padding: "12px 15px",
  marginTop: "5px",
  border: "1px solid #ddd",
  borderRadius: "4px",
  fontSize: "14px",
  transition: "border-color 0.3s ease",
};

const labelStyle = {
  fontWeight: "bold",
  marginBottom: "5px",
  display: "block",
  color: "#333",
};

const errorMessageStyle = {
  color: "red",
  fontSize: "14px",
  marginTop: "10px",
  fontWeight: "bold",
};

export default LoginApp;

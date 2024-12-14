import React, { useState } from "react";

function JoinUsApp() {
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleJoinClick = () => {
    setShowJoinForm(true);
  };

  const handleCloseForm = () => {
    setShowJoinForm(false);
    setErrorMessage(""); // Clear error message when form is closed
    setMessage(""); // Clear success message when form is closed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      setErrorMessage("Both fields are required!");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    setErrorMessage("");
    setMessage("Thanks for joining our team!"); // Show success message
    console.log("Join request submitted:", { name, email });
    setTimeout(() => {
      handleCloseForm(); // Close form after showing success message
    }, 2000);
  };

  return (
    <div>
      {/* Join Us Button */}
      <button onClick={handleJoinClick} style={buttonStyle}>
        Join Us
      </button>

      {/* Join Us Form (conditionally rendered) */}
      {showJoinForm && (
        <div style={formContainerStyle}>
          <div style={formStyle}>
            <h2>Join Us</h2>
            <form onSubmit={handleSubmit}>
              <div style={formGroupStyle}>
                <label htmlFor="name" style={labelStyle}>
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div style={formGroupStyle}>
                <label htmlFor="email" style={labelStyle}>
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle}
                />
              </div>
              {errorMessage && <p style={errorMessageStyle}>{errorMessage}</p>}
              {message && <p style={successMessageStyle}>{message}</p>}
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
  backgroundColor: "#28a745",
  color: "white",
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
  backdropFilter: "blur(5px)",
};

const formStyle = {
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "8px",
  width: "350px",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
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

const successMessageStyle = {
  color: "green",
  fontSize: "14px",
  marginTop: "10px",
  fontWeight: "bold",
};

export default JoinUsApp;

import React, { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "./jarvis.css";

function Jarvis() {
  const [response, setResponse] = useState("Click here to speak");
  const { transcript, resetTranscript } = useSpeechRecognition();

  // On load, initialize JARVIS
  useEffect(() => {
    speak("Initializing JARVIS...");
    wishMe();
  }, []);

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  };

  const wishMe = () => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) {
      speak("Good Morning Boss...");
    } else if (hour >= 12 && hour < 17) {
      speak("Good Afternoon Master...");
    } else {
      speak("Good Evening Sir...");
    }
  };

  const handleCommand = (message) => {
    if (message.includes("hey") || message.includes("hello")) {
      speak("Hello Sir, How May I Help You?");
    } else if (message.includes("open google")) {
      window.open("https://google.com", "_blank");
      speak("Opening Google...");
    } else if (message.includes("open youtube")) {
      window.open("https://youtube.com", "_blank");
      speak("Opening YouTube...");
    } else if (message.includes("time")) {
      const time = new Date().toLocaleString(undefined, {
        hour: "numeric",
        minute: "numeric",
      });
      speak(`The current time is ${time}`);
    } else {
      speak("I'm sorry, I didn't understand that command.");
    }
  };

  const startListening = () => {
    resetTranscript(); // Clear previous transcript
    setResponse("Listening...");
    SpeechRecognition.startListening();
  };

  const stopListening = () => {
    setResponse("Processing...");
    SpeechRecognition.stopListening();
    handleCommand(transcript.toLowerCase());
  };

  return (
    <div className="app">
      <section className="main">
        <div className="image-container">
          <div className="image">
            <img src={`${process.env.PUBLIC_URL}/giphy.gif`} alt="JARVIS" />
          </div>
          <h1>J A R V I S</h1>
          <p>I'm a Virtual Assistant JARVIS, How may I help you?</p>
        </div>
        <div className="input">
          <button
            className="talk"
            onMouseDown={startListening}
            onMouseUp={stopListening}
          >
            <i className="fas fa-microphone-alt"></i>
          </button>
          <h1 className="content">{response}</h1>
        </div>
      </section>
    </div>
  );
}

export default Jarvis;
"use client";

import Image from "next/image";
import { useState } from "react";
import "./login.css";

export default function Home() {
  const [emailInput, setEmail] = useState("");
  const [passwordInput, setPassword] = useState("");

  // const handleEmail = (e: React.SubmitEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   alert(emailInput)
  // };
  // const handlePassword = (e: React.SubmitEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   alert(passwordInput)
  // };

  //Combined handleEmail and handlePassword into handleSubmit
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Email: ${emailInput} / Password: ${passwordInput}`);
  };

  //placeholder for Google login functionality
  const handleGoogleLogin = () => {
    alert("Google login button clicked!");
  };

  return (
    <div className="login">
      <div className="title">PomoTrack</div>
      <div className="login-card">
        <div className="login-form">
          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="text"
              placeholder="email..."
              className="login-input"
              value={emailInput}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="password..."
              className="login-input"
              value={passwordInput}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Log in</button>
          </form>

          <div className="divider"> OR</div>

          {/* handleGoogleLogin is not set up yet */}
          <button type="button" onClick={handleGoogleLogin} className="google-login-btn">
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

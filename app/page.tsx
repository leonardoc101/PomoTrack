"use client";

import Image from "next/image";
import { useState } from "react";
import "./login.css"

export default function Home() {
  const [emailInput, setEmail] = useState("");
  const [passwordInput, setPassword] = useState("");

  const handleEmail = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(emailInput)
  };

  const handlePassword = (e: React.SubmitEvent<HTMLFormElement>) => {
  e.preventDefault()
  alert(passwordInput)
  };

  return (
    <div className="login">
      <div className = "title">
        PomoTrack
      </div>
      <div className="login-card">
        <div className = "login-form">
          <form onSubmit={handleEmail} className = "login-form">
          <input
          type = "text"
          placeholder = "email..."
          className = "login-input"
          value = {emailInput}
          onChange = {(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
          </form>
          <form onSubmit={handlePassword} className = "login-form">
            <input
            type = "text"
            placeholder = "password..."
            className = "login-input"
            value = {passwordInput}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
          </form>
          <button type = "submit">Log in</button>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import CustomButton from "../html/Button";

export function LoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <CustomButton onClick={handleLogin}>Login</CustomButton>
      <CustomButton onClick={handleLogout}>Logout</CustomButton>
      <div>user is {isLoggedIn ? "logged in" : "log out"}</div>
    </div>
  );
}


import React, { useState } from "react";

export function LoggedIn() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn(true);
  };
  const handleLogout = () => {
    setLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>user is {isLoggedIn ? "logged in" : "log out"}</div>
    </div>
  );
}


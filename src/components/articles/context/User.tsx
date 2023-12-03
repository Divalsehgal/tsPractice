import  { useContext } from "react";
import { UserContext } from "./UserContext";

function User() {
  const value = useContext(UserContext);
  const handleLogin = () => {
    if(value){
      value.setUser({
        name: "Dival Sehgal",
        email: "upchh@example.com",
      });
    }

  };
  const handleLogout = () => {
    value?.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>user name is{value?.user?.name} </div>
      <div>user email is{value?.user?.email} </div>
    </div>
  );
}

export default User;

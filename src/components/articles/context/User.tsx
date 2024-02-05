import { useContext } from "react";
import { UserContext } from "./UserContext";
import CustomButton from "../html/Button";

function User() {
  const value = useContext(UserContext);
  const handleLogin = () => {
    if (value) {
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
      <h5
        style={{
          textAlign: "left",
        }}
      >
        Note:this is for demonstrate how to take in custom button and pass
        context values
      </h5>

      <CustomButton onClick={handleLogin}>Login</CustomButton>
      <CustomButton onClick={handleLogout}>Logout</CustomButton>
      <div>user name is{value?.user?.name} </div>
      <div>user email is{value?.user?.email} </div>
    </div>
  );
}

export default User;

import React, { useState } from 'react'
import CustomButton from '../html/Button';

type AuthUserProps={
    name:string,
    email:string
}
function User() {
    const [user, setUser] = useState<null|AuthUserProps>(null);
    // const [user, setUser] = useState<AuthUserProps>({} as AuthUserProps);  // type assertion : 
                                                                              //means user wont be null will be always of type AuthUserProps
    const handleLogin = () => {
      setUser({
        name: 'Dival Sehgal',
        email: 'upchh@example.com'
      });
    };
    const handleLogout = () => {   
    setUser(null);
    };
    return (
      <div>
        <CustomButton onClick={handleLogin}>Login</CustomButton>
        <CustomButton onClick={handleLogout}>Logout</CustomButton>
        <div>user name is{user?.name} </div>
        <div>user email is{user?.email} </div>
      </div>)
}

export default User

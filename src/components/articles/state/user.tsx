import React, { useState } from 'react'

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
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>user name is{user?.name} </div>
        <div>user email is{user?.email} </div>
      </div>)
}

export default User

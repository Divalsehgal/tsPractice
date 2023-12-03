import React, { useState ,createContext} from "react";

type AuthUserProps = {
  name: string;
  email: string;
};

type themeProviderProps = {
  children: React.ReactNode;
};

type UserContextType = {
  user: AuthUserProps | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUserProps | null>>;
};
export const UserContext = createContext<UserContextType|null>(null);

export const UserContextprovider = (props: themeProviderProps) => {
  const [user, setUser] = useState<AuthUserProps | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props?.children}
    </UserContext.Provider>
  );
};

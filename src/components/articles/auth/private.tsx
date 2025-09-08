
import { profileProps } from './profile'
import {Login} from './login'

export enum AuthStatus {
  LoggedIn = "LoggedIn",
  LoggedOut = "LoggedOut",
}

type privateProps = {
  authStatus: AuthStatus;
  component: React.ComponentType<profileProps>;
};
export const Private = ({ authStatus, component: Component }: privateProps) => {
  switch (authStatus) {
    case AuthStatus.LoggedIn:
      return <Component name="settingsPage" />;
    case AuthStatus.LoggedOut:
      return <Login />;
    default:
      return <div>Loading...</div>;
  }

}
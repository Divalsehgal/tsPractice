import { Profile } from "./profile";
import { AuthStatus, Private } from "./private";

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type User = Admin | Employee;

const isAdmin = (user: User): user is Admin => {
  return "privileges" in user;
};

function handleUser(user: User) {
  if (isAdmin(user)) {
    // Inside this block, `user` is now typed as Admin
    console.log(`${user.name} is an Admin with privileges:`, user.privileges);
  } else {
    // Here, `user` is inferred as Employee
    console.log(`${user.name} is an Employee, started on:`, user.startDate);
  }
}
function index() {
  const admin: Admin = { name: "Alice", privileges: ["server-access"] };
  const employee: Employee = {
    name: "Bob",
    startDate: new Date("2023-01-01"),
  };

  handleUser(admin);
  handleUser(employee);
  return (
    <div>
      <Private authStatus={AuthStatus.LoggedIn} component={Profile} />
    </div>
  );
}

export default index;

import React from "react";

type Status = "active" | "inactive" | "pending";

type UserProps = {
  name: string;
  status: Status;
};

const UnionExample: React.FC = () => {
  const user: UserProps = {
    name: "Charlie",
    status: "active", // can be 'active', 'inactive', or 'pending'
  };

  return (
    <div>
      <h2>Union Type Example</h2>
      <p>Using Union Types for limiting the possible values of a prop.</p>
      <p>Name: {user.name}</p>
      <p>Status: {user.status}</p>

      <h3>Code Example:</h3>
      <pre>
        {`type Status = 'active' | 'inactive' | 'pending';

type UserProps = {
  name: string;
  status: Status;
};

const user: UserProps = {
  name: 'Charlie',
  status: 'active'
};`}
      </pre>
    </div>
  );
};

export default UnionExample;

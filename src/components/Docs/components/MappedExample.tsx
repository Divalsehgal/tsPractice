import React from "react";

type User = {
  name: string;
  age: number;
  email: string;
};

type OptionalUser = {
  [K in keyof User]?: User[K];
};

const MappedExample: React.FC = () => {
  const user: OptionalUser = {
    name: "Eve",
  };

  return (
    <div>
      <h2>Mapped Types Example</h2>
      <p>Using Mapped Types to transform properties into optional ones.</p>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>

      <h3>Code Example:</h3>
      <pre>{`
type User = {
  name: string;
  age: number;
  email: string;
};

type OptionalUser = {
  [K in keyof User]?: User[K];
};

const user: OptionalUser = {
  name: 'Eve'
};
      `}</pre>
    </div>
  );
};

export default MappedExample;

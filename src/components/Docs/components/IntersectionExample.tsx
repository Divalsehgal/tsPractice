import React from "react";

type Name = {
  name: string;
};

type Age = {
  age: number;
};

type UserProps = Name & Age;

const IntersectionExample: React.FC = () => {
  const user: UserProps = {
    name: "David",
    age: 28,
  };

  return (
    <div>
      <h2>Intersection Type Example</h2>
      <p>Using Intersection Types to combine multiple types into one.</p>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>

      <h3>Code Example:</h3>
      <pre>{`
type Name = {
  name: string;
};

type Age = {
  age: number;
};

type UserProps = Name & Age;

const user: UserProps = {
  name: 'David',
  age: 28
};
      `}</pre>
    </div>
  );
};

export default IntersectionExample;

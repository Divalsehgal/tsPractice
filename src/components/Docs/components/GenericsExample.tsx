import React from "react";

function Identity<T>(value: T): T {
  return value;
}

const GenericsExample: React.FC = () => {
  const value = Identity<string>("Hello TypeScript");

  return (
    <div>
      <h2>Generics Example</h2>
      <p>
        Using Generics to create reusable components that work with different
        types.
      </p>
      <p>Value: {value}</p>

      <h3>Code Example:</h3>
      <pre>{`
function Identity<T>(value: T): T {
  return value;
}

const value = Identity<string>('Hello TypeScript');
      `}</pre>
    </div>
  );
};

export default GenericsExample;

import React from 'react'
import List from './list';

function index() {
  return (
    <div>
      <List
        items={["dival", "minal", "luffy"]}
        onClick={(item) => console.log(item)}
      />

      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />

      <List
        items={[
          {
            first: "Dival",
            last: "Sehgal",
          },
          {
            first: "luffy",
            last: "D",
          },
          {
            first: "minal",
            last: "Sehgal",
          },
        ]}
        onClick={(item) => console.log(item)}
      />

      <List
        items={[
          {
            id: 1,
            first: "Bruce",
            last: "Wayne",
          },
          {
            id: 2,
            first: "Clark",
            last: "Kent",
          },
          {
            id: 3,
            first: "Princess",
            last: "Diana",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default index

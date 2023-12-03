import React from "react";

import GridBox from "./gridBox";
import Greet from "../articles/greet/index";
import Person from "../articles/person/index";
import Heading from "../articles/heading/index";
import Input from "../articles/input/index";
import List from "../articles/list/index";
import State from "../articles/state/index";
import TemplateLiterals from "../articles/templateLiterals/index";
import Context from "../articles/context/index";

import Text from "../articles/polyphormic/index";
import RandomNumber from "../articles/restriction/index";
import Status from "../articles/status/index";
import Generics from "../articles/generics/index";

;
const MainContent = () => {
  const data = [
    {
      id: 1,
      title: "Item 1",
      description: "Description for item 1",
      component: <Greet />,
    },
    {
      id: 2,
      title: "Item 2",
      description: "Description for item 2",
      component: <Person />,
    },
    {
      id: 3,
      title: "Item 3",
      description: "Description for item 3",
      component: <Status />,
    },
    {
      id: 4,
      title: "Item 4",
      description: "Description for item 4",
      component: <State />,
    },
    {
      id: 5,
      title: "Item 5",
      description: "Description for item 5",
      component: <Input />,
    },
    {
      id: 6,
      title: "Item 6",
      description: "Description for item 6",
      component: <Heading />,
    },
    {
      id: 7,
      title: "Item 3",
      description: "Description for item 3",
      component: <List />,
    },
    {
      id: 7,
      title: "Item 3",
      description: "Description for item 3",
      component: <Generics />,
    },
    {
      id: 8,
      title: "Item 3",
      description: "Description for item 3",
      component: <TemplateLiterals />,
    },
    {
      id: 10,
      title: "Item 3",
      description: "Description for item 3",
      component: <Context />,
    },
    {
      id: 3,
      title: "Item 3",
      description: "Description for item 3",
      component: <Text />,
    },
    {
      id: 3,
      title: "Item 3",
      description: "Description for item 3",
      component: <RandomNumber />,
    },
  ];

  return (
    <>
      {data.map((item) => (
        <GridBox key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          {item.component}
        </GridBox>
      ))}
    </>
  );
};

export default MainContent;

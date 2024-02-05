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

const MainContent = () => {
  const data = [
    {
      id: 1,
      title: "1",
      component: <Greet />,
      description: "Basic string, number, boolean props",
    },
    {
      id: 2,
      title: "2",
      component: <Person />,
      description: "Basic Object containing string props",
    },
    {
      id: 3,
      title: "3",
      description: "Union of string",
      component: <Status />,
    },
    {
      id: 4,
      title: "4",
      description: "Discriminated union and useState ",
      component: <State />,
    },
    {
      id: 5,
      title: "5",
      description: "Basic input props",
      component: <Input />,
    },
    {
      id: 6,
      title: "6",
      description: "how to take in children type as string and component",
      component: <Heading />,
    },
    {
      id: 7,
      title: "7",
      description: "list items",
      component: <List />,
    },
    {
      id: 7,
      title: "8",
      description: "Generics",
      component: <Generics />,
    },
    {
      id: 8,
      title: "9",
      description: "TemplateLiterals",
      component: <TemplateLiterals />,
    },
    {
      id: 10,
      title: "10",
      description: "Context",
      component: <Context />,
    },
    {
      id: 11,
      title: "11",
      description: "proper text component",
      component: <Text />,
    },
    {
      id: 12,
      title: "12",
      description: "Description for item 3",
      component: <RandomNumber />,
    },
  ];

  return (
    <>
      {data.map((item) => (
        <GridBox key={item.id}>
          <div
            style={{
              textAlign: "left",
            }}
          >
            <h2>{item.title}</h2>
            <h5>{item.description}</h5>
          </div>
          <div style={{
            background:"white"
          }}>{item.component}</div>
        </GridBox>
      ))}
    </>
  );
};

export default MainContent;

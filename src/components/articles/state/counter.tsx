import  { useReducer } from "react";
import CustomButton from "../html/Button";
const initialState: initialStateProps = {
  count: 0,
};

type initialStateProps = {
  count: number;
};

// descriminated union

type actionProps = updateActionProps | resetActionProps;

type updateActionProps = {
  payload: number;
  type: "increment" | "decrement" | "reset"; // strict action types
};

type resetActionProps = {
  type: "reset"; // strict action types
};

const reducer = (state: initialStateProps, action: actionProps) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state?.count + action.payload,
      };
    case "decrement":
      if (state.count > 0) {
        return {
          ...state,
          count: state?.count - action.payload,
        };
      } else {
        return state;
      }
    case "reset":
      return initialState;
    default:
      return state;
  }
};
export function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state.count}</h1>
      <CustomButton onClick={() => dispatch({ type: "increment", payload: 1 })}>
        +
      </CustomButton>
      <CustomButton onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        -
      </CustomButton>
      <CustomButton onClick={() => dispatch({ type: "reset" })}>reset</CustomButton>
    </div>
  );
}


import { Component } from "react";
import CustomButton from "../html/Button";
type CounterProps={
    message: string
} 
type CounterState={ 
    count: number
}
 class Counter extends Component<CounterProps,CounterState> {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };
  render() {
    return <div>count :{this.state.count}
    {this.props.message}
    <CustomButton onClick={this.handleClick}>increment</CustomButton>
    </div>;
  }
}

export default Counter;

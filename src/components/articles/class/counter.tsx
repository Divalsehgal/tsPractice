import React, { Component } from "react";
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
    <button onClick={this.handleClick}>increment</button>
    </div>;
  }
}

export default Counter;

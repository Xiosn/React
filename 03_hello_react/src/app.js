import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      count:1
    }
  }
  render() {
    return (
      <h2>计数器：{this.state.count}</h2>
    )
  }
}
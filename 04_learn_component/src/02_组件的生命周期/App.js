import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    console.log('我是constructor方法');
    super(props);
  }

  render() {
    console.log('我是render方法');
    return (
      <div>
        我是App组件
      </div>
    )
  }

  componentDidMount() {
    console.log('我是componentDisMount挂载方法');
  }
}

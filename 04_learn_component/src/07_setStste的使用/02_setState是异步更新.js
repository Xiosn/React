import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      message:'Hello World'
    }
  }
  render() {
    return (
      <div>
        <h2>当前计数：{this.state.message}</h2>
        <button onClick={e=>{this.changeText()}}>改变文本</button>
      </div>
    )
  }

  componentDidUpdate() {  // 方式二 获取异步更新后的state
    console.log(this.state.message);
  }


  changeText() {
    // setState 是异步更新
      // this.setState({
      //   message:'你好啊，xiaohs'
      // })
      // console.log(this.state.message);  //Hello World


    // 方式一 获取异步更新后的state
    //setState(要更新的state， 更新后的回调函数) 回调函数类似于vue中nextTick
     this.setState({
        message:'你好啊，xiaohs'
      },()=>{
        console.log();
        console.log(this.state.message);
      })
  }
}

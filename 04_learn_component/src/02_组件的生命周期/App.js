import React, { Component } from 'react'


/**
 * 类组件生命周期方法调用顺序
 * 1  constructor()
 * 2  render()
 * 3  componentDidMount()
 * 4  componentDidUpdate()
 * 5  componentWillUnMount()  卸载/移除 组件时执行
 * 每次DOM重新渲染时 先调用render方法 再执行 componentDidUpdate()
 */

class Cpn extends Component {
  render() {
    return (
      <div>
        <h2>我是被移除的Cpn组件</h2>
      </div>
    )
  }

  componentWillUnmount() {
    console.log('我是Cpn子组件生命周期componentWillmount卸载方法')
  }

}


export default class App extends Component {
  constructor(props) {
    console.log('我是组件constructor方法');
    super(props);
    this.state={
      count:0,
      isShow:true
    }
  }

  render() {
    console.log('我是组件render方法');
    return (
      <div>
        我是App组件
        <h2>计数器：{this.state.count}</h2>
        <button onClick={e=>{this.addClick()}}>+</button>
        <hr/>
        <button onClick={e=>{this.removeClick()}}>转换</button>
        {this.state.isShow && <Cpn/>}
      </div>
    )
  }

  addClick() {
    this.setState({
      count:this.state.count+1
    })
  }
  removeClick() {
    this.setState({
      isShow:!this.state.isShow
    })
  }

  componentDidMount() {
    console.log('我是生命周期componentDidMount挂载方法');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {//有三个参数 prevProps, prevState, snapshot
    console.log('我是生命周期componentDidUpdate更新方法');
  }
}

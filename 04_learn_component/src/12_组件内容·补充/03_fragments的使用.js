import React,{Fragment, PureComponent} from 'react';
export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state={
      count:0,
      friends:[
        {name:'小洪',age:18},
        {name:'李华',age:19},
        {name:'小狼',age:20},
      ]
    }
  }
  /**
   * Fragment 类似于 小程序 的block 不进行页面渲染
   * 也可写成 短语法 <></> 效果与 Fragment 一样
   */
  render() {
    return(
      <>
        <h2>计数器：{this.state.count}</h2>
        <button onClick={e=>{this.increment()}}>增加</button>
        {this.state.friends.map(item=>{
          return (
            <Fragment key={item.name}>
              <span>{item.name}</span>
              <span>{item.age}</span>
            </Fragment>
          )
        })}
      </>
    )
  }
  increment() {
    this.setState({
      count:this.state.count + 1
    })
  }
}
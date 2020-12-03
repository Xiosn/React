import React, { PureComponent } from 'react';
import styled from 'styled-components'

/**
 * attrs({}) 本身是一个函数 传入一个对象 返回值也是一个函数
 * 在下面定义样式的时候 可以使用模板字符串 传入一个箭头函数 会自动将attrs中的值(一般是写死的) 通过props直接调用
 * 
 * 如何动态的设置属性值 例颜色？
 * 将color={this.state.color}设置为组件属性 会自动添加到props 供styled中的属性设置调用
 */
const HYInput = styled.input.attrs({
  placeholder:"ABCDE",
  bColor:"red"
})`
  background-color:lightblue;
  border-color:${props=>props.bColor};
  color:${props=>props.color};
`

/**
 * 特点:
 *  1.props穿透
 *  2.attrs的使用
 *  3.传入state作为props属性
 */

export default class Profile extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      color: "purple"
    }
  }

  render() {
    return (
      <div>
        <HYInput type="password" color={this.state.color}/>
        <input type='password'/>
        <h2>我是Profile的标题</h2>
        <ul>
          <li>设置列表1</li>
          <li>设置列表2</li>
          <li>设置列表3</li>
        </ul>
      </div>
    )
  }
}

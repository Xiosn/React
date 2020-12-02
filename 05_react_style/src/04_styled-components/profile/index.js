import React, { PureComponent } from 'react';

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
        <input type="password"/>
       
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

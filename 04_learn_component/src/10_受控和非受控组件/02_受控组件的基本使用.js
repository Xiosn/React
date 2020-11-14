import React, {PureComponent} from 'react';

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state={
      content:'哈哈哈'
    }
  }

  /**
   * 受控组件
   * 
   * 通过 onSubmit 属性来接管 from表单的默认事件 可以用来阻止默认行为
   * onChange 是获取表单的一个输入状态内容
   */
  render() {
    return(
      <div>
        <form onSubmit={e=>{this.handleSubmit(e)}}>
          <label>
            用户：<input type='text' 
            onChange={e=>{this.handleChange(e)}}
            value={this.state.content}/>
          </label>
          <input type='submit'/>
        </form>
      </div>
    )
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  handleChange(event) {
    this.setState({
      content:event.target.value
    })
  }
}
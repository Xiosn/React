import React, {PureComponent} from 'react';

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state={
      username:'',
      password:'',
      vaild:''
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
            name='username'
            onChange={e=>{this.handleChange(e)}}
            value={this.state.username}/>
          </label>
          <label>
            密码：<input type='text'
            name='password'
            onChange={e=>{this.handleChange(e)}}
            value={this.state.password}/>
          </label>
          <label>
            验证：<input type='text'
            name='vaild'
            onChange={e=>{this.handleChange(e)}}
            value={this.state.vaild}/>
          </label>
          <input type='submit'/>
        </form>
      </div>
    )
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  // handleUsernameChange(event) {
  //   this.setState({
  //     username:event.target.value
  //   })
  // }

  // handlePasswordChange(event) {
  //   this.setState({
  //     password:event.target.value
  //   })
  // }

  // handleValidChange(event) {
  //   this.setState({
  //     vaild:event.target.value
  //   })
  // }

  handleChange(event) {
    this.setState({
      // 计算属性名
      [event.target.name]:event.target.value
    })
  }
}
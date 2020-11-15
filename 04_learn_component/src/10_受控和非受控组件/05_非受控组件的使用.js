import React, {PureComponent,createRef} from 'react';

export default class App extends PureComponent {

  constructor(props) {
    super(props)
    this.usernameRef=createRef();
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
            用户：<input type='text' ref={this.usernameRef}/>
          </label>
          <input type='submit'/>
        </form>
      </div>
    )
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.usernameRef.current.value);
  }
}
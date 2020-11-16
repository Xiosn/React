import React, {PureComponent,createRef} from 'react';

export default class App extends PureComponent {

  constructor(props) {
    super(props)
    this.usernameRef=createRef();
  }
  /**
   * 非受控组件
   * 
   * 通过 onSubmit 属性来接管 from表单的默认事件 可以用来阻止默认行为
   *  再通过ref来获取DOM节点操作
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
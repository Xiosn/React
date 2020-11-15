import React, {PureComponent} from 'react';

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state={
      fruits:'banana'
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
          <select name='fruits' 
                  onChange={e=>{this.handleChange(e)}}
                  value={this.state.fruits}>
            <option value="apple">苹果</option>
            <option value="banana">香蕉</option>
            <option value="orange">橘子</option>
          </select>
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
      fruits:event.target.value
    })
  }
}
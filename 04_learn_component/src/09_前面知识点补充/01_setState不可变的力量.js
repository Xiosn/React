import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    // 引用类型
    this.state = {
      friends: [
        { id:1, name: "lilei", age: 20 },
        { id:2, name: "lily", age: 25 },
        { id:3, name: "lucy", age: 22 }
      ]
    }
  }

  // shouldComponentUpdate(newProps, newState) {
  //   if (newState.friends !== this.state.friends) {
  //     return true;
  //   }
  
  //   return false;
  // }

  render() {
    return (
      <div>
        <h2>好友列表:</h2>
        <ul>
          {
            this.state.friends.map((item, index) => {
              return (
                <li key={item.id}>
                  姓名: {item.name} 
                  年龄: {item.age}
                  <button onClick={e => this.incrementAge(index)}>age+1</button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={e => this.insertData()}>添加数据</button>
      </div>
    )
  }


  /**
   *  就是说当你继承了PureComponent 它会对无关的组件进行禁止执行render函数
   *  相当于 生命周期 shouldComponentUpdate() 的另一种写法
   *  当你继承了 PureComponent 时 不可直接操作数据源 界面数据无法更改 因为内部本质是通过判断 引用类型 在 堆内存 中的地址是否一样
   *  当你继承的 Component 时 可以更改 但不提倡！ 同时 非相关的子组件的 render函数 也将全部会执行 so 一般开发中 以 PureComponent 为主
   */

  insertData() {
    // 1.在开发中不要这样来做
    const newData = {name: "tom", age: 30}
    this.state.friends.push(newData);
    this.setState({
      friends: this.state.friends
    });

    // 2.推荐做法
    // const newFriends = [...this.state.friends];
    // newFriends.push({ name: "tom", age: 30 });
    // this.setState({
    //   friends: newFriends
    // })
  }

  incrementAge(index) {
    const newFriends = [...this.state.friends];
    newFriends[index].age += 1;
    this.setState({
      friends: newFriends
    })
  }
}

import React,{ Component } from "react";

// 类组件
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state= {
//       message:'你好啊,xiaohs'
//     }
//   }
  
//   render() {
//     return (
//       <div>
//         <h2>{this.state.message}</h2>
//       </div>
//     )
//   }
// }


/*
  函数式组件的特点
  1 没有this对象
  2 没有内部的状态
*/
export default function App() {
  return (
    <div>
      <h2>你好啊,xiosn</h2>
    </div>
  )
}
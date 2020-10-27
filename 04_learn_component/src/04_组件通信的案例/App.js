import React, { Component } from 'react';
import TabControl from './TabControl';

export default class App extends Component {
  render() {
    return (
      <div>
        <TabControl titles={['新款','流行','精选']}/>        
      </div>
    )
  }
}

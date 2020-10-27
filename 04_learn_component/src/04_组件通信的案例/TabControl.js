import { Component } from "react";
import PropTypes from 'prop-types';
export default class TabControl extends Component {
  render() {
    const {titles} = this.props;
    return (
      <div>
        {titles.map((item, index)=>{
          return <h2 key={index}>{item}</h2>
        })}
      </div>
    )
  }
}

TabControl.propTypes= {
  titles: PropTypes.array
}
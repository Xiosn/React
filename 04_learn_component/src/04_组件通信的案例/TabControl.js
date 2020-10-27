import { Component } from "react";
import PropTypes from 'prop-types';

export default class TabControl extends Component {
  constructor(props) {
    super(props)
    this.state={
      currentIndex:0
    }
  }
  render() {
    const {titles} = this.props;
    const {currentIndex}=this.state;
    return (
      <div className='TabControl'>
        {
          titles.map((item, index)=>{
            return (
              <div key={index}
               className={'tab_item ' + (index===currentIndex?'active':'')}
               onClick={()=>{this.tabClick(index)}}>
                {item}
              </div>
            )
          })
        }
      </div>
    )
  }

  tabClick(index) {
    console.log(index);
  }
}

TabControl.propTypes= {
  titles: PropTypes.array
}
import React, { PureComponent } from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  font-size:50px;
  color:red;
  .banner{
    background-color:blue;
    span{
      color:#fff;
      //当前span同时是active的时候
      &.active{
        color:red;
      }
      
      //支持鼠标移入移出
      &:hover{
        color:green;
      }

      //支持伪类伪元素
      &::after{
        content:'aaa'
      }
    }
    /* .active {
      color:red;
    } */
  }
`

const TitleWrapper = styled.h2`
  text-decoration:underline;
`
export default class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <TitleWrapper>我是home的标题</TitleWrapper>
        <div className='banner'>
          <span>轮播图1</span>
          <span className="active">轮播图2</span>
          <span>轮播图3</span>
          <span>轮播图4</span>
        </div>
      </HomeWrapper>
    )
  }
}

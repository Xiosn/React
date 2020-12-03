import styled from 'styled-components';
export const HomeWrapper = styled.div`
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

export const TitleWrapper = styled.h2`
  text-decoration:underline;
`
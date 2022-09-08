import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80%;
  overflow: hidden;
  position: relative;  
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  align-items: center;
  box-shadow: 0px 10px 10px rgba(0,0,0,0.3);

  & h3{
    position: relative;
    z-index: 1;
    color: ${props => props.theme.colors.title};
    font-weight: 100;
    font-size: 2em;
    text-transform: uppercase;
    line-height: .9em;
  }

  & img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    inset: 0;
  }

  &::after{
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.3);
    transition: all ease-out .3s ;
  }

  &:hover::after{
    background: rgba(0,0,0,0.0);
  }

  &:hover{
    cursor: pointer;
  }
  &:hover h3{
    display: none;
  }
`;
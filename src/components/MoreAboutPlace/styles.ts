import styled from "styled-components";


export const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  & img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: -1;
  }

  &::after{
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: rgba(0,0,0,0.5);
    transition: all ease-out .3s ;
  }

`;
export const Content = styled.div`
  width: 70%;
  padding: 6rem;

  @media (max-width: 1024px){
    padding: 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 5em;
  text-transform: uppercase;
  font-weight: 300;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.title};

  @media (max-width: 1024px){
    font-size: 3rem;
  }
`;

export const Paragraph = styled.p`
  color: ${props => props.theme.colors.subtitle};
  font-size: 1.3em;
  line-height: 1.5em;
  font-weight: 300;
`;

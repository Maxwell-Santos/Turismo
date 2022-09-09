import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  min-height: 100vh;

  & img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: -1;
    filter: brightness(.5);
  }

  @media (max-width: 700px){
    flex: auto;
    min-height: auto;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px){
    & h1{
      font-size: 3rem;
    }
  }

  @media (max-width: 800px){
    padding: 1rem;

    & p{
      font-size: 1em;
    }
  }

  @media (max-width: 700px){
    min-height: 40vh;
  }

  @media (max-width: 425px){
    & h1{font-size: 2em;}
  }
    
  @media (min-width: 1400px){
    & p{font-size: 2em;}
  }
`;

export const Title = styled.h1`
  font-size: 5em;
  text-transform: uppercase;
  font-weight: 300;
  line-height: .9em;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.title};
`;

export const Paragraph = styled.p`
  color: ${props => props.theme.colors.subtitle};
  font-size: 1.2em;
  line-height: 1.5em;
  font-weight: 300;
`;

export const ButtonVisit = styled.a`
  text-decoration: none;
  appearance: none;

  padding: .7rem;
  background: rgba(255,255,255,0.8);
  color: #222;
  font-weight: 400;
  letter-spacing: 2px;
  
  width: 250px;
  margin-top: 1rem;
  border-radius: 1rem;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  overflow: hidden;

  transition: all ease .3s;

  & span{
    transform: translateX(12px);
    transition: all ease .3s;

  }

  & .icon{
    opacity: 0;
    transform: translateX(100px);
    transition: all ease .3s;
  }
  
  &:hover span{
    transform: translateX(0);
  }
  &:hover .icon{
    opacity: 1;
    transform: translateX(0);
  }
  
  &:hover{
  background: rgba(255,255,255,0.8);

  }
  
`;
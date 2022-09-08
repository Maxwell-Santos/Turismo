import styled from "styled-components";


export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;

  position: relative;
  
  @media (max-width: 700px){
    flex-direction: column;
  }

`;
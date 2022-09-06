import styled from "styled-components";


export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, minmax(1fr, 400px));
  align-items: center;
  justify-items: center;

  gap: 10px;
  padding: 10px;
  position: absolute;
  right: 0;
  margin: auto 0; //centralizar na vertical
  width: 30%;

  @media (max-width: 1024px){
  grid-template-columns: 1fr;
  }
`;
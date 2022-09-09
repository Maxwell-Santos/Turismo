import { useContext } from "react";
import { Container } from "./styles";

import { PlaceContext } from '../../PlacesContext';

interface CardInterface {
  title: string
  banner: string
}
export function Card({ title, banner }: CardInterface | any) {
  const { changePlace } = useContext(PlaceContext)

  return (
    <Container onClick={() => changePlace(title)}>
      <h3>{title}</h3>
      <img src={banner} alt="banner ponto turístico" />
    </Container>
  )
}

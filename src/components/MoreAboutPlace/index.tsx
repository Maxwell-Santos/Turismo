import {
  Container,
  Content,
  Paragraph,
  Title
} from './styles';

interface MoreAboutPlaceInterface{
  title: string;
  indice: string;
  banner: string;
}
export function MoreAboutPlace({crr}: MoreAboutPlaceInterface | any) {

  return (
    <Container>
      <img src={crr.banner} alt="banner" />
      <Content>
        <Title>{crr.title}</Title>
        <Paragraph>{crr.indice}</Paragraph>
      </Content>
    </Container>
  )
}

import { IconMap } from '../../assets/svgIcon';
import {
  ButtonVisit,
  Container,
  Content,
  Paragraph,
  Title
} from './styles';

interface MoreAboutPlaceInterface {
  title: string;
  indice: string;
  banner: string;
  exploreButton: string;
}
export function MoreAboutPlace({ crr }: MoreAboutPlaceInterface | any) {

  return (
    <Container>
      <img src={crr.banner} alt="banner" />
      <Content>
        <Title>{crr.title}</Title>
        <Paragraph>{crr.indice}</Paragraph>

        <ButtonVisit
          href={crr.exploreButton}
          target="_blank"
        >
          <span>Visitar</span>
          <div className='icon'>
            <IconMap />
          </div>

        </ButtonVisit>
      </Content>
    </Container>
  )
}

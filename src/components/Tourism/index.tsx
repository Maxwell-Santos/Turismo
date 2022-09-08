import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
//data
import { Places } from '../../Places';

//providers
import { PlaceContext } from '../../PlacesContext';

//components
import { Card } from '../Card';
import { MoreAboutPlace } from '../MoreAboutPlace';
//styles
import { Container } from './styles';
import '../../styles/Swiper.css';

export function Tourism() {
  const { currentPlace } = useContext(PlaceContext)
  //função que troca o lugar

  return (
    <Container>
      <MoreAboutPlace
        crr={currentPlace}
      />

      <Swiper
        direction={"vertical"}
        freeMode={true}
        loop={true}
        centeredSlides={true}
      >
        {
          Places.map(place => {
            return (
              <SwiperSlide>
                <Card
                  key={place.title}
                  title={place.title}
                  indice={place.indice}
                  banner={place.banner}
                />
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </Container>
  )
}

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
      // slidesPerView={1}
      >
        {
          Places.map(place => {
            return (
              <SwiperSlide
                key={place.title}
              >
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

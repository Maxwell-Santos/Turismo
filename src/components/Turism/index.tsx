import { useContext } from 'react';
//data
import { Places } from '../../Places';

//providers
import { PlaceContext } from '../../PlacesContext';

//components
import { Cards } from '../Cards';
import { Card } from '../Cards/Card';
import { MoreAboutPlace } from '../MoreAboutPlace';
//styles
import { Container } from './styles';

export function Turism() {
  const { currentPlace } = useContext(PlaceContext)
  //função que troca o lugar

  return (
    <Container>
      <MoreAboutPlace
        crr={currentPlace}
      />
        <Cards>
          {
            Places.map(place => {
              return <Card
                key={place.title}
                title={place.title}
                indice={place.indice}
                banner={place.banner}

              />
            })
          }
        </Cards>
    </Container>
  )
}

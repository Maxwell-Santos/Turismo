<img src="./src/assets/tela inicial 2.png .png"/>


- [Como funciona](#como-funciona)
  - [Consumindo dados](#consumindo-os-dados)
    - [Context API](#por-que-usei-context-api)
  - [Acessando o Contexto](#acessando-o-contexto)
  - [Providers](#providers-no-app)
  - [Componentes Internos](#componentes-internos)
- [Styled-Componentes](#styled-components)
# Como funciona?

- Eu escolhi três pontos turísticos brasileiros para colocar nessa aplicação.
 Após isso, pesquisei mais sobre eles e peguei algumas informações a mais de cada um.
- Esses pontos turísticos estão armazenados num array de objetos javascript, onde cada lugar tem os atributos:

```ts
{
  title: string,
  indice: string,

  banner: string,
  video?: string,

  exploreButton: string,
}

// Exemplo Pão de Açúcar

  {
    title: "Pão de Açúcar",
  
    indice: "Monumento Natural dos Morros do Pão de Açúcar e da Urca é um complexo de morros localizado no bairro da Urca, na cidade do Rio de Janeiro, no Brasil. É composto pelo Morro do Pão de Açúcar e pelo Morro da Urca.",
   
    banner: "https://rotadeferias.com.br/wp-content/uploads/2022/07/unnamed-6.jpg",
    
    // video: "https://youtu.be/5PwkNG5gt3Q",
  
    exploreButton: "https://www.google.com/search?q=p%C3%A3o+de+a%C3%A7ucar+rj&rlz=1C1GCEU_pt-BRBR1019BR1019&tbm=lcl&sxsrf=ALiCzsZGBk9Qqjqg8_KIL1CyV3MQNmyT_g%3A1662680641144&ei=QX4aY563COTQ1sQPhb6G8AE&oq=p%C3%A3o+&gs_l=psy-ab.3.1.35i39k1l2j0i512i433i131k1j0i433i67k1j0i512i433k1j0i67k1j0i433i67k1j0i512i433k1j0i433i131i67k1j0i512k1.28216.29044.0.30581.4.4.0.0.0.0.130.451.0j4.4.0....0...1c.1.64.psy-ab..0.4.450....0.zefh3L__u08",
  },
```

## Consumindo os dados:

- Para fazer com que toda a plicação refletisse a mudança de ponto turístico, utilizei a API <a href="https://reactjs.org/docs/context.html#contextprovider">Context Provider</a> do React.


```tsx
import { createContext, useState } from "react";
import { Places } from "../Places" // importando o array de objetos contendo os pontos turísticos

//criando o contexto
// contexto precisa inicializar com algum dado, pode ser até como null
export const PlaceContext = createContext<any>([])

export function PlaceProvider({children}: any){

  //estado que vai mudar o ponto turístico atual selecionado
  // o estado inicia com o primeiro item do do array, para quando abrir o site ja ter um primeiro lugar selecionado
  const [currentPlace, setCurrentPlace] = useState(Places[0])
  const PlacesSelector = Places

  // função que vai ser chamada quando clicar em algum card dos pontos turísticos
  // cada card tem um evento Onclick, que vai chamar essa função mandando como parâmetro o titulo dele mesmo que foi clicado
  const changePlace = (title: string) => {
    PlacesSelector.map((p: any) => {

      p.title == title && setCurrentPlace(p) // && só é executado quando os dois lados forem verdadeiros (equivalente a um if sem o else)
    })
  }
  return(
  <PlaceContext.Provider value={{currentPlace, changePlace}}> {/*provendo para a aplicação a variável com o estado atual e a função que muda o contexto*/}
    {children}
  </PlaceContext.Provider>
  )
}
```

### Por que usei Context API?

Bom, muitos componentes mudam com frequência nesse site, como o título, o parágrafo, link do botão e imagem de fundo. E passar tudo isso por props, além de ficar mais confuso, por ter bastante níveis de hierarquia na DOM, provavelmente ficaria menos performático.

Com isso, o Context Provider vem para ajudar. Como ele ajuda ? Basicamente, ele consegue ceder qualquer tipo de dado, por todos os componentes que ele tiver como filho, neto, bisneto, etc. Sem precisar passar por props de um por um.
## Acessando o Contexto

- Dentro do component <code>Tourism</code>

```tsx
import { Places } from '../../Places';
import { PlaceContext } from '../../PlacesContext';

export function Tourism() {

  // por meio da desestruturação e do contexto, consigo usar essa variável que é do useState, la de quando criei o Provider.
  const { currentPlace } = useContext(PlaceContext)

   return (
    <Container>
      <MoreAboutPlace
        crr={currentPlace} // aqui eu passei por meio de props mesmo, o contexto atual, esse componente ja ja vou falar o que ele faz
      />

      {/*não é importante, é apenas a biblioteca que eu usei carrossel*/}
      <Swiper
        direction={"vertical"}
        freeMode={true}
        loop={true}
        centeredSlides={true}
      > 
        {
          // Este 'Places' é o array onde está todos os meus objetos com as informações dos pontos turísticos
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
```
## Providers no App

```tsx

import { ThemeProvider } from "styled-components";
import { Tourism } from "./components/Tourism";
import { PlaceProvider } from "./PlacesContext";
import GlobalStyle from "./styles/global";
import dft from "./styles/themes/default";

export function App() {

  return (
    <ThemeProvider theme={dft}> {/*Provider de tema, pelo styled-components*/}
      <GlobalStyle/> {/*estilização global, ex: zerar as margins, padding, boz-sizing: border-box*/}
      <PlaceProvider> {/*context provider ou context API, é o provedor de todos o conteúdo da aplicação*/}
        <Tourism /> {/*a aplicação*/}
      </PlaceProvider>
    </ThemeProvider>
  )
}
```
## Componentes internos

- MoreAboutPlace
Ele recebe como parâmetro o objeto do ponto turístico atual (que é passado pelo provider)

```tsx
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
```

- Card
O Card, são os cards que ficam na lateral (ou embaixo no mobile), e eles são criados por meio da função <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map">.map()</a>, que executa alguma coisa em cada item do array e o modifica.
Nesse caso, em cada item do array, ele criou um Card e o preencheu por props

```tsx
import { PlaceContext } from '../../PlacesContext';

interface CardInterface {
  title: string
  banner: string
}

export function Card({ title, banner }: CardInterface | any) {
  //aqui por meio da desestruturação, consigo usar a função que muda o contexto do ponto turístico atual
  const { changePlace } = useContext(PlaceContext)

  return (
    //lembra que esse card é criado de forma dinâmica por meio do .map(), logo cada card tem seu próprio título recebido pelas props, e é jogado nessa função vai compará-lo em todos os objetos de pontos turísticos, e vai selecionar o correto, para mostrar no componente 'MoreAboutPlace'
    <Container onClick={() => changePlace(title)}> 
      <h3>{title}</h3>
      <img src={banner} alt="banner ponto turístico" />
    </Container>
  )
}
```
## Styled-Components
### Todos o site foi estilizado pelo Styled-components, menos os componentes da biblioteca Swiper, ai eu tiver que usar o css puro
### Arquivo de definição de tipo - Typescript
- Arquivo criado com a extensão <code>d.ts</code>, para poder inserir meus temas dentro do autocomplete do Typescript

- No arquivo 'tsconfig.json': 
```json
"files":[
  "src/styles/styled.d.ts"
]
```
"files" - Serve para dizer para o typescript, arquivo que eu quero que compile junto com a minha aplicação. Nesse caso, como sobre escrevi uma definição de tipos, quero que ela carregue junto com a aplicação. Para funcionar, basta desligar os servidor do vite e ligar de novo.

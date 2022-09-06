import { createContext, useState } from "react";
import { Places } from "../Places";

export const PlaceContext = createContext<any>([])

export function PlaceProvider({children}: any){

  //estado que vai mudar o ponto turístico atual selecionado
  const [currentPlace, setCurrentPlace] = useState(Places[0])
  const PlacesSelector = Places

  // função que vai ser chamada quando clicar em algum card dos pontos turísticos
  const changePlace = (title: string) => {
    PlacesSelector.map((p: any) => {
      p.title == title && setCurrentPlace(p)
    })
  }
  return(
  <PlaceContext.Provider value={{currentPlace, changePlace}}>
    {children}
  </PlaceContext.Provider>
  )
}
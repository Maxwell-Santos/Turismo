import { ThemeProvider } from "styled-components";
import { Turism } from "./components/Turism";
import { PlaceProvider } from "./PlacesContext";
import GlobalStyle from "./styles/global";
import dft from "./styles/themes/default";

export function App() {

  return (
    <ThemeProvider theme={dft}>
      <GlobalStyle/>
      <PlaceProvider>
        <Turism />
      </PlaceProvider>
    </ThemeProvider>
  )
}
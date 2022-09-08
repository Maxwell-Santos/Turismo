import { ThemeProvider } from "styled-components";
import { Tourism } from "./components/Tourism";
import { PlaceProvider } from "./PlacesContext";
import GlobalStyle from "./styles/global";
import dft from "./styles/themes/default";

export function App() {

  return (
    <ThemeProvider theme={dft}>
      <GlobalStyle/>
      <PlaceProvider>
        <Tourism />
      </PlaceProvider>
    </ThemeProvider>
  )
}
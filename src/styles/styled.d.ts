import 'styled-components'

//sobreescrever uma definição de tipos do styled components
declare module 'styled-components'{
  export interface DefaultTheme{
    title: string,

    colors:{
      bg: string,
      title: string
      subtitle: string
    }
  }
}
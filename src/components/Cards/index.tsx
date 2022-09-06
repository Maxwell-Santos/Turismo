import { Container } from './styles';

//esse componente tem só a função de ser uma div
export function Cards({children}: any) {

  return (
   <Container>
    {children}
   </Container>
 )
}

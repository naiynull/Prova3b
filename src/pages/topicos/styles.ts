import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyle'

export const Section = styled.section`
margin-right: 160px; /* Same width as the sidebar + left position in px */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
main.grid {
    display: grid;
    grid-template-columns: auto auto;
    gap: 7rem;
    margin-left: 200px;
    padding-top: 2rem ;

}
P{
    width: 57%;
    height: 70px;
    background-color: ${colors.Texto};
    display: flex;
       padding: 20px;
       font-size: 22px;
       text-transform: uppercase;
       text-decoration: none;
       border-radius: 9px;
}
h1{
    background-color: ${colors.Título};
    color: #fff;
    height: 100px;
}


`


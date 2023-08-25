import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyle'

export const Section = styled.section`
 margin-right: 160px; /* Same width as the sidebar + left position in px */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
  margin-top: 4vh;
main.grid {
    display: grid;
    grid-template-columns: auto;
    gap: 2rem;
    justify-content: center;
    padding-top: 2rem;

}
P{
    width: 100%;
    height: 100px;
    background-color: ${colors.Texto};
    display: flex;
       padding: 20px;
       text-transform: uppercase;
       text-decoration: none;
       border-radius: 10px;
       font-size: 20px;
}
h1{
    background-color: ${colors.Título};
    color: #fff;
    height: 100px;
}

`
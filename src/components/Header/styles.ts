import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  /* Cabeçalho */

  `

export const NavBar = styled.nav`
  /* Navegação */
  .sidenav {
  width: 130px;
  position: fixed;
  z-index: 1;
  top: 20px;
  left: 110rem;
  
  overflow-x: hidden;
  padding: 8px 0;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 22px;
  color: #2196F3;
  display: block;
}

.sidenav a:hover {
  color: #064579;
}
#to{
  background-color:${colors.Menu};
}
#de{
  background-color: ${colors.menu2};
}

`
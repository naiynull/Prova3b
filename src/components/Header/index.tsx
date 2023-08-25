import * as S from "./styles"
import Logo from "../../assets/truck.svg"

export function Header() {
  return (
    <S.Header>

      <S.NavBar>
      <div className="sidenav">
        <ul>
          <li>
            <a>Restaurante</a>
          </li>
          <li>
            <a id="to" href="/topicos">Topicos</a>
          </li>
          <li>
            <a id="de" href="/descricao">Descrição</a>
          </li>
        </ul>
        </div>
      </S.NavBar>
    </S.Header>
  )
}
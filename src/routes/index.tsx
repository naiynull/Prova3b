import { Routes, Route } from "react-router-dom"
import { PageRestaurante, PageLayout,PageDescriao,PageTopicos } from "../pages"

export function RouteSoftware() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="" element={<PageRestaurante />} />
        <Route path="/topicos" element={<PageTopicos />} />
        <Route path="/descricao" element={<PageDescriao />} />
      </Route>
    </Routes>
  )
}

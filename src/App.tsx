import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalStyle } from "./Utils/GlobalStyle"
import { Layout } from "./Layout"
import { Home } from "./Pages/Home"
import { Results } from "./Pages/Resultados"
import { EditUser } from "./Pages/EditUser"

function App() {
  return (
    <>
      <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="/results" element={ <Results /> } />
          <Route path="/edit/:id" element={ <EditUser /> } />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

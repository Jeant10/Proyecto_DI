import {  BrowserRouter,  Routes,  Route } from "react-router-dom";
import Portafolio from "./paginas/Portafolio";
import FormContact from "./layout/FormContact";
import FormContactBook from "./paginas/FormContacBook";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Portafolio />}>
        </Route>

		<Route path="/formContact" element={<FormContact />}>
			<Route index element={<FormContactBook/>}/>	
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
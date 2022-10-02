
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path= '/' element={<ItemListContainer />} />
      <Route path= '/categoria/:categoriaId' element={<ItemListContainer />} />
      <Route path= '/detalle' element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
      </BrowserRouter>

  );
}

export default App;
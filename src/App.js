
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
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/vestidos/:id" element={<ItemDetailContainer />} />
      <Route path="/accesorios/:id" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
      </BrowserRouter>

  );
}

export default App;

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContextProvider from "./components/CartContext";


function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/categoria/:cat" element={<ItemListContainer />}></Route>
      <Route path="/productos/:id" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
      <CartContextProvider />
      </BrowserRouter>
      </CartContextProvider>

  );
}

export default App;
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Header />
      <ItemListContainer greeting="Bienvenidos" />
      <ItemDetailContainer />
      <Footer />
    </div>
  );
}

export default App;
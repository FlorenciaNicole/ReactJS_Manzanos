import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";

function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos" />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  let title = "Bienvenidos";

  return (
    <div className="App">
      <h1>{title}</h1>
      <NavBar />
      <ItemListContainer />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
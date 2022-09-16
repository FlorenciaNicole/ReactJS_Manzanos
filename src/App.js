import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  let title = "Bienvenidos";

  return (
    <div className="App">
      <h1>{title}</h1>
      <NavBar />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
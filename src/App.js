import "./app.css"
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-between">
        <img className="logo" src={"https://www.monkeyfitpass.com/_nuxt/img/new-logo.f8a84a8.png"} alt="logo"></img>
        <NavBar />
      </div>
    </div>
  );
}

export default App;

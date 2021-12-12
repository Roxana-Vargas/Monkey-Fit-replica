import "./app.css"
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <div className="container-navbar d-flex justify-content-between px-5">
        <img className="logo" src={"https://www.monkeyfitpass.com/_nuxt/img/new-logo.f8a84a8.png"} alt="logo"></img>
        <div className="d-flex">
          <a href="#iniciar-sesión" className="url-login my-4" >Iniciar sesión</a>
          <NavBar />
        </div>
      </div>
    </div>
  );
}

export default App;

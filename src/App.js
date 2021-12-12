import "./app.css"
import Banner from "./components/Banner";
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
      <div className="row container-banner">
        <div className="col-sm-12 col-lg-6">
          <Banner />
        </div>
        <div className="col-sm-12 col-lg-6">
          <img className="img-banner" src={'https://www.monkeyfitpass.com/_nuxt/img/hero-employees.dab5e1a.png'} alt='Employees MokeyFit'/>
        </div>
        
      </div>
    </div>
  );
}

export default App;

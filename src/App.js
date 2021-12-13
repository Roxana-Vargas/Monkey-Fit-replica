import "./app.css"
import Banner from "./components/Banner";
import Conect from "./components/Conect";
import Details from "./components/Details";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <section className="container-navbar d-flex justify-content-between px-5">
        <img className="logo" src={"https://www.monkeyfitpass.com/_nuxt/img/new-logo.f8a84a8.png"} alt="logo"></img>
        <div className="d-flex">
          <a href="#iniciar-sesión" className="url-login my-4" >Iniciar sesión</a>
          <NavBar />
        </div>
      </section>
      <section className="container-banner row">
        <div className="col-sm-12 col-lg-6">
          <Banner />
        </div>
        <div className="col-sm-12 col-lg-6">
          <img className="img-banner" src={'https://www.monkeyfitpass.com/_nuxt/img/hero-employees.dab5e1a.png'} alt='Employees MokeyFit'/>
        </div>
      </section>
      <section className="container-details">
        <Details />
      </section>
      <section className="container-conect">
        <Conect />
      </section>
    </div>
  );
}

export default App;

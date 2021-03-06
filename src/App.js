import "./app.css"
import Banner from "./components/Banner";
import Chat from "./components/Chat";
import Comments from "./components/Comments";
import Conect from "./components/Conect";
import Details from "./components/Details";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Step from "./components/Step";

function App() {
  return (
    <div className="App">
      <section className="container-navbar d-flex justify-content-between px-sm-2">
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
      <section className="container-step">
        <Step />
      </section>
      <section className="container-comments">
        <Comments />
      </section>
      <Footer />
      <Chat />
    </div>
  );
}

export default App;

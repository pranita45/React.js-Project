import logo from './logo.svg';
import './App.css';
import Header from "./Component/header/Header";
import Footer from './Component/footer/Footer';
import About from "./Component/header/About";
import Menu from "./Component/header/Menu";
import Specials from './Component/header/Specials';
import Event from "./Component/header/Events";
import Gallery from './Component/header/Gallery';
import Chef from "./Component/header/Chefs";
import Contact from "./Component/header/Contact";
// import {Routes,Route} from "react-router-dom";
// import Home from "./Component/header/Home";
// import About from "./Component/header/About";
// import Menu from "./Component/header/Menu";
// import Specials from "./Component/header/Specials";
// import Events from "./Component/header/Events";
// import Chefs from "./Component/header/Chefs";
// import Gallery from "./Component/header/Gallery";
// import Section from "./Component/section/Section";
function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Menu/>
      <Specials/>
      <Event/>
      <Gallery/>
      <Chef/>
      <Contact/>
      {/* <Routes>
        <Route path="/hero" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/specials" element={<Specials/>}/>
        <Route path="/chefs" element={<Chefs/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/events" element={<Events/>}/>
      </Routes> */}
      <Footer/>
    </div>
  );
}

export default App;

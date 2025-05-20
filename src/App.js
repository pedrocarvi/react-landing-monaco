import './App.css';
import CatasSection from './Componentes/CatasYDegustaciones/CatasYDegustaciones';
import EventosSection from './Componentes/EventosYFestejos/EventosYFestejos';
import Footer from './Componentes/Footer/Footer';
import HeroSection from './Componentes/HeroSection/HeroSection';
import Menu from './Componentes/Menu/Menu';
import MusicaEnVivoSection from './Componentes/MusicaEnVivo/MusicaEnVivo';
import Navbar from './Componentes/Navbar/Navbar';
import UbicacionContacto from './Componentes/UbicaciónContacto/UbicacionContacto';
import WhatsAppButton from './Componentes/WhatsappButton/WhatsappButton';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <HeroSection/>
        <Menu/>
        <CatasSection/>
        <EventosSection/>
        <MusicaEnVivoSection/>
        <UbicacionContacto/>
        <Footer/>
        <WhatsAppButton/>
    </div>
  );
}

export default App;

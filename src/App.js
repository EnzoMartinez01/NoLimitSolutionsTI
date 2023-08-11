import './App.css';
import { Route, Routes } from 'react-router-dom';
import PrincipalComponent from './Components/Principal/PrincipalComponent';
import ServiciosComponent from './Components/Servicios/ServiciosComponent';
import NosotrosComponent from './Components/Nosotros/NosotrosComponent';
import ContactanosComponent from './Components/Contacto/ContactanosComponent';

function App() {
  return (
    <>
      <Routes>
        <Route path='/NoLimitSolutionsTI' element={ <PrincipalComponent /> } />
        <Route path='servicios' element={ <ServiciosComponent /> } />
        <Route path='nosotros' element={ <NosotrosComponent /> } />
        <Route path='contacto' element={ <ContactanosComponent /> } />
      </Routes>
    </>
  );
}

export default App;

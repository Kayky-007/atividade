import './App.css';
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Servico from './paginas//Servico'
import Contato from './paginas/Contato'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { FaPhoneAlt, FaUser, FaToolbox } from "react-icons/fa";




function App() {
  return (
    <div className="App">
      <h1 className="titulo">Atividade - Conceitos Introdutórios</h1>

      <div className="bemvindo">


      </div>


      <BrowserRouter>
        <ul class="menu">
          <li><Link to="/"><IoHome />Home</Link></li>
          <li><Link to="/sobre"><FaUser />Sobre</Link></li>
          <li><Link to="/servico"><FaToolbox />Serviço</Link></li>
          <li><Link to="/contato"><FaPhoneAlt />Contato</Link></li>

        </ul>


        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servico" element={<Servico />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>


    
    </div>



  );
}

export default App;

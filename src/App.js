import './App.css';
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Servico from './paginas//Servico'
import Contato from './paginas/Contato'
import Pecas from './paginas/Pecas'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { FaPhoneAlt, FaUser, FaToolbox } from "react-icons/fa";
import { Container, Row, Col } from 'reactstrap'
import logo from './img/logo.png'
import { FaWhatsapp } from 'react-icons/fa';
import whatsapp from './img/whatsapp.png'


function App() {
  return (
    <BrowserRouter>
    <Container fluid>
      <Row>
        <Col className=''>

         
            <ul class="menu">
              <li><img src={logo} alt="logotipo" width="150px" /></li>
              <li><Link to="/"><h2>Home</h2></Link></li>
              <li><Link to="/servico"><h2>Serviço</h2></Link></li>
              <li><Link to="/pecas"><h2>Peças</h2></Link></li>
              <li><Link to="/sobre"><h2>Sobre</h2></Link></li>
              <li><Link to="/contato"><h2>Contato</h2></Link></li>
              <li className='w-100 d-flex justify-content-end'><button>ATENDIMENTO</button></li>
            </ul>


          
          

        </Col>
      </Row>

      <Row>
        <Col>
          {/* Conteudo da home aqui */}
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/servico" element={<Servico />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/pecas" element={<Pecas />} />
            </Routes>
          
        </Col>
      </Row>

      <div style={{ position: 'fixed', bottom: '10px', right: '10px' }}>
        <a href="https://wa.me/12981976590" target="_blank" rel="noopener noreferrer">
        <img src= {whatsapp} alt="whatsapp" width="80px"/>
        </a>
      </div>

    </Container>
    </BrowserRouter>




  );
}

export default App;

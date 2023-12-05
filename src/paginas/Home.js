import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap'
import '../paginas/Home.css';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import revisao from '../img/revisao.webp'
import freio from '../img/freio.webp'
import cambio from '../img/cambio.webp'
import suspensao from '../img/suspensao.webp'
import injecao from '../img/injecao.webp'
import imobilizador from '../img/imobilizador.webp'
import motor from '../img/motor.webp'
import mecanica from '../img/mecanica.webp'




function Home() {
    return (
        <div>

            <Row id='teste'>
                <Col className='col-6 col-centered-content' >

                    <div>
                        <br /> <br /> <br /> <br />
                        <h2>Auto Nivel</h2>
                        <h6>Bem-vindo à nossa oficina de mecânica especializada, onde a excelência encontra a paixão pela automotiva!<br /> Na nossa busca incessante por qualidade e dedicação, estamos aqui para oferecer a você serviços de manutenção e reparo <br />que transcendem as expectativas. Com uma equipe de profissionais altamente <br /> qualificados e apaixonados por carros, garantimos soluções confiáveis para manter seu veículo <br /> funcionando perfeitamente.</h6>
                        <button className='mt-4'>ATENDIMENTO</button>
                    </div>
                </Col>



                <Col className='col-6'>

                    <img src="https://www.emasterelevadores.com.br/wp-content/uploads/2017/08/107451-mecanica-automotiva-veja-algumas-nocoes-basicas-do-tema.jpg" />
                </Col>

            </Row>
            <Row>
                <Col>
                    <div className='text-center p-4'>
                        <h1 >Serviços</h1>
                        <p>Mecânica geral, airbags, ar condicionado, injeção eletrônica e mais.</p>
                    </div>
                </Col>
            </Row>
           
            <Row className='p-4 bg-secondary-subtle' id="fonte2">
                <Col className='col-3'>
                    <div className=''>
                        <h3 className='text-center'>REVISÃO</h3>

                    </div>
                    <Row>
                        <Col>
                            <div className='d-flex justify-content-center'>
                                <img src={revisao} alt="revisao" />
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col className='col-3'>
                    <div className=''>
                        <h3 className='text-center'>FREIOS</h3>

                    </div>
                    <Row>
                        <Col>
                            <div className='d-flex justify-content-center'>
                                <img src={freio} alt="revisao" />
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col className='col-3'>
                    <div className=''>
                        <h3 className='text-center'>CAMBIO</h3>

                    </div>
                    <Row>
                        <Col>
                            <div className='d-flex justify-content-center'>
                                <img src={cambio} alt="revisao" />
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col className='col-3'>
                    <div className=''>
                        <h3 className='text-center'>SUSPENSÃO</h3>

                    </div>
                    <Row>
                        <Col>
                            <div className='d-flex justify-content-center'>
                                <img src={suspensao} alt="revisao" />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className='p-4 bg-secondary-subtle' id="fonte">
                <Col className='col-3'>
                    <div className=''>
                        <h3 className='text-center'>INJEÇÃO ELETRÔNICA</h3>

                    </div>
                    <Row>
                        <Col>
                            <div className='d-flex justify-content-center'>
                                <img src={injecao} alt="revisao" />
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col className='col-3'>
                    <div className=''>
                        <h3 className='text-center'>IMOBILIZADOR</h3>

                    </div>
                    <Row>
                        <Col>
                            <div className='d-flex justify-content-center'>
                                <img src={imobilizador} alt="revisao" />
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col className='col-3'>
                    <div className=''>
                        <h3 className='text-center'>MOTOR</h3>

                    </div>
                    <Row>
                        <Col >
                            <div className='d-flex justify-content-center'>
                                <img src={motor} alt="revisao" />
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col className='col-3 bg-secondary-subtle'>
                    <div className=''>
                        <h3 className='text-center'>MECÂNICA GERAL</h3>

                    </div>
                    <Row>
                        <Col>
                            <div className='d-flex justify-content-center'>
                                <img src={mecanica} alt="revisao" />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col>
                
                </Col>
            </Row>
        </div>

       
    )
}
export default Home
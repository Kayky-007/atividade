import '../paginas/Servico.css'
import ItemServico from "./ItemServico"
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'; // Assuming you're using reactstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import revisao from "../img/revisao1.webp"
function Servico() {
    return (
        <div>
            <Row id='servicoo'>
                <Col id='servico'className= 'col-6 col-centered-content left-container'>
                    <h1>Nossos <br/> Serviços</h1>
                    <div>
                        {/* Your content */}
                    </div>
                </Col>
                <Col className='col-6 col-centered-content'>
                    <h6> Os nossos serviços são focados em produtos <br/> exclusivos para carros de luxo, assim como <br/> também nos devidos aspectos de serviços listados aqui.</h6>
                    <button className='mt-4'>ATENDIMENTO</button>
                </Col>
            </Row>
            <Row>
                {[1, 2, 3, 4, 5].map((item, index) => (
                    <Col key={index} xs="12" sm="6" md="4" lg="2">
                        <Card>
                            <CardImg top width="100%" src={revisao} alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Cartão {item}</CardTitle>
                                <CardText>ola</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col>
                    <div>
                        {/* Your content */}
                    </div>
                </Col>
            </Row>
        </div>
    );
}
export default Servico

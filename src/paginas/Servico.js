import ItemServico from "./ItemServico"
function Servico() {
    return (
        <div>
            <h1>Serviços</h1>
            <br />
            <ItemServico nome="Felipe Souza" idade="37" funcao="Suporte Site" contato="(12) 98576-5489" img="https://www.w2z.com.br/wp-content/uploads/2020/07/support-1024x682-1.jpg" />
            <ItemServico nome="Samuel Silva" idade="43" funcao="Gerente" contato="(11) 96543-1234" img="https://media.licdn.com/dms/image/C4D03AQGN2DGIqooHeA/profile-displayphoto-shrink_800_800/0/1647393260927?e=2147483647&v=beta&t=0ScoX-2spm32PXpBpIr1O7_DGYCK6kXBbc3qZTRcRCc" />
            <ItemServico nome="Daniel Oliveira" idade="32" funcao="Estoquista" contato="(11) 97653-4321" img="https://blog.contaazul.com/hubfs/controle-de-estoque-1.jpg" />
            <ItemServico nome="Maria Vitória" idade="55" funcao="Financeiro" contato="(11) 98342-3344" img="https://files.sunoresearch.com.br/n/uploads/2021/01/1379bc39-whatsapp-image-2021-01-15-at-06.49.04-e1610704248710-800x450.jpeg" />
        </div>
    )
}
export default Servico
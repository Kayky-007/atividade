

function ItemServico({ funcao, nome, idade, contato, img }) {


    return (
        <div>
             <img src={img} alt={nome} width="500px" />
            <h3>Funcionario: {nome} </h3>
            <h4>Idade: {idade}</h4>
            <h4>Função: {funcao}</h4>
            <h3>Contato: {contato}</h3>
            <hr />
        </div>
    )
}
export default ItemServico;
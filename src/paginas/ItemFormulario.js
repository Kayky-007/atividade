function ItemFormulario(props) {
    return (
        <p>
            <label for={props.name}>{props.label}: </label>
            <input type={props.tipo} name={props.name} placeholder={props.ph} id={props.name} />
        </p>
    )
}
export default ItemFormulario
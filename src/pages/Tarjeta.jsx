

export default function Tarjeta({imagen, nombre, precio}){
    return(
        <>
            <div className="box-img">
                <img src={imagen} alt="" className="img"/>
            </div>
            <div className="box-desc">
                <p className="nmb-producto">{nombre}</p>
                <span className="precio-producto">S/. {precio.toFixed(2)}</span>
            </div>
        </>
    )
}
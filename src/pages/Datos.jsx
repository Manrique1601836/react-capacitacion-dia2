

import Tarjeta from "./Tarjeta.jsx"
import "../style/Datos.css"

import Cel1 from "../assets/Cel1.jpg";
import Cel2 from "../assets/Cel2.jpg";
import Cel3 from "../assets/Cel3.png";

export default function Datos(){

        const productos = [
        {id: "101010" , imagen: Cel1 , nombre: "producto-v1" , precio: 10},
        {id: "202020" , imagen: Cel2 , nombre: "producto-v2" , precio: 10},
        {id: "303030" , imagen: Cel3 , nombre: "producto-v3" , precio: 10}
    ];

    return(
        <div className="card">
            {productos.map((item) => (
                <div className="card-item" key={item.id}>
                    <Tarjeta
                        imagen={item.imagen}
                        nombre={item.nombre}
                        precio={item.precio}
                    />
                    <button className="btn">Agregar</button>
                </div>
                
            ))}
        </div>
    )
}
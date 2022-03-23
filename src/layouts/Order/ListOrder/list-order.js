import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './styles.scss';

const ListOrder = (props) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('/distribuidor/entregas/').then(({ data }) => {
            console.log(data);

            setOrders(data);
        });
    }, []);

    return <div className='grid-orders'>
        {orders.map((order, key) => {
            return <Link to={"/orders/" + order.id}>
                <div key={key}>
                    <h4>N° Entrega {order.codigo}</h4>
                    <span>
                        <b>Cliente: </b>
                        <br />
                        {order.cliente.nombre}
                        <br />
                        <b> Creado el:</b>
                        <br />
                        {order.creado_el}</span>
                </div>
            </Link>
        })}
    </div>;
}

export default ListOrder;
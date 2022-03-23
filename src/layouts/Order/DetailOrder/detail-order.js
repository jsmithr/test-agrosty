import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faBox, faCircleCheck, faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const DetailOrder = (props) => {
    const [order, setOrder] = useState();
    const { orderId } = useParams();

    useEffect(() => {
        axios.get('/distribuidor/entregas/' + orderId).then(({ data }) => {
            console.log(data);

            setOrder(data);
        });
    }, []);

    const getStatusStyle = (status = "") => {
        if (status == "pendiente")
            return "pending";
        if (status == "in-progress")
            return "pending";
        if (status == "entregado")
            return "delivered";
    }

    const validateHour = (date) => {
        let hour = new Date("2021-07-27 08:00:00").getHours();
        if (hour <= 12)
            return "en la mañana";
        if (hour > 12 && hour <= 19)
            return "en la tarde";
        if (hour > 19)
            return "en la noche";
    }

    if (!order)
        return <>...</>;
    else
        return <div className="detail-order">
            <div className={"state-order in-progress " + getStatusStyle(order.estado)}>
                <span>{order.estado}</span>
                <span>N° Transporte {order.transporte.codigo}</span>
            </div>
            <div className="body-order">
                <div className='card-info'>
                    <h4>N° Entrega  {order.codigo}</h4>
                    <div className='card-info-body'>
                        <div>
                            <h4>Distribuidor:</h4>
                            <span>{order.distribuidor.nombre}</span>
                        </div>
                        <div>
                            <h4>Destinatario</h4>
                            <span>{order.destinatario.nombre}</span>
                        </div>
                        <div>
                            <h4>Cliente</h4>
                            <span>{order.cliente.nombre}</span>
                        </div>
                        <div>
                            <h4>N° de Remito</h4>
                            <span>{order.numero_remito}</span>
                        </div>
                    </div>
                </div>
                <div className='card-articles'>
                    <h4>Articles</h4>
                    <div className='table-article'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Descripción</th>
                                    <th>Cantidad</th>
                                    <th>Lote</th>
                                </tr>
                            </thead>
                            <tbody>
                                {order.detalle.map((mat, key) => {

                                    return <tr key={key}>
                                        <td>{mat.material_descripcion}</td>
                                        <td>{mat.cantidad}</td>
                                        <td>{mat.lote}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='card-footer'>
                <hr />
                <div className='history-order'>
                    <div className='order-actions'>
                        <div>
                            <div>
                                <FontAwesomeIcon icon={faCircleCheck} className='icon' size='2x' style={{ color: '#0fc728' }} />
                            </div>
                            <div>
                                <h3>Despacho</h3>
                                <span>
                                    Su pedido fue correctemente despachado el {order.transporte.despachado_el.substring(0, 10)} a las {order.transporte.despachado_el.substring(10)}
                                </span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <FontAwesomeIcon icon={faClock} className='icon' size='2x' style={{ color: '#fdea00' }} />
                            </div>
                            <div>
                                <h3>Entrega Estimada</h3>
                                <span>
                                    {order.destinatario.localidad.nombre}
                                    <br />
                                    {order.entrega_estimada_el ? order.entrega_estimada_el.substring(0, 10) + ', ' + validateHour(order.entrega_estimada_el) : 'Por definir'}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='btn-message'>Dejar mensaje</button>
                    </div>
                </div>
                <hr />
            </div>
        </div>;
}

export default DetailOrder;
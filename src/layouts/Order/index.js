import { Component, Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

class Order extends Component {
    render() {
        return <div>
            <Outlet/>
        </div>;
    }
}

export default Order;
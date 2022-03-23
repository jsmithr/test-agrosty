import { Navigate, Route, Routes, } from 'react-router-dom';
import Order from './layouts/Order';
import ListOrder from './layouts/Order/ListOrder/list-order';
import DetailOrder from './layouts/Order/DetailOrder/detail-order';

export default function RoutesMain() {
    // These routes are defined when this component is loaded on demand via
    // dynamic import() on the home page!
    return (
        <Routes>
            <Route path="orders" element={<Order />}>
                <Route index element={<ListOrder />} />
                <Route path=":orderId" element={<DetailOrder />} />
            </Route>
            <Route path="/" element={<Navigate to="/orders" replace />} />
        </Routes>
    );
}

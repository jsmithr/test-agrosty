import { Suspense } from 'react';
import './App.scss';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faBox, faUser } from '@fortawesome/free-solid-svg-icons';
import NotFound from './layouts/NotFound';
import RoutesMain from './routes';

function App() {
	// const store = useSelector(state => state);

	return (
		<div className="app">
			<header className='_header'>
				<div className='active'>
					<FontAwesomeIcon icon={faBox} className='icon' />
					<span>Pedidos</span>
				</div>
				<div>
					<FontAwesomeIcon icon={faBell} className='icon bg-icon' />
					<span>Notificaciones</span>
				</div>
				<div>
					<FontAwesomeIcon icon={faUser} className='icon' />
					<span>Receptores</span>
				</div>
				<div className='profile'>
					<span>A</span>
				</div>
			</header>
			<section className='app-body'>
				<BrowserRouter>
					<Routes>
						<Route
							path="/*"
							element={
								<Suspense fallback={<>...</>}>
									<RoutesMain />
								</Suspense>
							}
						/>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</section>
			<footer>
				<span>
				&copy;2022
				</span>
				<span>
					Políticas de privacidad
				</span>
			</footer>
		</div>
	);
}

export default App;

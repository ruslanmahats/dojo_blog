import { BrowserRouter } from 'react-router-dom';
import s from './App.module.scss';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { useFetch } from './customHooks/useFetch';

function App() {
	const { fetchApi } = useFetch('posts');

	return (
		<BrowserRouter>
			<div className={s.app}>
				<div className={s.wrapper}>
					<Header />
					<Main fetchApi={fetchApi} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;

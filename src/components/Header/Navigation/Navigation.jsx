import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss';

export const Navigation = () => {
	return (

		<nav className={s.navigation}>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/create">New Blog</NavLink>
		</nav>
	)
}
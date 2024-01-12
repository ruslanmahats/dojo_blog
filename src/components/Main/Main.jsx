import { Route, Routes } from 'react-router-dom';
import s from './Main.module.scss';
import { Home } from '../../pages/Home/Home';
import { CreateBlog } from '../../pages/CreateBlog/CreateBlog';
import { BlogPage } from '../../pages/BlogPage/BlogPage';

export const Main = ({ fetchApi }) => {

	return (
		<div className={s.main}>
			<Routes>
				<Route path="/" element={<Home fetchApi={fetchApi} />} />
				<Route path="/create" element={<CreateBlog setData={fetchApi.setData} data={fetchApi.data} />} />
				<Route path="/post/:id" element={<BlogPage />} />
			</Routes>
		</div>
	)
}
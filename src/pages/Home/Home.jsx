import style from './Home.module.scss';
import { BlogList } from '../../components/BlogList/BlogList';

export const Home = ({ fetchApi }) => {
	const { data: blogs, error, isLoading } = fetchApi;
	return (
		<div className={style.container}>
			{error && <div>{error}</div>}
			{isLoading && <div>Loading...</div>}
			{blogs && <BlogList listTitle="All posts" blogs={blogs} />}
		</div>
	)
}
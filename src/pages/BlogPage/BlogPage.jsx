import { useParams } from 'react-router-dom';
import styles from './BlogPage.module.scss';
import { useFetch } from '../../customHooks/useFetch';

export const BlogPage = () => {
	const { id } = useParams();
	const { fetchApi: { data: blog, isLoading, error } } = useFetch(`posts/${id}`);

	return (
		<div className={styles.container}>
			{error && <div>{error}</div>}
			{isLoading && <div>Loading...</div>}
			{blog && <article><h1 className={styles.title}>{blog.title}</h1><p className={styles.text}>{blog.body + '.'}</p></article>}
		</div>
	)
}
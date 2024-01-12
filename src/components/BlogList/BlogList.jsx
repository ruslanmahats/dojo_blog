import { Link } from 'react-router-dom';
import styles from './BlogList.module.scss';

export const BlogList = ({ listTitle, blogs }) => {
	return (
		<div className={styles.container}>
			{listTitle && <h1 className={styles.listTitle}>{listTitle}</h1>}
			{blogs && <div className={styles.posts}>{blogs.reverse().map(blog => {
				return (
					<div className={styles.post} key={blog.id}>
						<h2 className={styles.title}><Link to={`/post/${blog.id}`}>{blog.title}</Link></h2>
						<div className={styles.text}>{blog.body + '.'}</div>
					</div>
				)
			})}</div>}
		</div>
	)
}
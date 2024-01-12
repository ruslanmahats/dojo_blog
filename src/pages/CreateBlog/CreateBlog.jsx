import { useState } from 'react';
import style from './CreateBlog.module.scss';
import { useNavigate } from 'react-router-dom';

export const CreateBlog = ({ setData, data }) => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('ihor');

	const navigate = useNavigate();


	const onHandleSubmit = (e) => {
		e.preventDefault();
		const newPost = { title, body, author, id: (data.length + 1) };
		setData([...data, newPost])
		navigate("/");
		alert(JSON.stringify(newPost));
	}

	return (
		<div className={style.container}>
			<h1>Add a New Blog</h1>

			<form onSubmit={onHandleSubmit} className={style.form}>

				<label className={style.label} >Blog title:</label>
				<input
					type="text"
					onChange={(e) => setTitle(e.target.value)}
					value={title}
					required />

				<label className={style.label} >Blog text:</label>
				<textarea
					type="text"
					onChange={(e) => setBody(e.target.value)}
					value={body}
					required ></textarea>

				<label className={style.label} >Blog author:</label>
				<select
					type="text"
					onChange={(e) => setAuthor(e.target.value)}
					value={author}
					required >
					<option value="valera">valera</option>
					<option value="ihor">ihor</option>
				</select>

				<button>Add blog</button>
			</form>
		</div>
	)
}
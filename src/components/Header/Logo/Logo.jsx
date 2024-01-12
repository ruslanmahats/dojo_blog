import style from './Logo.module.scss';

export const Logo = () => {
	return (
		<div className={style.container}>
			<div className={style.text}>Dojo Blog</div>
		</div>
	)
}
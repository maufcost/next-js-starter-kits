import Main from '@/components/Main';
import Hero from '@/components/Hero';
import styles from './page.module.css';

export default function HomePage() {
	return (
		<Main className={styles.page}>
			<Hero />
			<p>Home</p>
		</Main>
	);
}

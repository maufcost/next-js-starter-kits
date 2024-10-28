import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.page}>
			<h2>Select one of the options below:</h2>
			<div className={styles.menu}>
				<Link href="/counter" className={styles.link}>
					Counter
				</Link>
				<Link href="/filter" className={styles.link}>
					Filter People
				</Link>
				<Link href="/debouncer" className={styles.link}>
					Debouncer
				</Link>
				<Link href="/phone-number-input" className={styles.link}>
					Phone Number Input
				</Link>
				<Link href="/nextjs-api-caller" className={styles.link}>
					Next.JS API Caller
				</Link>
			</div>
		</div>
	);
}

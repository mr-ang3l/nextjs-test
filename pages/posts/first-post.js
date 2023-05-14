import Layout from '../../components/layout';
import Link from 'next/link';
import styles from '../../components/layout.module.css';

export default function FirstPost() {
    return (
        <Layout clasName="styles.container">
            <h1>Primer publicación</h1>
            <h2>
                <Link href="/">De regreso al inicio</Link>
            </h2>
            <h2>
                <Link href="https://www.google.com" target='blank'>Ve a Google</Link>
            </h2>
        </Layout>
    )
}

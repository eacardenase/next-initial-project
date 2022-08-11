import Head from 'next/head';

import Navbar from '../Navbar';
import styles from './MainLayout.module.css';

const MainLayout = ({ children, metaContent }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{metaContent} - Edwin</title>
                <meta name="description" content={metaContent} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={styles.main}>{children}</main>
        </div>
    );
};

export default MainLayout;

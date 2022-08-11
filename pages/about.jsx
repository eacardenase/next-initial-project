import Link from 'next/link';

import MainLayout from '../components/layouts/MainLayout';
import DarkLayout from '../components/layouts/DarkLayout';

const AboutPage = () => {
    return (
        <>
            <h1>About Page</h1>
            <h1 className="title">
                Ir a <Link href="/">Home</Link>
            </h1>

            <p className="description">
                Get started by editing{' '}
                <code className="code">pages/about.jsx</code>
            </p>
        </>
    );
};

AboutPage.getLayout = function getLayout(page) {
    return (
        <MainLayout metaContent="About Page">
            <DarkLayout>{page}</DarkLayout>
        </MainLayout>
    );
};

export default AboutPage;

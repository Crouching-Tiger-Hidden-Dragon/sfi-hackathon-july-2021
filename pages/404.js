import Head from 'next/head';
import Layout from '../components/Layout/Layout';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Not Found</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>404 - Page Not Found</h1>
      </Layout>
    </>
  );
};

export default Custom404;

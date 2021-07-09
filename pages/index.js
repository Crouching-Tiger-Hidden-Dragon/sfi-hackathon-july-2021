import { Text } from '@chakra-ui/react';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Pokemon from '../components/Pokemon/Pokemon';

export default function Home() {
  return (
    <>
      <Layout>
        <Pokemon />
      </Layout>
    </>
  );
}

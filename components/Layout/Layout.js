import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import NavBar from '../NavBar/NavBar';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Crouching Tiger Hidden Dragon</title>
        <meta name="description" content="SFI Hackathon July 2021" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Flex height="90vh" alignItems="center" justifyContent="center">
        {children}
      </Flex>
    </>
  );
};

export default Layout;

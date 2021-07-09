import { Container, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import NavBar from '../NavBar/NavBar';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>FloraDB</title>
        <meta name="description" content="SFI Hackathon July 2021" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Container maxW="container.lg">
        <Flex
          direction={'column'}
          mt={'8rem'}
          mb={'8rem'}
          alignItems="center"
          justifyContent="center"
          w={'full'}
        >
          {children}
        </Flex>
      </Container>
    </>
  );
};

export default Layout;

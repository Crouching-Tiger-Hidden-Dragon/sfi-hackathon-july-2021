import { Flex } from '@chakra-ui/react';
import React from 'react';
import NavBar from '../NavBar/NavBar';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Flex height="90vh" alignItems="center" justifyContent="center">
        {children}
      </Flex>
    </>
  );
};

export default Layout;

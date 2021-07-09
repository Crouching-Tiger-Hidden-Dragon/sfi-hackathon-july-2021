import { Link, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';

const NavLink = ({ children, path }) => (
  <NextLink href={path}>
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('green.50', 'gray.700'),
      }}
      fontSize={'xl'}
    >
      {children}
    </Link>
  </NextLink>
);

export default NavLink;

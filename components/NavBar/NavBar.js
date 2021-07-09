import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import NavLink from './NavLink';
import { signIn, signOut, useSession } from 'next-auth/client';

const NavBar = () => {
  const [session, loading] = useSession();

  const links = ['Dashboard', 'Projects', 'Team'];
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h="10vh" alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          rounded={'md'}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack spacing={8} alignItems={'baseline'}>
          <NavLink path="/" variant="ghost" rounded={'md'} size={'lg'}>
            <HStack fontSize={'2xl'} spacing={2} alignItems={'center'}>
              <Box>🛰</Box>
              <Text>Space X</Text>
            </HStack>
          </NavLink>

          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {links.map((link) => (
              <NavLink key={link} path={`/${link.toLowerCase()}`}>
                {link}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <Menu>
            {!session && (
              <Button
                as={'a'}
                href={'/api/auth/signin'}
                colorScheme={'teal'}
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign In
              </Button>
            )}
            {session && (
              <>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                >
                  <Avatar size={'md'} src={session.user.image} />
                </MenuButton>
                <MenuList>
                  <MenuItem>{session.user.name ?? '--'}</MenuItem>
                  <MenuItem>{session.user.email ?? '--'}</MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Link
                      href={'/api/auth/signout'}
                      onClick={(e) => {
                        e.preventDefault();
                        signOut();
                      }}
                    >
                      Sign Out
                    </Link>
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {links.map((link) => (
              <NavLink key={link} path={`/${link.toLowerCase()}`}>
                {link}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default NavBar;

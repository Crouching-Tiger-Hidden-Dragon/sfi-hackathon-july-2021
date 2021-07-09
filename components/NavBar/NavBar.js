import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Avatar,
  AvatarBadge,
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
import { signIn, signOut, useSession } from 'next-auth/client';
import NavLink from './NavLink';
import plantIcon from '../../public/plant.svg';
import Image from 'next/image';
import ColorToggle from '../ColorToggle/ColorToggle';

const NavBar = () => {
  const [session, loading] = useSession();

  const links = [
    { name: 'My Garden', path: '/' },
    { name: 'Plant Library', path: 'library' },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      position={'fixed'}
      top={0}
      left={0}
      w={'full'}
      bg={useColorModeValue('green.100', 'gray.900')}
      pl={4}
      pr={7}
      zIndex={99}
    >
      <Flex h="6rem" alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          rounded={'md'}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack spacing={8} alignItems={'center'}>
          <NavLink path="/" variant="ghost" rounded={'md'} size={'xl'}>
            <HStack
              fontSize={'4xl'}
              spacing={2}
              alignItems={'center'}
              py={2}
              px={2}
            >
              <Image src={plantIcon} height={40} width={40} />
              <Text fontWeight={'light'}>FloraDB</Text>
            </HStack>
          </NavLink>

          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {links.map((link, idx) => (
              <NavLink key={idx} path={link.path}>
                {link.name}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <HStack spacing={4}>
            <ColorToggle />
            <Menu>
              {!session && (
                <Button
                  as={'a'}
                  href={'/api/auth/signin'}
                  colorScheme={'green'}
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
                    <Avatar
                      size={'md'}
                      name={session.user?.name ?? ''}
                      src={session.user?.image}
                      bg={'green.300'}
                    >
                      <AvatarBadge boxSize="1.25em" bg="green.500" />
                    </Avatar>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>{session.user?.name ?? '--'}</MenuItem>
                    <MenuDivider />
                    <Link
                      href={'/api/auth/signout'}
                      onClick={(e) => {
                        e.preventDefault();
                        signOut();
                      }}
                    >
                      <MenuItem>Sign Out</MenuItem>
                    </Link>
                  </MenuList>
                </>
              )}
            </Menu>
          </HStack>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {links.map((link, idx) => (
              <NavLink key={idx} path={link.path}>
                {link.name}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default NavBar;

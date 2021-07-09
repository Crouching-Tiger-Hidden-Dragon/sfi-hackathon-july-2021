import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useQueryClient } from 'react-query';
import useRemovePlant from '../../hooks/useRemovePlant';
import CardContainer from './CardContainer';

const GardenCard = ({ plant }) => {
  const queryClient = useQueryClient();
  const { id = 0, name = 'Placeholder', image } = plant ?? {};
  const { mutate } = useRemovePlant();

  const handleRemove = () => {
    mutate(id, {
      onSettled: () => {
        queryClient.invalidateQueries('garden');
      },
    });
  };

  return (
    <CardContainer>
      <Image h={'240px'} w={'full'} src={image} objectFit={'cover'} />
      {/* <Flex justify={'center'} mt={-12}>
        <Avatar
          size={'xl'}
          src={
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          }
          alt={'Author'}
          css={{
            border: '2px solid white',
          }}
        />
      </Flex> */}

      <Box p={6}>
        <Stack spacing={0} align={'center'} mb={5}>
          <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
            {name}
          </Heading>
          {/* <Text color={'gray.500'}>Frontend Developer</Text> */}
        </Stack>

        {/* <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Followers
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Followers
              </Text>
            </Stack>
          </Stack> */}

        <Button
          w={'full'}
          mt={8}
          bg={useColorModeValue('#151f21', 'gray.900')}
          color={'white'}
          rounded={'md'}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          }}
          onClick={handleRemove}
        >
          Remove from Garden
        </Button>
      </Box>
    </CardContainer>
  );
};

export default GardenCard;

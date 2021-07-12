import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import moment from 'moment';
import useLogWatering from '../../hooks/useLogWatering';
import useRemovePlant from '../../hooks/useRemovePlant';
import useToken from '../../hooks/useToken';
import CardContainer from './CardContainer';
import RemovePlant from './RemovePlant';

const GardenCard = ({ plant }) => {
  const { accessToken: token } = useToken();
  const {
    gardenId = 0,
    name = 'Placeholder',
    image,
    lastWaterDate,
    waterDays = 7,
  } = plant ?? {};
  const { mutate: waterMutate, isSuccess, reset } = useLogWatering();
  const { mutate: removeMutate } = useRemovePlant();

  const handleWater = () => {
    waterMutate(
      { id: gardenId, token },
      {
        onSettled: () => {
          setTimeout(() => reset(), 1500);
        },
      }
    );
  };

  const handleRemove = () => {
    removeMutate({ id: gardenId, token });
  };

  return (
    <CardContainer>
      <Image h={'240px'} w={'full'} src={image} objectFit={'cover'} />

      <Box p={6}>
        <Stack spacing={0} align={'center'} mb={5}>
          <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
            {name}
          </Heading>
        </Stack>

        <Stack direction={'row'} justify={'center'} spacing={6}>
          <Stack spacing={0} align={'center'}>
            <Text fontSize={'sm'} color={'gray.500'}>
              Last Shower
            </Text>
            <Text fontWeight={600}>
              {lastWaterDate ? moment(lastWaterDate).format('ddd M/D') : 'N/A'}
            </Text>
          </Stack>
          <Stack spacing={0} align={'center'}>
            <Text fontSize={'sm'} color={'gray.500'}>
              Next Shower
            </Text>
            <Text fontWeight={600}>
              {lastWaterDate
                ? moment(lastWaterDate).add(waterDays, 'days').format('ddd M/D')
                : 'Soon!'}
            </Text>
          </Stack>
        </Stack>

        <Button
          w={'full'}
          mt={8}
          colorScheme={'green'}
          rounded={'md'}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          }}
          onClick={handleWater}
          variant={isSuccess ? 'outline' : 'solid'}
        >
          {isSuccess ? '💦 Yay' : '💧 Log Shower'}
        </Button>

        <RemovePlant handleRemove={handleRemove} />
      </Box>
    </CardContainer>
  );
};

export default GardenCard;

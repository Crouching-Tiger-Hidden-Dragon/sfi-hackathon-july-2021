import { Box, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import CardGrid from '../components/Card/CardGrid';
import Layout from '../components/Layout/Layout';
import useGarden from '../hooks/useGarden';

const Garden = () => {
  const { isSuccess, data } = useGarden(1);
  const { collection = [] } = data ?? {};

  return (
    <Layout>
      <Box w={'full'}>
        <Heading>Garden</Heading>
        {isSuccess &&
          (data.length > 0 ? (
            <CardGrid variant="garden" list={data} />
          ) : (
            <Text mt={8}>
              You currently have no plants in your garden! Head to the Library
              to add some.
            </Text>
          ))}
      </Box>
    </Layout>
  );
};

export default Garden;

import { Box, Heading } from '@chakra-ui/layout';
import { Button, Text } from '@chakra-ui/react';
import React from 'react';
import CardGrid from '../components/Card/CardGrid';
import Layout from '../components/Layout/Layout';
import useLibrary from '../hooks/useLibrary';
import useToken from '../hooks/useToken';

const Library = () => {
  const { accessToken, loading } = useToken();
  const { isSuccess, data, isLoading } = useLibrary(accessToken);

  return (
    <Layout>
      <Box w={'full'}>
        <Heading fontSize={'5xl'} fontWeight={'semibold'} colorScheme={'green'}>
          Plant Library
        </Heading>
        {(isLoading || loading) && (
          <Text mt={8} fontSize={'lg'}>
            Loading...
          </Text>
        )}
        {!isLoading &&
          !loading &&
          (isSuccess && Array.isArray(data) ? (
            <CardGrid variant="library" list={data} />
          ) : (
            <Text fontSize={'lg'} mt={8}>
              Sign in to view the plant library and start adding plants to your
              garden!
            </Text>
          ))}
      </Box>
    </Layout>
  );
};

export default Library;

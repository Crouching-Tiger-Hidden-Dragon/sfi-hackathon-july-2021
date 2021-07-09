import { Box, Heading } from '@chakra-ui/layout';
import React from 'react';
import CardGrid from '../components/Card/CardGrid';
import Layout from '../components/Layout/Layout';
import useLibrary from '../hooks/useLibrary';

const Library = () => {
  const { isSuccess, data } = useLibrary();

  return (
    <Layout>
      <Box w={'full'}>
        <Heading>Library</Heading>
        {isSuccess && <CardGrid variant="library" list={data} />}
      </Box>
    </Layout>
  );
};

export default Library;

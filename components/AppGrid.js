import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

const AppGrid = () => {
  return (
    <SimpleGrid columns={3} spacing="10px">
      <Box bg="tomato" height="80px" width="80px" />
      <Box bg="tomato" height="80px" width="80px" />
      <Box bg="tomato" height="80px" width="80px" />
      <Box bg="tomato" height="80px" width="80px" />
      <Box bg="tomato" height="80px" width="80px" />
      <Box bg="tomato" height="80px" width="80px" />
    </SimpleGrid>
  );
};

export default AppGrid;

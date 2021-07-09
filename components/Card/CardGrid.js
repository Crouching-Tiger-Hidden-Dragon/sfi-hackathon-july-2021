import { SimpleGrid } from '@chakra-ui/layout';
import React from 'react';
import GardenCard from './GardenCard';
import LibraryCard from './LibraryCard';

const CardGrid = ({ list, variant }) => {
  return (
    <SimpleGrid mt={10} width={'full'} columns={3} spacing={'50px'}>
      {Array.isArray(list) &&
        list.map((plant, idx) =>
          variant === 'library' ? (
            <LibraryCard key={idx} plant={plant} />
          ) : (
            <GardenCard key={idx} plant={plant} />
          )
        )}
    </SimpleGrid>
  );
};

export default CardGrid;

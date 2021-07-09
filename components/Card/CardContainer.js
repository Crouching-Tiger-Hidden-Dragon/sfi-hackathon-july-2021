import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box } from '@chakra-ui/layout';

const CardContainer = ({ children }) => {
  return (
    <Box
      maxWidth={'270px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'md'}
      overflow={'hidden'}
    >
      {children}
    </Box>
  );
};

export default CardContainer;

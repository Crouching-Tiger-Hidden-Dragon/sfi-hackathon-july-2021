import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box } from '@chakra-ui/layout';

const CardContainer = ({ children }) => {
  return (
    <Box
      maxWidth={'270px'}
      w={'full'}
      bg={useColorModeValue('green.50', 'gray.700')}
      boxShadow={'2xl'}
      rounded={'md'}
      overflow={'hidden'}
    >
      {children}
    </Box>
  );
};

export default CardContainer;

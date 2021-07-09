import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const ColorToggle = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Button rounded={'full'} onClick={toggleColorMode}>
      {useColorModeValue('☀️', '🌙')}
    </Button>
  );
};

export default ColorToggle;

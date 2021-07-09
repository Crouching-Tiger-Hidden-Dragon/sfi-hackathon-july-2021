import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';

const IdInput = ({ setId }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values) => {
    setId(values.pid);
    // console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.pid}>
        <FormLabel htmlFor="pid">Pokemon ID</FormLabel>
        <Input
          id="pid"
          placeholder="id"
          {...register('pid', { required: 'This is required' })}
        />
        <FormErrorMessage>{errors.pid && errors.pid.message}</FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default IdInput;

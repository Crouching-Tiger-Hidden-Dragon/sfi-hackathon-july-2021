import { Box, Heading, Text } from '@chakra-ui/layout';
import CardGrid from '../components/Card/CardGrid';
import Layout from '../components/Layout/Layout';
import useGarden from '../hooks/useGarden';
import useToken from '../hooks/useToken';

export default function Home() {
  const { accessToken, loading } = useToken();
  const { isLoading, isSuccess, data } = useGarden(accessToken);

  return (
    <Layout>
      <Box w={'full'}>
        <Heading fontSize={'5xl'} fontWeight={'semibold'} colorScheme={'green'}>
          My Garden
        </Heading>
        {(isLoading || loading) && (
          <Text mt={8} fontSize={'xl'}>
            Loading...
          </Text>
        )}
        {!isLoading &&
          !loading &&
          (isSuccess ? (
            data.length > 0 ? (
              <CardGrid variant="garden" list={data} />
            ) : (
              <Text fontSize={'lg'} mt={8}>
                You currently have no plants in your garden! Head to the Library
                to add some.
              </Text>
            )
          ) : (
            <Text fontSize={'lg'} mt={8}>
              Sign in to start tracking your very own garden!
            </Text>
          ))}
      </Box>
    </Layout>
  );
}

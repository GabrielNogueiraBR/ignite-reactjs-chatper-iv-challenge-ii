import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import fetchImages from '../utils/fetchImages';

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: 'images',
    queryFn: context => fetchImages({ pageParam: context.pageParam }),
    getNextPageParam: (lastPage, allPages) => lastPage.nextCursor ?? null,
  });

  const formattedData = useMemo(() => {
    if (!data) return [null];
    return data.pages.map(page => page.data.data).flat();
  }, [data]);

  // TODO RENDER LOADING SCREEN
  if (isLoading) return <Loading />;

  // TODO RENDER ERROR SCREEN
  if (isError) return <Error />;

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {hasNextPage && (
          <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {!isFetchingNextPage ? 'Carregar mais' : 'Carregando'}
          </Button>
        )}
      </Box>
    </>
  );
}

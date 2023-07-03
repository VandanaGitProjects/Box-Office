import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import SearchForm from '../Components/SearchForm';
import { searchForShow, searchForPeople } from '../Api/tvmaze';
import ShowsGrid from '../Components/shows/ShowsGrid';
import ActorsGrid from '../Components/actors/ActorsGrid';

const Home = () => {
  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShow(filter.q)
        : searchForPeople(filter.q),
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  const onSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occured : {apiDataError.message}</div>;
    }

    if (apiData?.length === 0) {
      return <div>No Result Found</div>;
      if (apiData) {
        return apiData[0].show ? (
          <ShowsGrid shows={apiData} />
        ) : (
          <ActorsGrid actors={apiData} />
        );
      }
    } catch (error) {
      return <div>Result Not Found or Empty Data</div>;
    }

    return null;
  };
  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};
export default Home;

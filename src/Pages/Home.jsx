import { useState } from 'react';
import SearchForm from '../Components/SearchForm';
import { searchForShow, searchForPeople } from '../Api/tvmaze';
import ShowsGrid from '../Components/shows/ShowsGrid';
import ActorsGrid from '../Components/actors/ActorsGrid';

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async options => {
    try {
      setApiDataError(null);
      if (options.searchOption === 'shows') {
        const result = await searchForShow(options.q);

        setApiData(result);
      } else {
        const result = await searchForPeople(options.q);
        setApiData(result);
      }
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occured : {apiDataError.message}</div>;
    }

    if (apiData?.length === 0) {
      return <div>No Result Found</div>;
    }

    try {
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

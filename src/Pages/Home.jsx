import { useState } from 'react';
import SearchForm from '../Components/SearchForm';
import { searchForShow, searchForPeople } from '../Api/tvmaze';

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
    try {
      if (apiData) {
        return apiData[0].show
          ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
          : apiData.map(data => (
              <div key={data.person.id}>{data.person.name}</div>
            ));
      }
    } catch (error) {
      setApiDataError(error);
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

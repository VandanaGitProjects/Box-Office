import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowById } from '../Api/tvmaze';

const useShowById = showId => {
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getShowById(showId);
        setShowData(data);
      } catch (err) {
        setShowError(err);
      }
    }
    fetchData();
  }, [showId]);

  return { showData, showError };
};

const Show = () => {
  const { showId } = useParams();
  const { showData, showError } = useShowById(showId);

  if (showData) {
    return <div>Got Show Data: {showData.name}</div>;
  }
  if (showError) {
    return <div>We have an Error : {showError.message} </div>;
  }

  return <div>Show Page {showId}</div>;
};
export default Show;

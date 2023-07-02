import { useParams } from 'react-router-dom';
import { getShowById } from '../Api/tvmaze';
import { useQuery } from '@tanstack/react-query';

const Show = () => {
  const { showId } = useParams();
  //const { showData, showError } = useShowById(showId);

  const { data: showData, error: showError } = useQuery({
    queryKey: [('show', showId)],
    queryFn: () => getShowById(showId),
  });

  if (showData) {
    return <div>Got Show Data: {showData.name}</div>;
  }
  if (showError) {
    return <div>We have an Error : {showError.message} </div>;
  }

  return <div>Show Page {showId}</div>;
};
export default Show;

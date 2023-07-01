import { useParams } from 'react-router-dom';
const Show = () => {
  const { showId } = useParams();
  console.log('Show Id : ' + { showId });

  return <div>Show Page {showId}</div>;
};
export default Show;

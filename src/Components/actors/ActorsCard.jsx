const ActorsCard = ({ name, image, country, gender, birthday, deathday }) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>
        {name}
        {!!gender && `(${gender})`}{' '}
      </h1>
      <p>{country ? `comes from ${country}` : 'No Country Known'}</p>
      {!!birthday && <p>Born {birthday}</p>}
      <p>{deathday ? `Died ${deathday}` : `Alive`}</p>
    </div>
  );
};
export default ActorsCard;

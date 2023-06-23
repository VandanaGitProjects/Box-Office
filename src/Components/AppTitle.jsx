export default function AppTitle(props) {
  const {
    title = "Box Office",
    subtitle = "Are You looking for Movie or Actor?",
  } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

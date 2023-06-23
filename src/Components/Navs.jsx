import { Link } from "react-router-dom";

const LINKS = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Starred",
    to: "Starred1",
  },
  {
    text: "Contact Us",
    to: "/ContactUs",
  },
];
const Navs = () => {
  return (
    <div>
      <ul>
        {LINKS.map((item) => (
          <li>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Navs;

import { apiUrl } from "../components/constant";
import Content from "../components/layouts/Content";

const Health = () => {
  return <Content fetchUrl={apiUrl.health} category={"Health"} />;
};

export default Health;

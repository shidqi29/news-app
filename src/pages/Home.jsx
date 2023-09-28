import { apiUrl } from "../components/constant";
import Content from "../components/layouts/Content";

const Home = () => {
  return <Content fetchUrl={apiUrl.indonesia} category={"Indonesia"} />;
};

export default Home;

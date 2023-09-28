import { apiUrl } from "../components/constant";
import Content from "../components/layouts/Content";

const Programming = () => {
  return <Content fetchUrl={apiUrl.programming} category={"Programming"} />;
};

export default Programming;

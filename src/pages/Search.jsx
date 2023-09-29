import { apiUrl } from "../components/constant";
import Content from "../components/layouts/Content";
import { useParams } from "react-router-dom";

const Search = () => {
  const { query } = useParams();

  return <Content fetchUrl={`${apiUrl.search}&q=${query}`} category={query} />;
};

export default Search;

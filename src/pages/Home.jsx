import Loading from "../components/elements/Loading";
import NewsCard from "../components/fragments/NewsCard";
import { useFetchData } from "../hooks/useFetchData";
import { apiUrl } from "../lib";

const Home = () => {
  const { data: news, isLoading } = useFetchData(`${apiUrl.indonesia}`);
  return (
    <>
    {isLoading && <Loading />}
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 ">
      {news?.articles.map((item, index) => (
        <NewsCard news={item} key={index} />
      ))}
    </div>
  </>
  );
};

export default Home;

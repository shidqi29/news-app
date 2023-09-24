import { news } from "../components/constant/news";
import NewsCard from "../components/fragments/NewsCard";

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {news.map((item, index) => (
        <NewsCard news={item} key={index} />
      ))}
    </div>
  );
};

export default Home;

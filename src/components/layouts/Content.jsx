import { useFetchData } from "../../hooks/useFetchData";
import Error from "../elements/Error";
import Loading from "../elements/Loading";
import NewsCard from "../fragments/NewsCard";
import PropTypes from "prop-types";

const Content = ({ fetchUrl, category }) => {
  const { data: news, isLoading, isError, error } = useFetchData(fetchUrl);
  document.title = `${category} | News App`;

  if (isLoading) return <Loading />;

  if (isError) return <Error message={error.message}/>;

  return (
    <>
      <section className="flex w-full flex-col items-center py-2">
        <h2 className="text-2xl font-bold">{category} News</h2>
        <div className="divider mt-2"></div>
      </section>
      <section className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 ">
        {news?.articles.map((item, index) => (
          <NewsCard news={item} key={index} />
        ))}
      </section>
    </>
  );
};

Content.propTypes = {
  fetchUrl: PropTypes.string,
  category: PropTypes.string,
};

export default Content;

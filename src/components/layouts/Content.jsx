import { useEffect, useState } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import Error from "../elements/Error";
import Loading from "../elements/Loading";
import NewsCard from "../fragments/NewsCard";
import PropTypes from "prop-types";

const Content = ({ fetchUrl, category }) => {
  const [page, setPage] = useState(1);
  const {
    data: news,
    isLoading,
    isError,
    error,
    isPreviousData,
    isFetching,
  } = useFetchData(`${fetchUrl}&page=${page}`);

  document.title = `${category} | News App`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  if (isLoading) return <Loading />;

  if (isError) return <Error message={error.message} />;

  if (isFetching) return <Loading />;

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
      <div className="join grid grid-cols-3 mt-10">
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 1}
          className="btn btn-outline join-item"
        >
          ← Previous
        </button>{" "}
        <span className="btn btn-outline join-item">Page {page}</span>
        <button
          onClick={() => {
            if (!isPreviousData) {
              setPage((old) => old + 1);
            }
          }}
          // Disable the Next Page button until we know a next page is available
          disabled={isPreviousData}
          className="btn btn-outline join-item"
        >
          Next →
        </button>
      </div>
    </>
  );
};

Content.propTypes = {
  fetchUrl: PropTypes.string,
  category: PropTypes.string,
};

export default Content;

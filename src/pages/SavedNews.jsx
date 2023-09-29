import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SavedNews = () => {
  const savedNews = useSelector((state) => state.news.data.saved);
  document.title = "Saved News | News App";

  return (
    <div className="min-h-screen w-full">
      <section className="flex w-full flex-col items-center py-2">
        <h2 className="text-2xl font-bold">Saved News</h2>
        <div className="divider mt-2"></div>
      </section>
      <section>
        {savedNews.length > 0 ? (
          /* table */
          <div className="overflow-x-auto">
            <table className="table table-zebra table-pin-rows table-pin-cols table-xs sm:table-md">
              {/* head */}
              <thead>
                <tr className="text-base text-base-content">
                  <th></th>
                  <td>Source</td>
                  <td>Title</td>
                  <td>Description</td>
                </tr>
              </thead>

              {/* body */}
              <tbody>
                {savedNews.map((item, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>
                      <div>
                        {item.source.name} - {item.author}
                      </div>
                      <Link
                        className="link font-bold"
                        to={item.url}
                        target="_blank"
                      >
                        Go to News Page
                      </Link>
                    </td>
                    <td>{item.title}</td>
                    <td>
                      {item.description
                        ? item.description
                        : "Description not found"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h3 className="flex justify-center text-2xl font-bold">
            No Saved News
          </h3>
        )}
      </section>
    </div>
  );
};

export default SavedNews;

import {
  PiArrowRight,
  PiBookmarkSimpleBold,
  PiBookmarkSimpleFill,
  PiCalendarBlankDuotone,
  PiUser,
} from "react-icons/pi";
import { formattedDate } from "../../lib/utils";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { saveNews } from "../../redux/slices/newsSlice";

const NewsCard = ({ news }) => {

  const dispatch = useDispatch();
  const savedNews = useSelector((state) => state.news.data.saved);

  const isNewsSaved = (news) => {
    return savedNews.some((item) => item.title === news.title);
  };

  const handleBookmark = () => {
    dispatch(saveNews(news));
  };
  return (
    <article>
      <div className="card-compact card card-bordered h-[480px] w-80 bg-base-300 shadow-md shadow-black">
        <figure className="h-40 w-full bg-current">
          <img
            src={news.urlToImage ? news.urlToImage : "https://via.placeholder.com/300"}
            alt={news.title}
            className="h-full w-full"
          />
        </figure>
        <div className="card-body">
          <div className="flex gap-4 text-xs">
            <div className="flex items-center gap-1">
              <PiUser size={18} />
              <p>{news.source.name}</p>
            </div>
            <div className="flex items-center gap-1">
              <PiCalendarBlankDuotone size={18} />
              <p>{formattedDate(news.publishedAt)}</p>
            </div>
          </div>
          <h2 className="card-title font-bold">
            <Link target="_blank" to={news.url}>
              {news.title}
            </Link>
          </h2>
          <p>
            {news.description ? news.description.slice(0, 100) + "..." : "Description not found"}
          </p>
          <div className="divider mb-0"></div>
          <div className="card-actions items-center justify-between px-2">
            <button
              onClick={handleBookmark}
              className="btn btn-ghost btn-sm p-0"
              type="button"
            >
              {isNewsSaved(news) ? (
                <PiBookmarkSimpleFill size={28} />
              ) : (
                <PiBookmarkSimpleBold size={28} />
              )}
            </button>
            <Link
              target="_blank"
              to={news.url}
              className="btn btn-outline btn-sm"
              type="button"
            >
              Read More
              <PiArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object.isRequired,
};

export default NewsCard;

import {
  PiArrowRight,
  PiBookmarkSimpleBold,
  PiBookmarkSimpleFill,
  PiCalendarBlankDuotone,
  PiUser,
} from "react-icons/pi";
import { formattedDate } from "../../lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NewsCard = ({ news }) => {
  const [bookmark, setBookmark] = useState(false);
  const handleBookmark = () => {
    setBookmark((prev) => !prev);
  };
  return (
    <article>
      <div className="card-compact card card-bordered h-[480px] w-80 bg-base-300 shadow-md shadow-black">
        <figure className="h-40 w-full bg-current">
          <img
            src={news.urlToImage}
            alt={news.title}
            className="h-full w-full"
          />
        </figure>
        <div className="card-body">
          <div className="flex gap-4 text-xs">
            <div className="flex items-center gap-1">
              <PiUser size={18} />
              <p>{news.author}</p>
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
            {news.description.slice(0, 100)} {"..."}
          </p>
          <div className="divider mb-0"></div>
          <div className="card-actions items-center justify-between px-2">
            <button
              onClick={handleBookmark}
              className="btn btn-ghost btn-sm p-0"
            >
              {bookmark ? (
                <PiBookmarkSimpleFill size={28} />
              ) : (
                <PiBookmarkSimpleBold size={28} />
              )}
            </button>
            <Link
              target="_blank"
              to={news.url}
              className="btn btn-outline btn-sm"
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

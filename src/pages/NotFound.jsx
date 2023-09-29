import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5">
      <h1 className="mb-5 text-7xl font-bold ">Oops!</h1>
      <p className="mb-12 text-center text-lg">{`Sorry, we cannot find the page you are looking for :(`}</p>
      <Link to="/" className=" btn btn-outline">
        {" "}
        Back to main page
      </Link>
    </div>
  );
};

export default NotFound;

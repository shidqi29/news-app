import PropTypes from "prop-types";
const Error = ({ message }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center gap-2">
      <h1 className="text-6xl font-bold">Oops...</h1>
      <h2 className="text-xl mb-4">Something went wrong when fetching data</h2>
      <p className="text-lg">Error: {message}</p>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;

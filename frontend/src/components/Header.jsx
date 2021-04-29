import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between pb-6 border-b border-gray-300">
      <Link to="/" className="text-2xl font-bold hover:text-red-600 active:text-red-700">
        Super awesome blog
      </Link>
      <Link to="/new">
        <button className="px-3 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700">New post</button>
      </Link>
    </header>
  );
};

export default Header;

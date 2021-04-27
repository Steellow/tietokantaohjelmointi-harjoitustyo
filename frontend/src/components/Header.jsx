import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="pb-6 border-b border-gray-300">
      <Link to="/" className="text-2xl font-bold hover:text-red-600 active:text-red-700">
        Super awesome blog
      </Link>
      {/* TODO: Search bar */}
    </header>
  );
};

export default Header;

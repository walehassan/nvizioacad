import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-bold">
            Home
          </Link>
          <Link to="/signup" className="text-xl font-bold">
            Sign Up
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/dashboard" className="hover:text-blue-600">
              Dashboard
            </Link>
            <Link to="/academypage" className="hover:text-blue-600">
              Academy
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
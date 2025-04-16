import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-purple-900 shadow-lg z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex space-x-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `px-3 py-2 rounded-md text-sm font-medium transition ${isActive ? 'bg-purple-700 text-white' : 'text-purple-200 hover:bg-purple-800 hover:text-white'}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/simulation" 
            className={({ isActive }) => 
              `px-3 py-2 rounded-md text-sm font-medium transition ${isActive ? 'bg-purple-700 text-white' : 'text-purple-200 hover:bg-purple-800 hover:text-white'}`
            }
          >
            Simulation
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `px-3 py-2 rounded-md text-sm font-medium transition ${isActive ? 'bg-purple-700 text-white' : 'text-purple-200 hover:bg-purple-800 hover:text-white'}`
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

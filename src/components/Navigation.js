import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-purple-900/80 backdrop-blur-lg shadow-lg z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
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
          <NavLink 
            to="/how-to-use" 
            className={({ isActive }) => 
              `flex items-center px-3 py-2 rounded-md text-sm font-medium transition ${isActive ? 'bg-purple-700 text-white' : 'text-purple-200 hover:bg-purple-800 hover:text-white'}`
            }
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            How to Use
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

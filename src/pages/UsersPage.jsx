import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  fetchUsers, 
  setSearchTerm, 
  setSortCriteria, 
  setMockUsers,
  selectFilteredUsers 
} from '../features/users/userListingSlice';

const UsersPage = () => {
  const dispatch = useDispatch();
  const { loading, error, searchTerm, sortBy, sortDirection } = useSelector(state => state.userListing);
  const filteredUsers = useSelector(selectFilteredUsers);
  const [useMockData, setUseMockData] = useState(false);

  useEffect(() => {
    if (useMockData) {
      dispatch(setMockUsers());
    } else {
      dispatch(fetchUsers()).catch(() => {
        // If API fails, switch to mock data
        setUseMockData(true);
      });
    }
  }, [dispatch, useMockData]);

  // Handle search input change
  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  // Handle sort change
  const handleSortChange = (field) => {
    const newDirection = field === sortBy && sortDirection === 'asc' ? 'desc' : 'asc';
    dispatch(setSortCriteria({ sortBy: field, sortDirection: newDirection }));
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold mb-2 text-white">Users Directory</h1>
        <p className="text-gray-300 mb-4">Browse and search users in the Poverty Line Project</p>
        
        {/* Search and filter controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-grow">
            <input
              type="text"
              placeholder="Search by name or email..."
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => handleSortChange('name')} 
              className={`px-3 py-2 rounded ${sortBy === 'name' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
            >
              Name {sortBy === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
            </button>
            <button 
              onClick={() => handleSortChange('email')} 
              className={`px-3 py-2 rounded ${sortBy === 'email' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
            >
              Email {sortBy === 'email' && (sortDirection === 'asc' ? '↑' : '↓')}
            </button>
          </div>
        </div>
      </div>

      {/* Loading and error states */}
      {loading && (
        <div className="flex justify-center items-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      
      {error && (
        <div className="bg-red-800 text-white p-4 rounded mb-6">
          <p className="font-bold">Error:</p>
          <p>{error}</p>
          {!useMockData && (
            <button 
              onClick={() => setUseMockData(true)} 
              className="mt-2 bg-red-700 hover:bg-red-600 text-white py-1 px-3 rounded"
            >
              Use Sample Data Instead
            </button>
          )}
        </div>
      )}

      {/* Users list */}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <div key={user.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <div className="p-5 border-b border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{user.name}</h3>
                    <span className="bg-blue-600 text-xs text-white px-2 py-1 rounded-full">ID: {user.id}</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-1">
                    <span className="font-semibold">Email:</span> {user.email}
                  </p>
                </div>
                <div className="bg-gray-900 p-4 flex justify-between items-center">
                  <Link 
                    to={`/user/${user.id}`} 
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    View Profile
                  </Link>
                  <Link 
                    to={`/records/${user.id}`} 
                    className="bg-blue-600 hover:bg-blue-500 text-white text-sm py-1 px-3 rounded"
                  >
                    View Records
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-xl text-gray-400">No users found matching your search criteria.</p>
            </div>
          )}
        </div>
      )}

      {/* Data source indicator */}
      {useMockData && (
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Currently displaying sample data. The API connection is not available.</p>
        </div>
      )}
    </div>
  );
};

export default UsersPage;

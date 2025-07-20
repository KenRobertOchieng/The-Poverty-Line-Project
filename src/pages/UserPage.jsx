import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById, setMockUsers } from '../features/users/userListingSlice';

const UserPage = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedUser, users, loading, error } = useSelector(state => state.userListing);
  const [useMockData, setUseMockData] = useState(false);

  useEffect(() => {
    if (!userId) {
      navigate('/users');
      return;
    }

    if (useMockData) {
      dispatch(setMockUsers());
    } else {
      dispatch(fetchUserById(userId)).catch(() => {
        setUseMockData(true);
      });
    }
  }, [dispatch, userId, navigate, useMockData]);

  // Find user from the users list if selectedUser is not available
  const user = selectedUser || (users.find(u => u.id === parseInt(userId)) || {});

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="container mx-auto py-20 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="mb-6">
        <Link to="/users" className="text-blue-500 hover:text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Users List
        </Link>
      </div>

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

      {user && user.id ? (
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-700">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">{user.username}</h1>
                <p className="text-gray-300">{user.email}</p>
              </div>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">ID: {user.id}</span>
            </div>
          </div>
          
          <div className="p-6 bg-gray-900">
            <h2 className="text-xl font-semibold text-white mb-4">User Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded">
                <p className="text-gray-400 text-sm">Joined</p>
                <p className="text-white">{formatDate(user.timestamp)}</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded">
                <p className="text-gray-400 text-sm">Status</p>
                <p className="text-white">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  Active
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-gray-800 border-t border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4">Actions</h2>
            
            <div className="flex flex-wrap gap-3">
              <Link 
                to={`/records/${user.id}`} 
                className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded"
              >
                View Records
              </Link>
              
              <Link 
                to={`/profile/${user.id}`} 
                className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded"
              >
                View Profile
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-800 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-white mb-2">User Not Found</h2>
          <p className="text-gray-300 mb-6">The user you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/users" 
            className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded inline-block"
          >
            Go to Users List
          </Link>
        </div>
      )}
      
      {useMockData && (
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Currently displaying sample data. The API connection is not available.</p>
        </div>
      )}
    </div>
  );
};

export default UserPage;

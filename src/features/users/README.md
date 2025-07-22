# Users Page & User Listing Implementation

This directory contains the implementation of the Users Page and User Listing functionality for the Poverty Line Project.

## Files

- `userListingSlice.js`: Redux slice for managing user data state
- `UsersPage.jsx`: React component for displaying a list of users
- `UserPage.jsx`: React component for displaying individual user details

## Features

### User Listing Slice

The `userListingSlice.js` file provides:

- State management for users data
- API integration for fetching users
- Search and filtering functionality
- Sorting capabilities
- Mock data fallback when API is unavailable

### Users Page

The `UsersPage.jsx` component includes:

- A responsive grid layout for displaying users
- Search functionality to filter users by username or email
- Sorting options for different user fields
- Error handling with fallback to mock data
- Links to individual user profiles and records

### User Page

The `UserPage.jsx` component includes:

- Detailed view of a single user
- Links to related records and profile
- Error handling with fallback to mock data
- Navigation back to the users list

## API Endpoints

The backend provides the following API endpoints:

- `GET /api/users`: Get all users
- `GET /api/users/:id`: Get a specific user by ID
- `GET /api/records/user/:id`: Get all records for a specific user

## Implementation Notes

- The implementation uses Redux Toolkit for state management
- React Router is used for navigation between pages
- The UI is built with responsive design principles
- Error handling includes fallback to mock data when the API is unavailable
- The design follows the project's color scheme and styling guidelines
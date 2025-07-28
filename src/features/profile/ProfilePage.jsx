// src/components/ProfilePage.jsx
import React, { useState } from 'react';
import ProfileForm from './ProfileForm';

function ProfilePage() {
  const [profile, setProfile] = useState(null);

  const handleProfileSubmit = (data) => {
    setProfile(data);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Profile Page</h1>
      <ProfileForm onSubmit={handleProfileSubmit} />
      {profile && (
        <div className="mt-4">
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;

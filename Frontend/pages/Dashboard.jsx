import React, { useState } from 'react';
import PostForm from '../components/PostForm.jsx';
import PostList from '../components/PostList.jsx';
import { useAuth } from '../context/AuthContext.jsx';

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const { user, logout } = useAuth();

  if (!user) {
    return <div>Please log in to access the dashboard.</div>;
  }

  return (
    <div className="dashboard">
      <header>
        <h1>Dashboard</h1>
        <div>
          <span>Welcome, {user.name}</span>
          <button onClick={logout}>Logout</button>
        </div>
      </header>
      
      <div className="dashboard-content">
        <button 
          onClick={() => setShowForm(!showForm)}
          className="create-post-btn"
        >
          {showForm ? 'Cancel' : 'Create New Post'}
        </button>
        
        {showForm && (
          <PostForm onSuccess={() => setShowForm(false)} />
        )}
        
        <PostList />
      </div>
    </div>
  );
};

export default Dashboard;

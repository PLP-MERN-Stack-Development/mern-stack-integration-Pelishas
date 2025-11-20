import PostList from '../components/PostList.jsx';
import { useAuth } from '../context/AuthContext.jsx';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="home-page">
      <header>
        <h1>MERN Blog</h1>
        {user ? (
          <p>Welcome back, {user.name}!</p>
        ) : (
          <p>Welcome to our blog platform</p>
        )}
      </header>
      
      <main>
        <PostList />
      </main>
    </div>
  );
};

export default Home;
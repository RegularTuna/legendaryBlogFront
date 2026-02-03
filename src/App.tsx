import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import PostDetail from './pages/PostDetail';
import { Link } from 'react-router-dom';
// Temporary components for testing
const Home = () => (
  <>
    <h1 className="text-2xl font-bold">Latest Stories</h1>;
    <Link to="/post/1">
    Read
    </Link>
  </>

);
const Analytics = () => <h1 className="text-2xl font-bold">Blog Analytics</h1>;
const Profile = () => <h1 className="text-2xl font-bold">User Profile</h1>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="profile" element={<Profile />} />
        <Route path="post/:id" element={<PostDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
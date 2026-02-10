import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import PostDetail from './pages/PostDetail';
import { Link } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import { AllPosts } from './pages/AllPosts';
// Temporary components for testing



function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="post/:id" element={<PostDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About/>} />
        <Route path="allposts" element={<AllPosts/> }/>
        
      </Route>
    </Routes>
  );
}

export default App;
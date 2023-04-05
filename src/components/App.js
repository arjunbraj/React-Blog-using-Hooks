// import logo from './logo.svg';
// import './App.css';
// import {Switch} from 'react-router';
import {Routes, Route} from 'react-router-dom';
import {Navbar, Home, PostDetail, CreatePost} from './';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/post/:postId' Component={PostDetail} />
        <Route path='/create-post' Component={CreatePost} />
      </Routes>
    </div>
  );
}

export default App;

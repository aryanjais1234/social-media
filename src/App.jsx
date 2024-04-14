import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import PostListProvider from './store/Post_List_Store';
import './App.css'

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className='app-container'>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
        <div className="content">
          <Header></Header>
          <div className="post-class">
            {selectedTab === "Home" ? (<PostList></PostList>) : (<CreatePost></CreatePost>)}
          </div>
          <Footer/>
        </div>
      </div>
    </PostListProvider>
  )
}

export default App

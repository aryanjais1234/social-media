import { useContext, useEffect, useState } from "react";
import Post from "./Post"
import {PostList as PostListData} from "../store/Post_List_Store";
import Welcome from "./Welcome";
import LoadingSpinner from "./LoadingSpinner";
function PostList() {
  const {postList, addInitialPost}= useContext(PostListData);
  const [fetching, setFetching] = useState(false);
  useEffect(()=>{
    const controller = new AbortController();
    const signal = controller.signal;
    setFetching(true);
    fetch('https://dummyjson.com/posts',{signal})
    .then(res => res.json())
    .then(data=>{
      addInitialPost(data.posts );
      setFetching(false);
    });
    return () => {
      controller.abort();
    }
  },[])

  return (
    <div>

      {fetching && <LoadingSpinner/>}
      {!fetching && postList.length==0 && <Welcome/>}
      {!fetching && postList.map((post)=>(
        <Post key={post.id} post={post}/>
      ))}
    </div>
  );
};

export default PostList;
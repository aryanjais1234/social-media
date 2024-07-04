import { useContext, useEffect, useState } from "react";
import Post from "./Post"
import {PostList as PostListData} from "../store/Post_List_Store";
import Welcome from "./Welcome";
import LoadingSpinner from "./LoadingSpinner";
function PostList() {
  const {postList, fetching}= useContext(PostListData);
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
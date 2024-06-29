import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPost: () => {},
  deletePost: () => {}
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if(action.type==='DELETE_POST'){
    newPostList = currPostList.filter((post) => post.id!==action.payload.postId);
  }
  else if(action.type==='ADD_POST'){
    newPostList = [action.payload, ...currPostList];
  }
  else if(action.type==='ADD_INITIAL_POST'){
    newPostList = action.payload.posts;
  }
  return newPostList;
}

const PostListProvider = ({children}) => {

  const [postList, dispatchPostList]= useReducer(postListReducer, [])
  const addPost = (userId, title, body, reactions, tags) => {
    dispatchPostList({
      type:'ADD_POST',
      payload:{
        id:Date.now(),
        title: title,
        body: body,
        reaction:reactions,
        userId: userId,
        tags:tags,
      },
    })
  }

  const addInitialPost = (posts) => {
    dispatchPostList({
      type:'ADD_INITIAL_POST',
      payload:{
        posts,
      },
    })
  }

  const deletePost = (postId) => {
    dispatchPostList({
      type:'DELETE_POST',
      payload:{
        postId,
      },
    })
  }


  return <PostList.Provider value = {{ postList,addPost,addInitialPost,deletePost,}
  }>
    {children}
  </PostList.Provider>
}



export default PostListProvider;
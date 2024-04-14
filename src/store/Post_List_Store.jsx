import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
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
  return newPostList;
}

const PostListProvider = ({children}) => {

  const [postList, dispatchPostList]= useReducer(postListReducer, DEFAULT_POST_LIST)
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

  const deletePost = (postId) => {
    dispatchPostList({
      type:'DELETE_POST',
      payload:{
        postId,
      },
    })
  }


  return <PostList.Provider value = {{ postList,addPost,deletePost,}
  }>
    {children}
  </PostList.Provider>
}

const DEFAULT_POST_LIST = [{
    id:'1',
    title:'Going to Mumbai',
    body:'Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out',
    reaction:12,
    userId:'user-9',
    tags:["vacation","Mumbai","Enjoying"],
  },
  {
    id:'2',
    title:'Going to Goa',
    body:'Hi Friends, I am going to Goa for my vacations. Hope to enjoy a lot. Peace out',
    reaction:22,
    userId:'user-9',
    tags:["vacation","Goa","Enjoying"],
  },
  {
    id:'3',
    title:'Going to Delhi',
    body:'Hi Friends, I am going to Delhi for my vacations. Hope to enjoy a lot. Peace out',
    reaction:20,
    userId:'user-9',
    tags:["vacation","Delhi","Enjoying"],
  },
  {
    id:'4',
    title:'Going to Bangalore',
    body:'Hi Friends, I am going to Bangalore for my vacations. Hope to enjoy a lot. Peace out',
    reaction:33,
    userId:'user-9',
    tags:["vacation","Bangalore","Enjoying"],
  },
];

export default PostListProvider;
import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/Post_List_Store";
const CreatePost = () =>{

  const {addPost} = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = postTitleElement.current.value;
    const body = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(' ');

    userIdElement.current.value = '';
    postTitleElement.current.value = '';
    postBodyElement.current.value = '';
    reactionsElement.current.value = '';
    tagsElement.current.value = '';
    
    addPost(userId, title, body, reactions, tags);
  }
  return(
    <form className="create-post" onSubmit={handleSubmit}>
  <div class="mb-3">
    <label htmlFor="userId" class="form-label">Enter Ypur User Id</label>
    <input type="text" class="form-control" id="userId"
    placeholder="Your User Id"
    ref={userIdElement}
    />
  </div>
  <div class="mb-3">
    <label htmlFor="title" class="form-label">Post Title</label>
    <input type="text" class="form-control" id="title"
    placeholder="How are you feeling today..."
    ref={postTitleElement}
    />
  </div>
  <div class="mb-3">
    <label htmlFor="body" class="form-label">Post Content</label>
    <textarea rows="4" type="text" class="form-control" id="body"
    placeholder="Tell us more about it"
    ref={postBodyElement}
    />
  </div>
  <div class="mb-3">
    <label htmlFor="reactions" class="form-label">Number of Reactions</label>
    <input type="text" class="form-control" id="reactions"
    placeholder="How may people reacted to this post..."
    ref={reactionsElement}
    />
  </div>
  <div class="mb-3">
    <label htmlFor="tags" class="form-label">Enter your hashtags here </label>
    <input type="text" class="form-control" id="tags"
    placeholder="PLease enter tags using space"
    ref={tagsElement}
    />
  </div>
  <button type="submit" class="btn btn-primary">Post</button>
</form>
  )
}
export default CreatePost;
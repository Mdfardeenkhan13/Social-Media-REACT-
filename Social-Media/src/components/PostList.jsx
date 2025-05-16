import Post from "./Post";
import { PostList as PostListData } from './../store/post-list-store';
import { useContext } from "react";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
    const {postList, addInitialPosts} = useContext(PostListData);

    const handleGetPostsclick = () => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => addInitialPosts(data.posts));
    }

    return (
        <>
        {postList.length === 0 && <WelcomeMessage onGetPostsClick={handleGetPostsclick} />}
        {postList.map((post) => (
            <Post key={post.id} post={post}></Post>
        ))}
        </>
    );
};

export default PostList;
import Post from "./Post";
import { PostList as PostListData } from './../store/post-list-store';
import { useContext, useState } from "react";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
    const {postList, addInitialPosts} = useContext(PostListData);

    const [dataFetching, setDataFetching] = useState(false);

    if(!dataFetching) {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => addInitialPosts(data.posts));
            setDataFetching(true);
    }

    return (
        <>
        {postList.length === 0 && <WelcomeMessage />}
        {postList.map((post) => (
            <Post key={post.id} post={post}></Post>
        ))}
        </>
    );
};

export default PostList;
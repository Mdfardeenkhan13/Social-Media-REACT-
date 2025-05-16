import Post from "./Post";
import { PostList as PostListData } from './../store/post-list-store';
import { useContext, useEffect, useState } from "react";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
    const {postList, addInitialPosts} = useContext(PostListData);

    useEffect (() => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => addInitialPosts(data.posts));
    }, [])

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
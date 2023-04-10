import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SinglePost from './SinglePost';
import { showPosts } from './PostSlice';
// import callApi from '../../utils/axios/useAPI';
import postReducer from './PostSlice';


const PostView = () => {
    //@ts-ignore
    const posts: any = useSelector((state) => state.postReducer.posts)
    // const posts = useSelector((state) => console.log(state));
    console.log(posts);
    const dispatch = useDispatch();

    // const [posts, setPosts] = useState('');
    // useEffect(() => {
    //     fetch('http://localhost:3333/posts')
    //         .then((res) => res.json())
    //         .then((data) => setPosts(data))
    // }, []);




    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3333/posts')
            const data = await response.json();
            dispatch(showPosts(data))
        }
        fetchData()
    }, [])


    return (
        <div className='post_view_section'>
            <h2 className='post-title'>Lists of Posts</h2>
            {
                posts && posts.map((post) => <SinglePost post={post} key={post.id}></SinglePost>)
                // posts && posts.map((post, index) => <SinglePost post={post} key={index}></SinglePost>)
            }
        </div>
    );
};

export default PostView;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addPosts, showPosts } from './PostSlice';
import callApi from '../../utils/axios/useAPI';


const AddPost = () => {
    const [newPosts, setNewPosts] = useState("");
    const dispatch = useDispatch();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const addPost = await callApi('posts', 'post', { user_id: 10, post_text: newPosts, disabled: false })
        const response = await callApi('posts','get')
        dispatch(showPosts(response))
        setNewPosts('');
    }


    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const addPost = await fetch('http://localhost:3333/posts', {
    //         method: "POST",
    //         headers: { 'Content-type': 'application/json; charset=UTF-8' },
    //         body: JSON.stringify({
    //             user_id: 10,
    //             post_text: newPosts,
    //             disabled: false,
    //             // like_count: 20,
    //         }),
    //     })

    //     const response = await fetch('http://localhost:3333/posts')
    //     const data = await response.json();
    //     dispatch(showPosts(data))
    //     setNewPosts('');
    // }



    return (
        <div className='post-container'>
            <h2 className='post-title'>Create post</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className='form-field'>
                    <input type="text" placeholder='Want to post something?....' value={newPosts} onChange={(e) => setNewPosts(e.target.value)} required />
                </div>
                <div className='btn_group'>
                    <button className='btn submit_btn'>Create Post</button>
                </div>
            </form>

        </div>
    );
};

export default AddPost;

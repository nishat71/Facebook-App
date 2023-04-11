import React, { useState } from 'react'
import SingleComment from './SingleComment';
import { useDispatch } from 'react-redux';
import { addComment, showPosts } from './PostSlice';
import { v4 as uuidv4 } from 'uuid';
import callApi from '../../utils/axios/useAPI';


const Comments = (props) => {
    const { comment, postId } = props;
    // console.log(comment, postId);


    // const [comment, setComment] = useState("");
    const [comments, setComments] = useState('');
    const dispatch = useDispatch()
    const isCommentTextDisabled = comments.length === 0;



    const handleCommentSubmit = async (e) => {
        e.preventDefault();

        const commentPost = await callApi('comments', 'post', { post_id: postId, comment_text: comments })
        const response = await callApi('posts', 'get')
        dispatch(showPosts(response))
        setComments('');
    }


    return (
        <div>
            <div className='comment_section'>
                <form className='comment_content' onSubmit={handleCommentSubmit}>
                    <input type="text" className='comment_field' placeholder='Write a Comment.....' value={comments} onChange={(e) => setComments(e.target.value)} />
                    {
                        comments &&
                        <button type='submit' className='comment_btn' disabled={isCommentTextDisabled}>Send</button>
                    }
                </form>
                <div className='comment-show'>
                    {
                        // comment.map((singleCmnt) => <SingleComment singleCmnt={singleCmnt} key={singleCmnt.commentId}></SingleComment>)
                        comment.map((singleCmnt, index) => <SingleComment singleCmnt={singleCmnt} key={index}></SingleComment>)
                    }

                </div>
            </div>
        </div>
    )
}
export default Comments




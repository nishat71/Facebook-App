import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faThumbsUp, faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addReply } from './PostSlice';
import { v4 as uuidv4 } from 'uuid';
import callApi from '../../utils/axios/useAPI';

const AddSingleReply = (props) => {
    console.log(props);

    const [SingleReply, setSingleReply] = useState('');
    const dispatch = useDispatch();
    // const [isLike, setIsLike] = useState(false);


    const handleReplySubmit = (e) => {
        e.preventDefault();
        // const replyInfo = { replyId:uuidv4(), replyText: SingleReply }
        // dispatch(addReply(replyInfo));
        // setSingleReply("");
        callApi('replies', 'post', { reply_text: SingleReply })

            .then((response) => response.json())
            .then((json) => console.log(json));
        setSingleReply("")
    }

    return (
        <div className='reply_comment'>
            <div className='reply_comment_body'>
                <form className='comment_content' onSubmit={handleReplySubmit}>
                    <input type="text" className='reply_field' placeholder='Write a reply.....' value={SingleReply} onChange={(e) => setSingleReply(e.target.value)} required />
                    <button className='btn'><FontAwesomeIcon icon={faPaperPlane} /></button>
                </form>
                <div>
                    <button className='like_reply_btn'>Like</button>
                    <button className='like_reply_btn'>Reply</button>
                </div>
            </div>
        </div>

    );
};


export default AddSingleReply;
import React from 'react';
import { Form, Button } from 'semantic-ui-react';

function CommentForm(props) {
    const { openCommentForm, handleSubmitComment, handleNewContent, submitContent, user} = props;


    return (
        <div>
            {openCommentForm ? 
                    <Form name='create-comment-form' reply onSubmit={handleSubmitComment}>
                        <h4> Posting as: {user.username}</h4>
                        <Form.TextArea onChange={handleNewContent} value={submitContent} />
                        <Button type="submit" content="Add Comment" labelPosition='left' icon='edit' primary />
                    </Form> : null }
        </div>

    )
}

export default CommentForm;
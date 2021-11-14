import React, { useState } from 'react';
import { Comment, Header, Container, Form, Button } from 'semantic-ui-react';
import CommentForm from './CommentForm';

function CommentsSection(props) {
    const { commentsArray, user, mashupId, getComments } = props;
    
    const [openCommentsSection, setOpenCommentsSection] = useState(false)
    const [openCommentForm, setOpenCommentForm] = useState(false)

    const [submitContent, setSubmitContent] = useState("")

    const allCommentsFormat = commentsArray.map((comment) => (
        <Comment>
            <Comment.Avatar src={comment.user.profile_picture} />
            <Comment.Content>
                <Comment.Author style={{ color: "red"}} as='a' href={`/user_profile/${comment.user.id}`}>{comment.user.username}</Comment.Author>
                <Comment.Text>{comment.content}</Comment.Text>
                { user.id === comment.user.id ?
                    <Button onClick={() => handleDeleteComment(comment.id)} >Delete Comment</Button>
                : null }
                </Comment.Content>
        </Comment>
    ))

    function handleSubmitComment(event) {
        event.preventDefault();

        const commentSubmission = {
            content: submitContent,
            user_id: user.id,
            mashup_id: mashupId
        }
        handlePostNewComment(commentSubmission).then(() => {
            setOpenCommentForm(false);
            getComments();
            setOpenCommentsSection(true);
            setSubmitContent("");
        });
    }

    function handlePostNewComment(comment) {
        return fetch(`/comments`, { 
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
            },
            body: JSON.stringify(comment)
        })
    }

    function handleNewContent(event) {
        setSubmitContent(event.target.value)
    }

    function deleteComment(commentId) {
        fetch(`/comments/${commentId}`, {
            method: "DELETE",
        })
    }

    function handleDeleteComment(commentId) {
        deleteComment(commentId);
        getComments();
    }

    return (
        <div>
            <Button onClick={() => setOpenCommentsSection(!openCommentsSection)}> {openCommentsSection ? 'Close Comments Section' : "Open Comments Section"} </Button>
            {localStorage.getItem("isLoggedIn") ? 
                    <Button onClick={() => setOpenCommentForm(!openCommentForm)}> {openCommentForm ? 'Close comment form' : 'Add a Comment'} </Button>                
                : null }   
            <br />
            <br />
            {openCommentsSection ? 
            <Container style={{ display: 'flex', justifyContent: 'center' }}>
                <Comment.Group >
                    <Header as='h3' dividing>
                        Comments:
                    </Header>
                    {allCommentsFormat}
                <br/>
            </Comment.Group>
            </Container>
            : null }
            {localStorage.getItem("isLoggedIn") ?
                <Container style={{ display: 'flex', justifyContent: 'center' }}>
                    <CommentForm openCommentForm={openCommentForm} handleSubmitComment={handleSubmitComment} handleNewContent={handleNewContent} submitContent={submitContent} user={user} />
                </Container>
            : null}
        </div>
    )
}

export default CommentsSection;
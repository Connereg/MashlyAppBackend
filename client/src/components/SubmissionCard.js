import React, {useEffect, useState, Link } from 'react';
import { Card, Button } from 'semantic-ui-react';


function SubmissionCard(props) {
    const {id, user_id, user, title, category, youtubeurl1, youtubeurl2, setCardLink1, setCardLink2, setRenderToggle, renderToggle} = props;

    const [cardColor, setCardColor] = useState(false)

    const colorOption = (cardColor ? "red" : "blue")

    // function handleClickCard() {
    //     setCardLink1(youtubeurl1)
    //     setCardLink2(youtubeurl2)
    //     setCardColor(!cardColor);
    // }

    function handleDestroySubmission() {
        fetch(`/mashups/${id}`, {
            method: 'DELETE',
        }).then( setRenderToggle(!renderToggle) )
    }

    
return (
    // <Link to={`/mashups/${id}`}>
        <Card color={colorOption} >
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>{category}</Card.Meta>
                <Card.Description>
                    Video Url 1: {youtubeurl1}
                    <br/>
                    Video Url 2: {youtubeurl2}
                    <br />
                    {user_id === user.id ? <Button color="red" onClick={() => handleDestroySubmission()}> Delete Entry </Button> : null}
                </Card.Description>
            </Card.Content>
        </Card>
    // </Link>
    
    )
}

export default SubmissionCard;
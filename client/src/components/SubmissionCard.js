import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'semantic-ui-react';
import MashupProfile from './MashupProfile'
import LinkToMashupButton from './LinkToMashupButton';

function SubmissionCard(props) {
    const {id, user_id, user, title, category, youtubeurl1, youtubeurl2, setCardLink1, setCardLink2, setProfileRenderToggle, profileRenderToggle } = props;

    const [cardColor, setCardColor] = useState(false)

    const colorOption = (cardColor ? "red" : "blue")

    function handleClickCard() {
        setCardLink1(youtubeurl1)
        setCardLink2(youtubeurl2)
        setCardColor(!cardColor);
    }

    function handleDestroySubmission() {
        fetch(`/mashups/${id}`, {
            method: 'DELETE',
        }).then( setProfileRenderToggle(!profileRenderToggle) )
    }

    
return (
        <Card color={colorOption} onClick={handleClickCard}>
            <Card.Content >
                <Card.Header>{title}</Card.Header>
                <Card.Meta>{category}</Card.Meta>
                <Card.Description>
                    Video Url 1: {youtubeurl1}
                    <br/>
                    Video Url 2: {youtubeurl2}
                    <br/>
                    <br/>
                    <LinkToMashupButton id={id} />
                    <br />
                    {user_id === user.id ?
                        <Link to={`/mashup_deletion`}>
                        <Button color="red" onClick={() => handleDestroySubmission()}> Delete Entry </Button>
                        </Link> : null}
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default SubmissionCard;
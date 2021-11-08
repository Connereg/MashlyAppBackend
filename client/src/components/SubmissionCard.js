import React, {useEffect, useState} from 'react';
import { Image, Form, Button, Card } from 'semantic-ui-react';

function SubmissionCard(props) {
    const {id, mashupid, category, youtubeurl1, youtubeurl2, setCardLink1, setCardLink2} = props;

    const [cardColor, setCardColor] = useState(false)

    const colorOption = (cardColor ? "red" : "blue")

    function handleClickCard() {
        setCardLink1(youtubeurl1)
        setCardLink2(youtubeurl2)
        setCardColor(!cardColor);
    }

    
return (
    <Card color={colorOption} onClick={handleClickCard}>
            <Card.Content>
                <Card.Header>Test Title</Card.Header>
                <Card.Meta>{category}</Card.Meta>
                <Card.Description>
                    Video Url 1: {youtubeurl1}
                    <br/>
                    Video Url 2: {youtubeurl2}
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default SubmissionCard;
import React, {useEffect, useState, Link } from 'react';
import { Card, Button, Image } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom'


function UserCard(props) {
    const {id, profile_picture, username} = props;

    const history = useHistory();

    function handleUserProfileLink() {
        history.push(`user_profile/${id}`)
    }

return (
    
    
        <Card >
            <Card.Content >
                <Card.Header>{username}</Card.Header>
                <Image circular centered size="small" src={profile_picture} alt="card_profile_pic" ></Image>
                <br />
                <br />
                <Button onClick={handleUserProfileLink}> User Profile </Button>
            </Card.Content>
        </Card>
    
    
    )
}

export default UserCard;
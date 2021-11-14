import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';


function MashupDeletion(props) {
    const { user } = props;
    
    return(
        <div >
            <h1> Your Mashup has been successfully deleted, use the 'Submit New Mashup' feature to create another Mashup!

            </h1>
            <Link to={`/user_profile/${user.id}`}>
                <Button>Return to {user.username}'s profile</Button>
            </Link>
        </div>
    )
}

export default MashupDeletion;
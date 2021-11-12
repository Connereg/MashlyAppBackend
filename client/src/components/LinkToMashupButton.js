import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react';


function LinkToMashupButton(props) {
    const { id } = props;

    return(
        <div>
            <Link to={`/mashup_profile/${id}`}>
                <Button color="green"> See Mashup Profile</Button>
            </Link>
        </div>
    )
}

export default LinkToMashupButton;

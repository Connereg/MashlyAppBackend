import React from 'react';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';


function ProfileDeletion(props) {
    
    return(
        <div >
         <h1> Your User Profile has been successfully deleted, as well as your generated mashups.
             <br /> Please sign up again if you wish to create more mashups!
         </h1>
            <br/>
            <Link to="/">
                <Button>Return to home screen</Button>
            </Link>
        </div>
    )
}

export default ProfileDeletion;
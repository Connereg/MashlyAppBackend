import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import MashupProfileViewer from './MashupProfileViewer';
import CommentsSection from './CommentsSection';

function MashupProfile(props) { 
    const { user } = props;
    
    const [mashup, setMashup] = useState()
    const [commentsArray, setCommentsArray] = useState([])

    const id = parseInt(useParams().id);

    useEffect(() => {
        getMashup();
        getComments();
    }, [])

    function getMashup() {
        fetch(`/mashups/${id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include', // INCLUDE THIS IN EVERY REQUEST THAT NEEDS AUTH   
        })
        .then((r) => r.json())
        .then((mashupData) => setMashup(mashupData))
    }

    function getComments() {
        fetch(`/comments/${id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include', // INCLUDE THIS IN EVERY REQUEST THAT NEEDS AUTH
        })
        .then((r) => r.json())
        .then((commentsData) => setCommentsArray(commentsData))
    }



    return (
        <div>
        {mashup && 
            (<>
                <h1>{mashup.title}</h1>
                <h3>Category: {mashup.category}</h3>
                <p> Created by: {mashup.user.username}</p>
                <CommentsSection commentsArray={commentsArray} user={user} mashupId={id} getComments={getComments}/>
                <MashupProfileViewer cardLink1={mashup.youtubeurl1} cardLink2={mashup.youtubeurl2} />
            </>)
        }
        </div>
    )
}

export default MashupProfile;
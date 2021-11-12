import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import MashupProfileViewer from './MashupProfileViewer'

function MashupProfile(props) { 
    
    const [mashup, setMashup] = useState({})
    
    const [cardLink1, setCardLink1] = useState("")
    const [cardLink2, setCardLink2] = useState("")

    const id = parseInt(useParams().id);
    let history = useHistory();

    useEffect(() => {
        fetch(`/mashups/${id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include', // INCLUDE THIS IN EVERY REQUEST THAT NEEDS AUTH   
        })
        .then((r) => r.json())
        .then((mashupData) => setMashup(mashupData))
    }, [])


    return (
        <div>
            <h1>{mashup.title}</h1>
            <h3>{mashup.category}</h3>
            {/* <p> Created by: {mashup.user.username}</p> */}
            <p> youtubeurl1: {mashup.youtubeurl1}</p>
            <p> youtubeurl2: {mashup.youtubeurl2}</p>
            <MashupProfileViewer cardLink1={mashup.youtubeurl1} cardLink2={mashup.youtubeurl2} />
        </div>
    )
}

export default MashupProfile;
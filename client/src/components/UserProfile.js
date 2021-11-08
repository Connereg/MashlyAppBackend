import React, {useEffect, useState} from 'react'
import { Image, Form, Button, Card } from 'semantic-ui-react'
import MasherTool from './MasherTool'
import SubmissionCard from './SubmissionCard'

function UserProfile(props) {
	const [search, setSearch] = useState("")
	const {user, renderToggle, setRenderToggle} = props;

    const [mySubmissions, setMySubmissions] = useState([])
    

    const [cardLink1, setCardLink1] = useState("")
    const [cardLink2, setCardLink2] = useState("")
    
  
	// const results = (allNotes.filter ((note) => search === "" ||
	// note.title.toLowerCase().includes(search.toLowerCase()) || 
	// note.user.name.toLowerCase().includes(search.toLowerCase())
	// ))

    useEffect(() => {
        fetchUserSubmissions();
    }, [renderToggle]);
    


    function fetchUserSubmissions() {
        fetch(`/my_submissions`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include', // INCLUDE THIS IN EVERY REQUEST THAT NEEDS AUTH
        })
        .then((r) => r.json())
        .then((submissionData) => 
        setMySubmissions(submissionData.map((submit) => (submit))))
    }
    
    const submissionCards = mySubmissions.map((submit) => (
        <SubmissionCard
            key={submit.id}
            id={submit.id}
            mashupid={submit.mashup.id}
            category={submit.category}
            youtubeurl1={submit.mashup.youtubeurl1}
            youtubeurl2={submit.mashup.youtubeurl2}
            setCardLink1={setCardLink1}
            setCardLink2={setCardLink2}
        />

         ));

	return (
        <>
		<div>
            <Image circular centered size="medium" src={user.profile_picture} alt="profile_pic" ></Image>
            <h2>{user.username}</h2>
            <Button onClick={fetchUserSubmissions} > Fetch Submissions </Button>
            <br/>
            <Card.Group>
                {submissionCards}
            </Card.Group>
        </div>
        <br/>
        <MasherTool cardLink1={cardLink1} cardLink2={cardLink2}/>
        </>
	)
}

export default UserProfile;
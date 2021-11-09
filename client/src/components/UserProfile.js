import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Image, Form, Button, Card } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import MashViewer from './MashViewer'
import SubmissionCard from './SubmissionCard'

function UserProfile(props) {
	const {user, renderToggle, setRenderToggle} = props;
    
    const [owner, setOwner] = useState({})
    const [mySubmissions, setMySubmissions] = useState([])
    
    const [cardLink1, setCardLink1] = useState("")
    const [cardLink2, setCardLink2] = useState("")
    
	// const results = (allNotes.filter ((note) => search === "" ||
	// note.title.toLowerCase().includes(search.toLowerCase()) || 
	// note.user.name.toLowerCase().includes(search.toLowerCase())
	// ))
    const id = useParams().id;
    console.log(id)
    // console.log(id)   
    // let history = useHistory();

    useEffect(() => {
        fetchPageOwner();
        fetchUserSubmissions();
    }, [renderToggle]);
    
    function fetchPageOwner() { 
        fetch(`/users/${id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include', // INCLUDE THIS IN EVERY REQUEST THAT NEEDS AUTH   
        })
        .then((r) => r.json())
        .then((pageOwner) => setOwner(pageOwner))
    } 

    function fetchUserSubmissions() {
        fetch(`/mashups`, {
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
            user_id={submit.user_id}
            category={submit.category}
            title={submit.title}
            youtubeurl1={submit.youtubeurl1}
            youtubeurl2={submit.youtubeurl2}
            user={user}
            setRenderToggle={setRenderToggle}
            renderToggle={renderToggle}
        />

         ));

	return (
        <>
		<div>
            <Image circular centered size="medium" src={owner.profile_picture} alt="profile_pic" ></Image>
            <h2>{owner.username}</h2>
            <Button onClick={fetchUserSubmissions} > Fetch Submissions </Button>
            <br/>
            <Card.Group>
                {submissionCards}
            </Card.Group>
        </div>
        <br/>
        <MashViewer cardLink1={cardLink1} cardLink2={cardLink2} />
        </>
	)
}

export default UserProfile;
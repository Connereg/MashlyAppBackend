import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Image, Container, Card } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import MashViewer from './MashViewer'
import SubmissionCard from './SubmissionCard'

function UserProfile(props) {
	const {user} = props;
    
    const [owner, setOwner] = useState({})
    const [mySubmissions, setMySubmissions] = useState([])
    
    const [cardLink1, setCardLink1] = useState("")
    const [cardLink2, setCardLink2] = useState("")

    const [profileRenderToggle, setProfileRenderToggle] = useState(true)
    
	// const results = (allNotes.filter ((note) => search === "" ||
	// note.title.toLowerCase().includes(search.toLowerCase()) || 
	// note.user.name.toLowerCase().includes(search.toLowerCase())
	// ))
    const id = useParams().id;
    
    // console.log(id)   
    let history = useHistory();

    useEffect(() => {
        fetchPageOwner();
        fetchUserSubmissions();
    }, [history.location.pathname, profileRenderToggle]);

    console.log("This is the Owner", owner.id)
    
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
        console.log(owner)
        fetch(`/profile_mashups/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include', // INCLUDE THIS IN EVERY REQUEST THAT NEEDS AUTH
        })
        .then((r) => r.json())
        .then((submissionData) => 
        setMySubmissions(submissionData))
    }

    const submissionCards = (mySubmissions ? mySubmissions.map((submit) => (
        <SubmissionCard
            key={submit.id}
            id={submit.id}
            user_id={submit.user_id}
            category={submit.category}
            title={submit.title}
            youtubeurl1={submit.youtubeurl1}
            youtubeurl2={submit.youtubeurl2}
            user={user}
            profileRenderToggle={profileRenderToggle}
            setProfileRenderToggle={setProfileRenderToggle}
            setCardLink2={setCardLink2}
            setCardLink1={setCardLink1}
        />
         )) : <h2>"This user does not seem to have any mashups created!"</h2>) 
         
    

	return (
        <>
		<div key={props.pageId}>
            <Image circular centered size="medium" src={owner.profile_picture} alt="profile_pic" ></Image>
            <h2>{owner.username}</h2>
            <h4> Listed: {submissionCards.length} mashups</h4>
            <br/>
            <Container style={{width: "90%"}}>
                <Card.Group>
                    {submissionCards}
                </Card.Group>
            </Container>
        </div>
        <br/>
        <MashViewer cardLink1={cardLink1} cardLink2={cardLink2} setCardLink1={setCardLink1} setCardLink2={setCardLink2}/>
        </>
	)
}

export default UserProfile;
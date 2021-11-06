import React, {useEffect, useState} from 'react'
import { Form, Button, Card } from 'semantic-ui-react'
import MasherTool from './MasherTool'

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


    function fetchUserSubmissions() {
        fetch(`/my_submissions`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include', // INCLUDE THIS IN EVERY REQUEST THAT NEEDS AUTH
        })
        .then((r) => r.json())
        .then((submissionData) => setMySubmissions(submissionData.map((submit) => submit.mashup)))
    }

    // function setCardLinks() {
    //     setCardLink1()
    // }

    const submissionList = mySubmissions.map((submit) => 
        <Card >
            <Card.Content>
                <Card.Header>Test Card</Card.Header>
                <Card.Meta>Test Meta</Card.Meta>
                <Card.Description>
                    Video Url 1: {submit.youtubeurl1}
                    <br/>
                    Video Url 2: {submit.youtubeurl2}
                </Card.Description>
            </Card.Content>
        </Card>)


	return (
        <>
		<div>
            <img src={user.profile_picture} alt="profile_pic" ></img>
            <h2>{user.username}</h2>
            <Button onClick={fetchUserSubmissions} > Fetch Submissions </Button>
            <br/>
            <Card.Group>
                {submissionList}
            </Card.Group>
        </div>
        <br/>
        <MasherTool cardLink1={cardLink1} cardLink2={cardLink2}/>
        </>
	)
}

export default UserProfile;
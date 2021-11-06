import React, {useEffect, useState} from 'react'
// import { Form, Button } from 'semantic-ui-react'

function UserProfile(props) {
	const [search, setSearch] = useState("")
	const {user, renderToggle, setRenderToggle} = props;
    
	// const results = (allNotes.filter ((note) => search === "" ||
	// note.title.toLowerCase().includes(search.toLowerCase()) || 
	// note.user.name.toLowerCase().includes(search.toLowerCase())
	// ))


	return (
		<div>
            <h2>{user.username}</h2>
        </div>
	)
}

export default UserProfile;
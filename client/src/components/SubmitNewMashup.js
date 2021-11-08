import React, {useEffect, useState} from 'react';
import {Button, Form, Header, Icon, Modal } from 'semantic-ui-react';
import MasherTool from './MasherTool'
import SubmissionCard from './SubmissionCard';


function SubmitNewMashup(props) {

    const [titleInput, setTitleInput] = useState("")
    const [categoryInput, setCategoryInput] = useState("")
    const [youtubeInput1, setYoutubeInput1] = useState("")
    const [youtubeInput2, setYoutubeInput2] = useState("")

    const[newMashupId, setNewMashupId] = useState(0)

    const [open, setOpen] = React.useState(false)

    function postNewMashup() {
        fetch('/mashups', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include', //INCLUDE THIS IN EVERY REQUEST THAT NEEDS AUTH
            body: JSON.stringify({ 
                youtubeurl1: youtubeInput1,
                youtubeurl2: youtubeInput2
            })
        })
        .then((resp) => resp.json())
        .then(newMashupData => {
            setNewMashupId(newMashupData.id)
            console.log("successful post")
        })

    }

    function destroyNewMashup() {

    }



    return(
        <div>
            <h1>Div Here</h1>
            <Modal
                basic
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                size='small'
                trigger={<Button color="red" onClick={postNewMashup} > SAVE NEW MASHUP </Button>} 
            >
            <Header icon>
                <Icon name='archive' />
                Are you sure you would like to save this mashup?
            </Header>
            <Modal.Actions>
                <Button basic color='red' inverted onClick={() => setOpen(false)}>
                <Icon name='remove' /> No
                </Button>
                <Button color='green' inverted onClick={() => setOpen(false)}>
                <Icon name='checkmark' /> Yes
                </Button>
            </Modal.Actions>
            </Modal>
            <br/>
            <br/>
            <Form>
                <Form.Field>
                    <label>Mashup Title</label>
                    <input onChange={(e) => setTitleInput(e.target.value)} value={titleInput} placeholder='Title for mashup here...' />
                </Form.Field>
                <Form.Field>
                    <label>Category of Mashup</label>
                    <input onChange={(e) => setCategoryInput(e.target.value)} value={categoryInput} placeholder='Name of category for mashup here...' />
                </Form.Field>
                {/* <Button type='submit'>Submit</Button> */}
            </Form>
            <MasherTool youtubeInput1={youtubeInput1} setYoutubeInput1={setYoutubeInput1} youtubeInput2={youtubeInput2} setYoutubeInput2={setYoutubeInput2}/>
        </div>
    )
}

export default SubmitNewMashup;
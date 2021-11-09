import React, {useState} from "react";
import ReactPlayer from "react-player";
import { Form, Container } from "semantic-ui-react"
import { Button, Segment } from "semantic-ui-react"

// break these out into their own files
const PlayButton = (props) => {
    const { isPlaying, handleClick } = props;

    return (
        <Button
            color={isPlaying ? 'red' : 'blue'}
            onClick={handleClick}
        >
            Start/Stop Simulplay
        </Button>
    );
}

const PlayerComponent = (props) => {
    const { simulPlay, supplyLink1, supplyLink2 } = props;

    return (
        <Segment attached>
            <div class="video-container">
                <ReactPlayer playing={simulPlay} muted={true} controls url={supplyLink1} />
            </div>
            <div class="video-container">
                <ReactPlayer playing={simulPlay}  controls url={supplyLink2} />
            </div>
        </Segment>
    )
}

function MasherTool(props) {

    const { cardLink1, cardLink2, youtubeInput1, youtubeInput2, setYoutubeInput1, setYoutubeInput2 } = props;

    const [simulPlay, setSimulPlay] = useState(false)
	const [videoLink1, setVideoLink1] = useState("")
	const [videoLink2, setVideoLink2] = useState("")

	const [supplyLink1, setSupplyLink1] = useState("")
	const [supplyLink2, setSupplyLink2] = useState("")
	
    function supplyNewUrls() {
		setSupplyLink1(youtubeInput1)
        setSupplyLink2(youtubeInput2)
	}

    function playButtonToggle() {
        setSimulPlay(!simulPlay)
    }

	return (
        <Container>	
		    <br />
            <Form >
                <input onChange={(e) => setYoutubeInput1(e.target.value)} placeholder=" Set Youtube Url 1 Here..." type="text" value={youtubeInput1}></input>
                <input onChange={(e) => setYoutubeInput2(e.target.value)} placeholder=" Set Youtube Url 2 Here..." type="text" value={youtubeInput2}></input>
                <Button.Group attached='top'>
                    <Button type='submit' onClick={supplyNewUrls}>Supply Video Links</Button>
                    <PlayButton
                        isPlaying={simulPlay}
                        handleClick={playButtonToggle}
                    />
                </Button.Group>
            </Form>
            <PlayerComponent 
                simulPlay={simulPlay}
                supplyLink1={supplyLink1}
                supplyLink2={supplyLink2}
            />
		</Container>
	);
}

/*
    COMMENTS TABLE WILL LOOK LIKE A JOIN TABLE, BUT NOT FUNCTION AS A TRUE JOIN TABLE
    WILL JUST TAKE THE IDs 
    
    Comment = {
        user_id: number,
        mashup_id: number,
        text: string
    }
    belongs to user,
    belongs to mashup
    mashup has many comments
    user has many comments (not necessary for MVP func)

    1. Editor Component
    Will have states to edit links on the fly

        a. Edit Form
            i. Play Button
        b. Player Component

    2. View Component (View Page) (localhost:4000/mashup/{id})
    Can just recieve URLS from the Mashup object

        a. Play Button
        b. Player Component

*/

/*
    # Before getting into search:
    Create the user view page
    Create a user list page (user index)
    Even if search doesn't work, you can browse other users pages, link a users page, etc
    User view page URL will be: localhost:4000/user/{id}
    User index page URL will be: localhost:4000/users
    Index page will be a big list of buttons that link to a users profile page
    Put a search bar on the top that filters the cards
*/

export default MasherTool;
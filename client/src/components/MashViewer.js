import React, {useState} from "react";
import ReactPlayer from "react-player";
import { Form, Container } from "semantic-ui-react"
import { Button, Segment } from "semantic-ui-react"
import PlayButton from "./PlayButton";

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

function MashViewer(props) {

    const { cardLink1, cardLink2, setCardLink1, setCardLink2} = props;

    const [simulPlay, setSimulPlay] = useState(false)
	const [videoLink1, setVideoLink1] = useState("")
	const [videoLink2, setVideoLink2] = useState("")

	const [supplyLink1, setSupplyLink1] = useState("")
	const [supplyLink2, setSupplyLink2] = useState("")

    // if (contentAvailableToSupply)
    //     supplyNewUrls()
	
    function supplyNewUrls() {
        if (cardLink1 && cardLink2) {
        setSupplyLink1(cardLink1)
        setSupplyLink2(cardLink2)
        document.getElementById("url-supply-form").reset()
        setCardLink1("")
        setCardLink2("")
        }else{
		setSupplyLink1(videoLink1)
        setSupplyLink2(videoLink2)
        document.getElementById("url-supply-form").reset()
        }
	}

    function playButtonToggle() {
        setSimulPlay(!simulPlay)
    }

	return (
        <Container>	
		    <br />
            <Form id="url-supply-form">
                <input onChange={(e) => setVideoLink1(e.target.value)} placeholder=" Set Youtube Url 1 Here..." type="text" value={cardLink1 ? cardLink1 : videoLink1}></input>
                <input onChange={(e) => setVideoLink2(e.target.value)} placeholder=" Set Youtube Url 2 Here..." type="text" value={cardLink2 ? cardLink2 : videoLink2}></input>
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

export default MashViewer;
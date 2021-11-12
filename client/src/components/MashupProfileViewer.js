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

function MashupProfileViewer(props) {

    const { cardLink1, cardLink2 } = props;

    const [simulPlay, setSimulPlay] = useState(false)

    const [showAudioSource, setShowAudioSource] = useState(false)
	

    function playButtonToggle() {
        setSimulPlay(!simulPlay)
    }

	return (
        <Container>	
		    <br />
            <Form id="player_form">
                <Button.Group attached='top'>
                    <PlayButton
                        isPlaying={simulPlay}
                        handleClick={playButtonToggle}
                    />
                    <Button onClick={() => setShowAudioSource(!showAudioSource)}>Show Audio Source Below</Button>
                </Button.Group>
            </Form>
            <PlayerComponent 
                simulPlay={simulPlay}
                supplyLink1={cardLink1}
                supplyLink2={cardLink2}
                showAudioSource={showAudioSource}
            />
		</Container>
	);
}

export default MashupProfileViewer;
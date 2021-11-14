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
    const { simulPlay, supplyLink1, supplyLink2, isVisible } = props;

    return (
        <Segment attached>
            <div class="video-container">
                <ReactPlayer playing={simulPlay} muted={true} controls url={supplyLink1} />
            </div>
            <div style={{display: isVisible ? 'block' : 'none'}} class="video-container">
                <ReactPlayer playing={simulPlay}  controls url={supplyLink2} />
            </div>
        </Segment>
    )
}

function MasherTool(props) {

    const { youtubeInput1, youtubeInput2, setYoutubeInput1, setYoutubeInput2 } = props;

    const [simulPlay, setSimulPlay] = useState(false)

    const [showAudioSource, setShowAudioSource] = useState(false)
	
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
                    <Button onClick={() => setShowAudioSource(!showAudioSource)}>Show Audio Source Below</Button>
                </Button.Group>
            </Form>
            <PlayerComponent 
                simulPlay={simulPlay}
                supplyLink1={supplyLink1}
                supplyLink2={supplyLink2}
                isVisible={showAudioSource}
            />
		</Container>
	);
}

export default MasherTool;
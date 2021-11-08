import React, {useState} from "react";
import ReactPlayer from "react-player";
import { Form, Container } from "semantic-ui-react"
import { Button, Segment } from "semantic-ui-react"


function MasherTool(props) {

    const { cardLink1, cardLink2, youtubeInput1, youtubeInput2, setYoutubeInput1, setYoutubeInput2 } = props;

    const [simulPlay, setSimulPlay] = useState(false)
	const [videoLink1, setVideoLink1] = useState("")
	const [videoLink2, setVideoLink2] = useState("")

	const [supplyLink1, setSupplyLink1] = useState("https://youtu.be/GhAjhoOFgoI?t=51")
	const [supplyLink2, setSupplyLink2] = useState("https://youtu.be/2I1X0KlU_yM?t=10")

    const [playButtonColor, setPlayButtonColor] = useState("blue")
	
    function supplyNewUrls() {
		setSupplyLink1((videoLink1 ? videoLink1 : cardLink1))
		setSupplyLink2((videoLink2 ? videoLink2 : cardLink2))
        setYoutubeInput1(videoLink1)
        setYoutubeInput2(videoLink2)
	}

    function playButtonToggle() {
        setSimulPlay(!simulPlay)
        if (playButtonColor === "blue")
            setPlayButtonColor("red")
        else
            setPlayButtonColor("blue")
    }

	return (
        <Container>			
       {/* <Button type='submit' onClick={supplyNewUrls}>Supply New Video Links</Button> */}
		{/* <Button onClick={()=>setSimulPlay(!simulPlay)}>Start/Stop Simulplay</Button> */}
		<br />
        <Form >
            <input onChange={(e) => setVideoLink1(e.target.value)} placeholder=" Set Youtube Url 1 Here..." type="text" value={cardLink1}></input>
            <input onChange={(e) => setVideoLink2(e.target.value)} placeholder=" Set Youtube Url 2 Here..." type="text" value={cardLink2}></input>
            <Button.Group attached='top'>
                <Button type='submit' onClick={supplyNewUrls}>Supply Video Links</Button>
                <Button color={playButtonColor} onClick={playButtonToggle}>Start/Stop Simulplay</Button>
            </Button.Group>
        </Form>
            <Segment attached>
                <div class="video-container">
                    <ReactPlayer playing={simulPlay} muted={true} controls url={supplyLink1} />
                </div>
                <div class="video-container">
                    <ReactPlayer playing={simulPlay}  controls url={supplyLink2} />
                </div>
            </Segment>
		</Container>
		
	);
}
export default MasherTool;
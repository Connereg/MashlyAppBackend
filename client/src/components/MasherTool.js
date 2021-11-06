import React, {useState} from "react";
import ReactPlayer from "react-player";
import { Button, Form, Container } from "semantic-ui-react"


function MasherTool(props) {

    const { cardLink1, cardLink2 } = props;

    const [simulPlay, setSimulPlay] = useState(false)
	const [videoLink1, setVideoLink1] = useState("")
	const [videoLink2, setVideoLink2] = useState("")

	const [supplyLink1, setSupplyLink1] = useState("https://youtu.be/GhAjhoOFgoI?t=51")
	const [supplyLink2, setSupplyLink2] = useState("https://youtu.be/2I1X0KlU_yM?t=10")
	
    function supplyNewUrls() {
		setSupplyLink1((videoLink1 ? videoLink1 : cardLink1))
		setSupplyLink2((videoLink2 ? videoLink2 : cardLink2))
	}

	return (
        <Container>
			<Form >
                <input onChange={(e) => setVideoLink1(e.target.value)} placeholder="Youtube Url 1 Here..." type="text"></input>
                <input onChange={(e) => setVideoLink2(e.target.value)} placeholder="Youtube Url 2 Here..." type="text"></input>
                <Button type='submit' onClick={supplyNewUrls}>Supply New Video Links</Button>
			</Form>
				<br/>
			<Button onClick={()=>setSimulPlay(!simulPlay)}>Start/Stop Simulplay</Button>
				<br />
                <br />
			<div class="video-container">
				<ReactPlayer playing={simulPlay} muted={true} controls url={supplyLink1} />
			</div>
			<div class="video-container">
				<ReactPlayer playing={simulPlay}  controls url={supplyLink2} />
			</div>
		</Container>
		
	);
}
export default MasherTool;
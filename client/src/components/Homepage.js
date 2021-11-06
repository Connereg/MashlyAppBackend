import React, { useState } from "react";
import ReactPlayer from 'react-player';
import { Button, Form, Container } from "semantic-ui-react";



function Homepage(props) {

	const [simulPlay, setSimulPlay] = useState(false)
	const [videoLink1, setVideoLink1] = useState("")
	const [videoLink2, setVideoLink2] = useState("")

	const [supplyLink1, setSupplyLink1] = useState("https://youtu.be/GhAjhoOFgoI?t=51")
	const [supplyLink2, setSupplyLink2] = useState("https://youtu.be/2I1X0KlU_yM?t=10")

	function supplyNewUrls() {
		setSupplyLink1(videoLink1)
		setSupplyLink2(videoLink2)
	}


	return (
		<div>
			<br/>
			<h1 class="homepage-title">Try out the application below!</h1>
			<p class="homepage-text"> This application will allow you to combine Youtube video sources to create custom overdubs!
			<br/> In order to use the application, simply supply two youtube urls to the fields below and click the 'Supply New Video Links' button. 
			<br/> Cick the Start/Stop Simulplay button to run a preview of your video mashup!</p>
			<Container>
				<Form width={"50%"}>
					<input onChange={(e) => setVideoLink1(e.target.value)} placeholder="Youtube Url 1 Here..." type="text"></input>
					<input onChange={(e) => setVideoLink2(e.target.value)} placeholder="Youtube Url 2 Here..." type="text"></input>
					<Button type='submit' onClick={supplyNewUrls}>Supply New Video Links</Button>
				</Form>
				<br/>
				<Button onClick={()=>setSimulPlay(!simulPlay)}>Start/Stop Simulplay</Button>
				<br />
				<div class="video-container">
					<ReactPlayer playing={simulPlay} muted={true} controls url={supplyLink1} />
				</div>
				<div class="video-container">
					<ReactPlayer playing={simulPlay}  controls url={supplyLink2} />
				</div>
			</Container>
		</div>
	);
}
export default Homepage;


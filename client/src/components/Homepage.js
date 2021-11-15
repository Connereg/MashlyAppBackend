import React from "react";
// import ReactPlayer from 'react-player';
// import { Button, Form, Container } from "semantic-ui-react";
import MashViewer from "./MashViewer";



function Homepage(props) {


	return (
		<div>
			<br/>
			<h1 class="homepage-title">Try out the application below!</h1>
			<p class="homepage-text"> This application will allow you to combine Youtube video sources to create custom overdubs!
			<br/> In order to use the application, simply supply two youtube urls to the fields below and click the 'Supply New Video Links' button. 
			<br/> Cick the Start/Stop Simulplay button to run a preview of your video mashup!</p>
			<MashViewer />
		</div>
	);
}
export default Homepage;


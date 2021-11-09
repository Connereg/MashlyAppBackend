import React from "react";
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import UserProfile from "./UserProfile";
import Homepage from "./Homepage";
import SubmitNewMashup from "./SubmitNewMashup";




function Body(props) {
	const { loggedInStatus, user } = props;

	const [renderToggle, setRenderToggle] = useState(true)
    

	return (
		<div className="body-div">
			<Switch>
				<Route exact path="/">
					<Homepage />
				</Route>
				<Route path='/user_profile/:id'>
					<UserProfile
                        user={user}
                        renderToggle={renderToggle}
                        setRenderToggle={setRenderToggle}
					/>
				</Route>
				<Route exact path="/submit_new_mashup">
					<SubmitNewMashup user={user} />
				</Route>
			</Switch>      
		</div>
	);
}

export default Body;
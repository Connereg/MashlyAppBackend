import React from "react";
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import UserProfile from "./UserProfile";
import Homepage from "./Homepage";




function Body(props) {
	const { loggedInStatus, user } = props;

	const [renderToggle, setRenderToggle] = useState(true)
    

	return (
		<div className="body-div">
			<Switch>
				<Route exact path="/">
					<Homepage />
				</Route>
				<Route exact path="/user_profile">
					<UserProfile
                        user={user}
                        renderToggle={renderToggle}
                        setRenderToggle={setRenderToggle}
					/>
				</Route>
			</Switch>      
		</div>
	);
}

export default Body;
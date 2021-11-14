import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Login from "./Login";

function NavBar({ retrieveLoggedInStatus, setLoggedInStatus, loggedInStatus, setUser, user }) {
	
	return (
		<div>
			<Menu>
				<Link to="/">
					<Menu.Item
						name="home"
						// active={activeItem === "home"}
						// onClick={handleItemClick}
					>
						Homepage
					</Menu.Item>
				</Link>
				<Link to="/search_users">
					<Menu.Item name="search_users">
						Search Users
					</Menu.Item>
				</Link>
            {loggedInStatus ? (
				<Link to={`/user_profile/${user.id}`}>
					<Menu.Item
						name="user_profile"
						// active={activeItem === "notes"}
						// onClick={handleItemClick}
					>
						User Profile
					</Menu.Item>
				</Link>
                ) : null}

				{loggedInStatus ? (
					<Link to="/submit_new_mashup">
						<Menu.Item
							name="new_mashup"
							// active={activeItem === "new_note"}
							// onClick={handleItemClick}
						>
							Submit New Mashup
						</Menu.Item>
					</Link>
				) : null}
				<Menu.Item style={{ float: "right" }}>
					<Login
						retrieveLoggedInStatus={retrieveLoggedInStatus}
						loggedInStatus={loggedInStatus}
                        setLoggedInStatus={setLoggedInStatus}
                        setUser={setUser}
					/>
				</Menu.Item>
			</Menu>
		</div>
	);
}

export default NavBar;
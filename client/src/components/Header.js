import React from "react";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";

function Header() {
	return (
		<div>
			<Link to="/">
				<Image
					src={
						"https://cdn.dribbble.com/users/278098/screenshots/2279256/media/823eb6fb99b10bc9474fddb1c98edc10.png?compress=1&resize=400x300"
					}
					size="small"
					circular
				/>
			</Link>
            <h1 className="application-titler"> MASHLY Video Masher App</h1>
		</div>
	);
}

export default Header;
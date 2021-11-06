import React, { useState } from "react";
import { Button, Form, Image, Modal } from "semantic-ui-react";
import { useHistory } from 'react-router-dom'

function Login(props) {
	const { retrieveLoggedInStatus, loggedInStatus, setLoggedInStatus, setUser } = props;

    let history = useHistory();

	const [open, setOpen] = React.useState(false);
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errorsAll, setErrorsAll] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

	function handleLogInAttempt(e) {
        e.preventDefault();
		fetch("/login", {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
                setIsLoading(false);
                if (r.ok) {
                    console.log(r.headers.get('Set-Cookie'))
                    r.json().then((user) => {
                        console.log(user);
                        setUser(user)
                    })
                    setIsLoggedIn(true)
                    retrieveLoggedInStatus(true)
                    localStorage.setItem("username", username);
                    
                }
                else {
                    r.json().then((err) => setErrorsAll(err.errors))
                    console.log(errorsAll)
                }
            });
        }

        function handleSignUp(e) {
            e.preventDefault();
            fetch("/signup", {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Credentials': true,
                },
                body: JSON.stringify({ username, password }),
            }).then((r) => {
                    setIsLoading(false);
                    if (r.ok) {
                        console.log(r.headers.get('Set-Cookie'))
                        r.json().then((user) => {
                            console.log(user);
                            setUser(user)
                        })
                        setIsLoggedIn(true)
                        retrieveLoggedInStatus(true)
                        localStorage.setItem("username", username);
                        
                    }
                    else {
                        r.json().then((err) => setErrorsAll(err.errors))
                        console.log(errorsAll)
                    }
                });
            }
    
    function handleLogOut() {
        localStorage.removeItem("username");
        localStorage.removeItem("user_id");
        localStorage.removeItem("isLoggedIn");
        setLoggedInStatus(false);
        setIsLoggedIn(false);
        setUser({})
        history.push(`/`)
    }
    

    // function handleLogInTemp() {
    //     localStorage.setItem("username", username);
    //     localStorage.setItem("user_id", 1);
    //     localStorage.setItem("isLoggedIn", true);
    //     retrieveLoggedInStatus(true);
    //     setIsLoggedIn(true);

    // }

    	// function handlePost() {
	// 	fetch("http://localhost:9292/users", {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify(newUser),
	// 	})
	// 		.then((resp) => resp.json())
	// 		.then(console.log("Added this fuckin user"));
	// 	renderPage();
	// }



	const newUser = {
		username: username,
		password: password,
	};


	return (
		<Modal
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			trigger={<Button> {isLoggedIn ? "Log Out" : "Log In"} </Button>}
		>
			<Modal.Header>Log In/Out</Modal.Header>
			<Modal.Content image>
				<Image
					size="medium"
					src="https://cdn.dribbble.com/users/278098/screenshots/2279256/media/823eb6fb99b10bc9474fddb1c98edc10.png?compress=1&resize=400x300"
					wrapped
				/>
				<Modal.Description>
					{!isLoggedIn ? (
						<Form >
							<Form.Field>
								<label>User Name</label>
								<input
									onChange={(e) =>
										setUserName(e.target.value)
									}
									placeholder="User Name"
								/>
							</Form.Field>
							<Form.Field>
								<label>Password</label>
								<input
									onChange={(e) =>
										setPassword(e.target.value)
									}
									placeholder="Password"
								/>
							</Form.Field>
							<Button onClick={handleLogInAttempt} >Log In</Button>
							<Button onClick={handleSignUp} type="submit">
								Sign Up
							</Button>
						</Form>
					) : null}
					<h4>
						{isLoggedIn
							? `You are now logged in as: ${username}`
							: "You are not logged in!"}
					</h4>
					{isLoggedIn ? (
						<Button onClick={handleLogOut}> Log Out </Button>
					) : null}
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button
					content="Close"
					labelPosition="right"
					onClick={() => setOpen(false)}
					positive
				/>
			</Modal.Actions>
		</Modal>

);
}

export default Login;
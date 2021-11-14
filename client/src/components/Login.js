import React, { useState } from "react";
import { Button, Form, Image, Modal } from "semantic-ui-react";
import { useHistory } from 'react-router-dom'

function Login(props) {
	const { retrieveLoggedInStatus, loggedInStatus, setLoggedInStatus, setUser, user } = props;

    let history = useHistory();

	const [open, setOpen] = React.useState(false);
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [profile_picture, setProfile_Picture] = useState("");

	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [confirmDeletion, setConfirmDeletion] = useState(false)
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
						localStorage.setItem("user_id_current", user.id)
                    })
                    setIsLoggedIn(true)
                    retrieveLoggedInStatus(true)
                    localStorage.setItem("username", username)
					
					history.push('/')
                    
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
                body: JSON.stringify({ username, password, profile_picture }),
            }).then((r) => {
                    setIsLoading(false);
                    if (r.ok) {
                        console.log(r.headers.get('Set-Cookie'))
                        r.json().then((user) => {
                            console.log(user);
                            setUser(user)
							localStorage.setItem("user_id_current", user.id)
                        })
                        setIsLoggedIn(true)
                        retrieveLoggedInStatus(true)
                        localStorage.setItem("username", username)
						
                        
                    }
                    else {
                        r.json().then((err) => setErrorsAll(err.errors))
                        console.log(errorsAll)
                    }
                });
            }
    
    function handleLogOut() {
        localStorage.removeItem("username");
        localStorage.removeItem("user_id_current");
        localStorage.removeItem("isLoggedIn");
        setLoggedInStatus(false);
        setIsLoggedIn(false);
        setUser({})
		setConfirmDeletion(false)
        history.push('/')
    }

	function handleDestroyCurrentUser() {
		setUser({});
		setLoggedInStatus(false);
		setIsLoggedIn(false);
		setConfirmDeletion(false);
		fetch(`/users/${localStorage.getItem("user_id_current")}`, {
			method: 'DELETE',
		})
		.then((resp) => resp.json())
		.then(history.push("/confirm_profile_deletion"))
		localStorage.removeItem("username");
        localStorage.removeItem("user_id_current");
        localStorage.removeItem("isLoggedIn");
		setOpen(false);
	}
    



	function confirmDeletionButtonMenu() {
		setConfirmDeletion(!confirmDeletion);
	}



	const newUser = {
		username: username,
		password: password,
	};


	return (
		<Modal
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			trigger={<Button> {loggedInStatus ? "Log Out" : "Log In"} </Button>}
		>
			<Modal.Header>Log In/Out</Modal.Header>
			<Modal.Content image>
				<Image
					size="medium"
					src="https://cdn.dribbble.com/users/278098/screenshots/2279256/media/823eb6fb99b10bc9474fddb1c98edc10.png?compress=1&resize=400x300"
					wrapped
				/>
				<Modal.Description>
					{!loggedInStatus ? (
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
							<Form.Field>
								<label>Profile Picture</label>
								<input
									onChange={(e) =>
										setProfile_Picture(e.target.value)
									}
									placeholder="Profile Picture Url"
								/>
							</Form.Field>
							<Button onClick={handleLogInAttempt} >Log In</Button>
							<Button onClick={handleSignUp} type="submit">
								Sign Up
							</Button>
						</Form>
					) : null}
					<h4>
						{loggedInStatus
							? `You are now logged in as: ${user.username}`
							: "You are not logged in!"}
					</h4>
					{loggedInStatus ? (
						<Button onClick={handleLogOut}> Log Out </Button>
					) : null}
					<br />
					<br />
					{isLoggedIn && !confirmDeletion ? (
						<Button color="red" onClick={() => confirmDeletionButtonMenu()}> Delete User Profile </Button>
					): null}
					{confirmDeletion ? (
						<div class="confirm-user-deletion-buttons-div">
							<Button color="red" onClick={() => handleDestroyCurrentUser()}> Are your sure youd like to delete this user?</Button>
							<Button color="blue" onClick={() => confirmDeletionButtonMenu()}> Go Back </Button>
						</div>
					): null}
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
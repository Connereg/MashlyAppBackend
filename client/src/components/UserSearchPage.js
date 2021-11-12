import React from 'react';
import { useState, useEffect } from 'react'
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react'
import UserCard from './UserCard';

function UserSearchPage(props) {
    
    const [usersList, setUsersList] = useState([])
    const [filterSearch, setFilterSearch] = useState("")


    useEffect(() => {
        fetchUserList();
    }, []);

    function fetchUserList() {
        fetch('/users', { 
            medthod: 'GET',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include', // INCLUDE THIS IN EVERY REQUEST THAT NEEDS AUTH   
        })
        .then((r) => r.json())
        .then((usersData) => setUsersList(usersData))
    }

    const visibleUsers = usersList.filter((user) => 
    filterSearch === "" || user.username.toLowerCase().includes(filterSearch.toLowerCase))

    // .includes(filterSearch.toLowerCase)

    const userCardsList = (visibleUsers ? visibleUsers.map((user) => (
        <UserCard
            key={user.id}
            id={user.id}
            profile_picture={user.profile_picture}
            username={user.username}            
        />
         )) : <h2>"Failed to Render User List"</h2>)
    
    return(
        <div >
        <Menu attached='top'>
            <Dropdown simple text="Search By: ">
                <Dropdown.Menu>
                    <Dropdown.Item>Username</Dropdown.Item>
                    <Dropdown.Item>Random 10</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Menu.Menu position='right'>
            <div className='ui right aligned category search item'>
                <div className='ui transparent icon input'>
                <input
                    className='prompt'
                    type='text'
                    placeholder='Search Users...'
                    onChange={(e) => setFilterSearch(e.target.value)}
                    value={filterSearch}
                />
                <i className='search link icon' />
                </div>
                <div className='results' />
            </div>
            </Menu.Menu>
        </Menu>

    <Segment attached='bottom'>
      {userCardsList}
    </Segment>
        </div>
    )
}

export default UserSearchPage;
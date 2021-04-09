import { Navbar, Nav, Form, FormControl, Image } from 'react-bootstrap'
import "./Navbar.scss"
import React from 'react'
import { Animated } from "react-animated-css";
import {useHistory, useLocation} from "react-router-dom"
import {useSelector} from "react-redux"
import {logout} from "../../authentication/Authentication"

export default function NavbarComponents() {
    const url = useLocation()
    const history = useHistory()
    const user = useSelector(state => state.userId)
    const handleRoute = (event) => {
        history.push(`/${event.target.name}`)
    }
    const handleLogOut = () =>{
        logout()
        history.push("/")
    }
    return (
        <div className="NavbarComponent">
            
            <Navbar className="Navbar" bg="dark" variant="dark">
                <Navbar.Brand href="#home">A TEAM</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link className="NavText" name="" onClick={handleRoute}>Home</Nav.Link>
                    {
                    url.pathname === "/"
                    &&
                    <>
                    <Nav.Link className="NavText" href="#CharacterPages">Characters</Nav.Link>
                    <Nav.Link className="NavText" href="#ComicsPage">Comics</Nav.Link>
                    <Nav.Link className="NavText" href="#pricing">Movies</Nav.Link>
                    </>
                    }
                </Nav>
                <Form inline>
                    {!user
                    ?
                    <>
                    <Nav.Link className="NavText" name="login" onClick={handleRoute}>LOGİN</Nav.Link>
                    <Nav.Link className="NavText" name="register" onClick={handleRoute}>SİGN UP</Nav.Link>
                    </>
                    :
                    <>
                    <Nav.Link className="NavText" onClick={handleLogOut}>LOGOUT</Nav.Link>
                    <Nav.Link className="NavText user-name">{user.displayName[0].toUpperCase()}{user.displayName.slice(1)}</Nav.Link>
                    <Image className="avatar" src="https://static.wikia.nocookie.net/marvelmovies/images/3/36/Captain_America_Shield.png/revision/latest?cb=20150210041846" roundedCircle />
                    </>
                    }
                </Form>
               
            </Navbar>
            
        </div>
    )
}

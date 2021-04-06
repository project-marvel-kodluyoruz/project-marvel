import react from "react"
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import "./Navbar.scss"
import React from 'react'
import { Animated } from "react-animated-css";
import {useHistory} from "react-router-dom"

export default function NavbarComponents() {
    const history = useHistory()

    const handleRoute = (event) => {
        history.push(`/${event.target.name}`)
    }
    return (
        <div className="NavbarComponent">
            
            <Navbar className="Navbar" bg="dark" variant="dark">
                <Navbar.Brand href="#home">A TEAM</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link className="NavText" name="" onClick={handleRoute}>Home</Nav.Link>
                    <Nav.Link className="NavText" href="#CharacterPages">Characters</Nav.Link>
                    <Nav.Link className="NavText" href="#ComicsPage">Comics</Nav.Link>
                    <Nav.Link className="NavText" href="#pricing">Movies</Nav.Link>
                </Nav>
                <Form inline>
                    <Nav.Link className="NavText" name="login" onClick={handleRoute}>LOGİN</Nav.Link>
                    <Nav.Link className="NavText" name="register" onClick={handleRoute}>SİGN UP</Nav.Link>
                </Form>
               
            </Navbar>
            
        </div>
    )
}

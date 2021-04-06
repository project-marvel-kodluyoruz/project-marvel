import React from 'react'
import { Card, Button, Container, Row, Spinner } from 'react-bootstrap'
import "./CardComponent.scss"
import { useState, useEffect } from "react";
import fetchData from "../../helpers/fetchData";
import { Animated } from "react-animated-css";

export default function CardComponent() {

    const [inputCharacter, setInputCharacter] = useState("");
    const [characters, setCharacters] = useState([]);
    // let value = inputCharacter;
    // const characterNumber = Math.ceil(Math.random() * 100).toString()

    useEffect(() => {
        fetchData("characters", "", "", "").then(data => {
            setCharacters(data);
        })
    }, [inputCharacter]);
    console.log(characters)
    return (
        <div className="CardContainer">
            <div>
                <Container className="container-Form">
                    <form className="searchForm">
                            <input
                            type="text"
                                placeholder="Press Enter a Character"
                                className="search"
                                value = {inputCharacter}
                                onChange={(event) => {
                                    setInputCharacter(event.target.value);                                    
                                    console.log(inputCharacter);
                                }}
                            />
                      {inputCharacter.length <3 ? (
                          null
                      ): (
                        <div>
                        {characters
                          .filter(
                            (item) =>
                              item.name
                                .toLowerCase()
                                .includes(inputCharacter.toLowerCase())
                          )
                          .map((item, i) => (
          
                           console.log(item)
          
                          ))}
                      </div>
                      )}  
                    </form>
                </Container>
            </div>
            {characters.length === 0
            ?
            <Button variant="danger" disabled>
                <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                />
                  Heroes Loading...
            </Button>
            :
                <div className="AllCards">
                {characters[1] && (
                    <>
                        <Card className="cards" style={{ width: '11rem', height: "360px" }}>
                            <Card.Img variant="top" src={`${characters[1].thumbnail.path}.${characters[1].thumbnail.extension}`} />
                            <Card.Body>
                                <Card.Title className="cardTitle">{characters[1].name}</Card.Title>
                                <Button variant="primary">Go</Button>
                            </Card.Body>
                        </Card>
                        <Card className="cards" style={{ width: '11rem', height: "360px" }}>
                            <Card.Img variant="top" src={`${characters[2].thumbnail.path}.${characters[2].thumbnail.extension}`} />
                            <Card.Body>
                                <Card.Title className="cardTitle">{characters[2].name}</Card.Title>
                                <Button variant="primary">Go</Button>
                            </Card.Body>
                        </Card>
                        <Card className="cards" style={{ width: '11rem', height: "360px" }}>
                            <Card.Img variant="top" src={`${characters[3].thumbnail.path}.${characters[3].thumbnail.extension}`} />
                            <Card.Body>
                                <Card.Title className="cardTitle">{characters[3].name}</Card.Title>
                                <Button variant="primary">Go</Button>
                            </Card.Body>
                        </Card>
                    </>
                )
                }
                {characters[1] && (
                    <>
                        <Card className="cards" style={{ width: '11rem', height: "360px" }}>
                            <Card.Img variant="top" src={`${characters[4].thumbnail.path}.${characters[4].thumbnail.extension}`} />
                            <Card.Body>
                                <Card.Title className="cardTitle">{characters[4].name}</Card.Title>
                                <Button variant="primary">Go</Button>
                            </Card.Body>
                        </Card>
                        <Card className="cards" style={{ width: '11rem', height: "360px" }}>
                            <Card.Img variant="top" src={`${characters[5].thumbnail.path}.${characters[5].thumbnail.extension}`} />
                            <Card.Body>
                                <Card.Title className="cardTitle">{characters[5].name}</Card.Title>
                                <Button variant="primary">Go</Button>
                            </Card.Body>
                        </Card>
                    </>
                )
                }
            </div>}
        </div>


    )
}

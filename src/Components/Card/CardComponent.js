import React, { useMemo } from 'react'
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
    }, []);
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
                            value={inputCharacter}
                            onChange={(event) => {
                                setInputCharacter(event.target.value);
                                console.log(inputCharacter);
                            }}
                        />

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
                    { !inputCharacter &&  characters[1] && (
                        <>
                            <Card className="cards" style={{ width: '11rem'}}>
                                <Card.Img variant="top" src={`${characters[573].thumbnail.path}.${characters[573].thumbnail.extension}`} />
                                <Card.Body>
                                    <Card.Title className="cardTitle">{characters[573].name}</Card.Title>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Card>
                            <Card className="cards" style={{ width: '11rem' }}>
                                <Card.Img variant="top" src={`${characters[1193].thumbnail.path}.${characters[1193].thumbnail.extension}`} />
                                <Card.Body>
                                    <Card.Title className="cardTitle">{characters[1185].name}</Card.Title>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Card>
                            <Card className="cards" style={{ width: '11rem' }}>
                                <Card.Img variant="top" src={`${characters[188].thumbnail.path}.${characters[188].thumbnail.extension}`} />
                                <Card.Body>
                                    <Card.Title className="cardTitle">{characters[185].name}</Card.Title>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Card>
                            <Card className="cards" style={{ width: '11rem' }}>
                                <Card.Img variant="top" src={`${characters[1316].thumbnail.path}.${characters[4].thumbnail.extension}`} />
                                <Card.Body>
                                    <Card.Title className="cardTitle">{characters[1311].name}</Card.Title>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Card>
                            <Card className="cards" style={{ width: '11rem' }}>
                                <Card.Img variant="top" src={`${characters[297].thumbnail.path}.${characters[297].thumbnail.extension}`} />
                                <Card.Body>
                                    <Card.Title className="cardTitle">{characters[297].name}</Card.Title>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Card>
                        </>
                    )
                    }
                </div>}

            <div>
                {inputCharacter.length < 3 ? (
                    null
                ) : (
                    <div className="AllCards">
                        {characters
                            .filter(
                                (item) =>
                                    item.name
                                        .toLowerCase()
                                        .includes(inputCharacter.toLowerCase())
                            )
                            .map((item, i) => {
                                return (
                                    <div className>
                                        <Card className="cards" style={{ width: '11rem', height: "auto" }}>
                                <Card.Img variant="top" src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
                                <Card.Body>
                                    <Card.Title className="cardTitle">{item.name}</Card.Title>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Card>
                                    </div>
                                )
                            })}
                    </div>
                )}
            </div>
        </div>


    )
}

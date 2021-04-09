import React, {useState, useEffect } from 'react'
import { Card, Button, Badge, Container, Spinner } from 'react-bootstrap'
import './CardComponent.scss'
import handleGetData from '../../helpers/handleGetData'
import handleSetData from '../../helpers/handleSetData'

import fetchData from '../../helpers/fetchData'
import { useSelector } from 'react-redux'



export default function CardComponent() {
  const [inputCharacter, setInputCharacter] = useState('')
  const [characters, setCharacters] = useState([])
  const [data, setData] = useState({})
  const [force, setForce] = useState(0)
  const [force2, setForce2] = useState(0)
  const [favs, setFavs] = useState([])
  const user = useSelector(state => state.userId)
  // let value = inputCharacter;
  // const characterNumber = Math.ceil(Math.random() * 100).toString()

  // useEffect(()=>{
  //     handleGetData().then((data)=>setData(data ? data : []))
  // },[force])
  // const handleLike = async () =>{
  //     await handleSetData([...data, {id: "123", like: 250}])
  //     setForce(force + 1)
  // }

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem('favs')) || [])
  }, [force2])

  useEffect(() => {
    fetchData('characters', '', '', '').then(data => {
      setCharacters(data)
    })
  }, [])

  useEffect(() => {
    handleGetData().then((data) => setData(data ? data : []))
  }, [force])
  const handleLike = async (id) => {
    const stringId = id.toString()
    if (user){
      await handleSetData({ ...data, [stringId]: { "like": data[stringId] ? (data[stringId]["like"] + 1) : 1 } })
      setForce(force + 1)
    }else{
      alert("You must login, after you login try again")
    }
  }

  const handleFavourite = (item) => {
    if (user){
    localStorage.setItem('favs', JSON.stringify([...favs, item]))
    setForce2(force2 + 1)
  } else {
    alert("You must login, after you login try again")
  }

  }

  return (
    <div className='CardContainer'>
      <div>
        <Container className='container-Form'>
          <form className='searchForm'>
            <input
              type='text'
              placeholder='Press Enter a Character'
              className='search'
              value={inputCharacter}
              onChange={(event) => {
                setInputCharacter(event.target.value)
                // console.log(inputCharacter)
              }}
            />

          </form>
        </Container>
      </div>
      {characters.length === 0
        ? <Button variant='danger' disabled>
          <Spinner
            as='span'
            animation='border'
            size='sm'
            role='status'
            aria-hidden='true'
          />
          Heroes Loading...
          </Button>
        : <div className='AllCards'>
          {!inputCharacter && characters[1] && (
            <>
              <Card className='cards' style={{ width: '11rem' }}>
                <Card.Img variant='top' src={`${characters[573].thumbnail.path}.${characters[573].thumbnail.extension}`} />
                <Card.Body>
                  <Card.Title className='cardTitle'>{characters[573].name}</Card.Title>
                  <Button variant='primary'>Go</Button>
                  <i onClick={() => handleLike(573)} class='fas fa-heart' />
                  <sup><Badge>{data[`573`] ? data[`573`]['like'] : 0}</Badge></sup>
                  <Button onClick={() => handleFavourite(characters[573])} variant='secondary'>Fav</Button>
                </Card.Body>
              </Card>
              <Card className='cards' style={{ width: '11rem' }}>
                <Card.Img variant='top' src={`${characters[1193].thumbnail.path}.${characters[1193].thumbnail.extension}`} />
                <Card.Body>
                  <Card.Title className='cardTitle'>{characters[1185].name}</Card.Title>
                  <Button variant='primary'>Go</Button>
                  <i onClick={() => handleLike(1185)} class='fas fa-heart' />
                  <sup><Badge>{data[`1185`] ? data[`1185`]['like'] : 0}</Badge></sup>
                  <Button onClick={() => handleFavourite(characters[1185])} variant='secondary'>Fav</Button>
                </Card.Body>
              </Card>
              <Card className='cards' style={{ width: '11rem' }}>
                <Card.Img variant='top' src={`${characters[188].thumbnail.path}.${characters[188].thumbnail.extension}`} />
                <Card.Body>
                  <Card.Title className='cardTitle'>{characters[185].name}</Card.Title>
                  <Button variant='primary'>Go</Button>
                  <i onClick={() => handleLike(185)} class='fas fa-heart' />
                  <sup><Badge>{data[`185`] ? data[`185`]['like'] : 0}</Badge></sup>
                  <Button onClick={() => handleFavourite(characters[185])} variant='secondary'>Fav</Button>
                </Card.Body>
              </Card>
              <Card className='cards' style={{ width: '11rem' }}>
                <Card.Img variant='top' src={`${characters[1316].thumbnail.path}.${characters[4].thumbnail.extension}`} />
                <Card.Body>
                  <Card.Title className='cardTitle'>{characters[1311].name}</Card.Title>
                  <Button variant='primary'>Go</Button>
                  <i onClick={() => handleLike('1311')} class='fas fa-heart' />
                  <sup><Badge>{data[`1311`] ? data[`1311`]['like'] : 0}</Badge></sup>
                  <Button onClick={() => handleFavourite(characters[1311])} variant='secondary'>Fav</Button>
                </Card.Body>
              </Card>
              <Card className='cards' style={{ width: '11rem' }}>
                <Card.Img variant='top' src={`${characters[297].thumbnail.path}.${characters[297].thumbnail.extension}`} />
                <Card.Body>
                  <Card.Title className='cardTitle'>{characters[297].name}</Card.Title>
                  <Button variant='primary'>Go</Button>
                  <i onClick={() => handleLike('297')} class='fas fa-heart' />
                  <sup><Badge>{data[`297`] ? data[`297`]['like'] : 0}</Badge></sup>
                  <Button onClick={() => handleFavourite(characters[297])} variant='secondary'>Fav</Button>
                </Card.Body>
              </Card>
            </>
          )}
        </div>}

      <div>
        {inputCharacter.length < 3 ? (
          null
        ) : (
          <div className='AllCards'>
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
                    <Card className='cards' style={{ width: '11rem', height: 'auto' }}>
                      <Card.Img variant='top' src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
                      <Card.Body>
                        <Card.Title className='cardTitle'>{item.name}</Card.Title>
                        <Button variant='primary'>Go</Button>
                        <i onClick={() => handleLike(item.id)} class='fas fa-heart' />
                        <sup><Badge>{data[`${item.id}`] ? data[`${item.id}`]['like'] : 0}</Badge></sup>
                        <Button onClick={() => handleFavourite(item)} variant='secondary'>Fav</Button>
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

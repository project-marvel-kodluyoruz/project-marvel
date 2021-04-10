import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import profilePhoto from './pp.jpg'

import ComicsCard from '../../Components/ComicsCard/ComicsCard'

import './Profile.scss'
import { useSelector } from 'react-redux'

const Profile = () => {
  const [favs, setFavs] = useState([])
  const [comicsFavs, setComicsFavs] = useState([])
  const [characterCheck, setCharacterCheck] = useState(true)
  const [comicsCheck, setComicsCheck] = useState(false)
  const user = useSelector(state => state.userId)
  console.log(user)
  console.log(user.displayName)


  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem('favs')) || [])
    setComicsFavs(JSON.parse(localStorage.getItem('favsComics')) || [])
  }, [])
  console.log(favs)


  return (
    <div className="profile-page">
      <div className="profile">
        <div className="nav-profile">
          <div className="pp">
            <img src={profilePhoto} />
            <p>{user.displayName}</p>
          </div>
          <h5
            style={{ color: characterCheck ? '#E8E8E8' : 'gray' }}
            onClick={() => { setCharacterCheck(true); setComicsCheck(false) }}>
            My Characters
          </h5>
          <h5
            style={{ color: comicsCheck ? '#E8E8E8' : 'gray' }}
            onClick={() => { setCharacterCheck(false); setComicsCheck(true) }}>
            My Comics
          </h5>
          <h5 onClick={()=> alert('coming soon...')}>My Movies</h5>
          <h5 onClick={()=> alert('coming soon...')}>My Marvel Friends</h5>
          <h5><a href='https://www.shopdisney.com/marvel-content/'> Let's shop </a></h5>

        </div>
        {
          characterCheck &&
          <Container className="characters-container">
            <h2>Favourite Characters</h2>
            <div className="my-all-characters">
              {
                favs.map((item) => {
                  return (
                    <>
                      <Card className='cards' style={{ width: '11rem', height: 'auto' }}>
                        <Card.Img variant='top' src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
                        <Card.Body>
                          <Card.Title className='cardTitle'>{item.name}</Card.Title>
                          <Button variant='primary'>Go</Button>
                        </Card.Body>
                      </Card>
                    </>
                  )
                })
              }
            </div>
          </Container>
        }
        {
          comicsCheck &&
          <Container className="comics-container">
            <h2>Favourite Comics</h2>
            <div className="my-all-characters">
              {
                comicsFavs.map((item) => {
                  return (
                    <div className="card-wrapper">
                      <Card className='cards'>
                        <ComicsCard className="comics-card" item={item} />
                      </Card>
                    </div>
                  )
                })
              }
            </div>
          </Container>
        }
      </div>
    </div>
  )
}

export default Profile
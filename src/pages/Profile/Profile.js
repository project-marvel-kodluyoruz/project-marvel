import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

const Profile = () => {
  const [favs, setFavs] = useState([])
  const [force2, setForce2] = useState(0)

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem('favs')) || [])
    console.log(favs)
  }, [force2])


  return (
    <div className="profile">
      <div className="my-characters">
        <h5>my characters</h5>
        {
          favs.map((item) => {
            <>
              <Card className='cards' style={{ width: '11rem', height: 'auto' }}>
                <Card.Img variant='top' src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
                <Card.Body>
                  <Card.Title className='cardTitle'>{item.name}</Card.Title>
                  <Button variant='primary'>Go</Button>
                  {/* <i onClick={() => handleLike(item.id)} class='fas fa-heart' /> */}
                  {/* <sup><Badge>{data[`${item.id}`] ? data[`${item.id}`]['like'] : 0}</Badge></sup> */}
                  {/* <Button onClick={() => handleFavourite(item)} variant='secondary'>Fav</Button> */}
                </Card.Body>
              </Card>
            </>
          })
        }
      </div>
    </div>
  )
}

export default Profile
import { Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

const Profile = () => {
  const [favs, setFavs] = useState([])

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem('favs')) || [])
  }, [])
  console.log(favs)


  return (
    <div className="profile">
      <div className="my-characters">
        <h5>my characters</h5>
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
              </>)
          })
        }
      </div>
    </div>
  )
}

export default Profile
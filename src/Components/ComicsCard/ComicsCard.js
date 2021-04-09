import React, {useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import './ComicsCard.scss'

const Card = ({ item }) => {
  const [force2, setForce2] = useState(0)
  const [favs, setFavs] = useState([])
  const user = useSelector(state => state.userId)

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem('favs')) || [])
  }, [force2])

  const handleFavourite = (item) => {
    if (user) {
      localStorage.setItem('favs', JSON.stringify([...favs, item]))
      setForce2(force2 + 1)
    } else {
  //     <Alert variant='primary'>
  //       Lütfen giriş yapınız!
  // </Alert>
      alert('Lütfen giriş yapınız!')
    }
  }

  return (
    <div className='snip-wrapper'>
      <figure className='snip1584'>
        <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
        <figcaption>
          <h3>see details...</h3>
          <Button>Ekle</Button>
        </figcaption><a href={item.urls[0].url} />
      </figure>
      <Button onClick={() => handleFavourite(item)} variant='secondary'>Fav</Button>
      <h3>{item.title}</h3>
      {/* {item.creators.items.map((data) => <h5>{data.name}</h5>)} */}
      {  item.creators.items[0] && <h5>{item.creators.items[0].name}</h5>}
    </div>
  )
}

export default Card

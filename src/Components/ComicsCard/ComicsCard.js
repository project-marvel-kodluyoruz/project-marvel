import React, {useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

import './ComicsCard.scss'

const Card = ({ item }) => {
  const [force2, setForce2] = useState(0)
  const [favs, setFavs] = useState([])

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem('favs')) || [])
  }, [force2])

  const handleFavourite = (item) => {
    localStorage.setItem('favs', JSON.stringify([...favs, item]))
    setForce2(force2 + 1)
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

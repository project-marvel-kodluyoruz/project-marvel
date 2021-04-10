import React, {useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import AlertModal from "../AlertModal/AlertModal"

import './ComicsCard.scss'

const Card = ({ item }) => {
  const [force2, setForce2] = useState(0)
  const [favs, setFavs] = useState([])
  const user = useSelector(state => state.userId)
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem('favsComics')) || [])
  }, [force2])

  const handleFavourite = (item) => {
    if (user) {
      localStorage.setItem('favsComics', JSON.stringify([item, ...favs]))
      setForce2(force2 + 1)
      console.log(item)
    } else {
      setModalShow(true)
    }
  }

  return (
    <div className='snip-wrapper'>
      <figure className='snip1584'>
        <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
        <figcaption>
          <h3>see details...</h3>
          <Button>Ekle</Button>
        </figcaption><a href={item.urls[0].url} />
      </figure>
      <Button onClick={() => handleFavourite(item)} variant='secondary'>Fav</Button>
      <h3>{item.title}</h3>
      {/* {item.creators.items.map((data) => <h5>{data.name}</h5>)} */}
      {  item.creators.items[0] && <h5>{item.creators.items[0].name}</h5>}
      <AlertModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  )
}

export default Card

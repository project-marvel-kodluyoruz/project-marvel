import React from 'react'
import {Button} from 'react-bootstrap'

import './ComicsCard.scss'

const Card = ({ item }) => {
  return (
    <div className='snip-wrapper'>
      <figure className='snip1584'>
        <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
        <figcaption>
          <h3>see details...</h3>
          <Button>Ekle</Button>
        </figcaption><a href={item.urls[0].url} />
      </figure>
      <h3>{item.title}</h3>
      {/* {item.creators.items.map((data) => <h5>{data.name}</h5>)} */}
      {  item.creators.items[0] && <h5>{item.creators.items[0].name}</h5>}
    </div>
  )
}

export default Card

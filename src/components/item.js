import React from 'react'

const Item = ({ title, image, detail }) => (
  <div>
    <h3>{title}</h3>
    <img src={image} alt="" />
    <p>{detail}</p>
  </div>
)

export default Item

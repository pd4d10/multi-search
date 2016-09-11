import React from 'react'
import Item from './item'

const List = ({ list }) => (
  <ul>
    {list.map(item => (
      <li>
        <Item {...item} />
      </li>
    ))}
  </ul>
)

export default List

import React from 'react'
import Cards from './Cards';
import order from "../data.json"

export default function Main() {
  console.log(order.title)
  return (
    <Cards title={order.title}/>
    
  )
}

import React from 'react'
import Menubar from './Menubar'
import Task from './Task'
import './Hero.css'
export default function Hero(props) {
  return (
    <div className='hero-section'>
        <Menubar active={props.active} />
        <Task active={props.active}/>
    </div>
  )
}
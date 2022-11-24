import React, { useRef, useState } from 'react'
import './styles.css'
import Draggable, { DraggableCore } from 'react-draggable'

const Comparison = () => {
  const nodeRef = useRef(null)
  const [stopDrag, setStopDrag] = useState(false)
  const [stopLeftDrag, setStopLeftDrag] = useState(false)

  const eventHandlarEqual = (e) => {
    console.log(e.clientX)
    console.log(e.clientY)
    if (
      (e.clientX >= 895 || e.clientX <= 900) &&
      (e.clientY >= 245 || e.clientY <= 250)
    ) {
      setStopLeftDrag(true)
    } else {
    }
  }

  const eventHandlar = (e) => {
    if (
      (e.clientX >= 465 || e.clientX <= 470) &&
      (e.clientY >= 245 || e.clientY <= 250)
    ) {
      setStopDrag(true)
    } else {
    }
  }

  return (
    <div>
      <h1 className='head-info'>
        Rasmlarni taqqoslang va ular orasidagi teng "=" yoki teng emas "≠"
        belgisini to'g'ri joylashtiring.
      </h1>

      <div className='check-image-box'>
        <div className='image-item'>
          <img
            src='https://cdn.pixabay.com/photo/2016/10/25/22/22/roses-1770165__480.png'
            alt=''
          />
        </div>
        <div className='comparison-box'></div>
        <div className='image-item'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKtEOqqzs58GJIrgdhwUg7fPHhLkUtTiiV9FFEdYNTfIsrSDoeetma1s2uNJJu9WTI6ZE&usqp=CAU'
            alt=''
          />
        </div>

        <div className='image-item'>
          <img
            src='https://thumbs.dreamstime.com/z/weather-icons-nine-related-set-31340215.jpg'
            alt=''
          />
        </div>

        <div className='comparison-box'></div>
        <div className='image-item'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQztiwLlzrz2GjVSWA9YlOahbhlgVcUhacQ1mGtRZF5oiW-ljKRcu7LegG8nlX0tPohBbM&usqp=CAU'
            alt=''
          />
        </div>
      </div>
      <div className='check-bottom-box'>
        <Draggable
          disabled={stopLeftDrag}
          defaultPosition={{ x: 0, y: 0 }}
          nodeRef={nodeRef}
          onStop={eventHandlarEqual}
        >
          <div ref={nodeRef} className='check-item'>
            <h1>=</h1>
          </div>
        </Draggable>
        <Draggable
          disabled={stopDrag}
          defaultPosition={{ x: 0, y: 0 }}
          nodeRef={nodeRef}
          onStop={eventHandlar}
        >
          <div ref={nodeRef} className='check-item'>
            <h1>≠</h1>
          </div>
        </Draggable>
      </div>
    </div>
  )
}

export default Comparison

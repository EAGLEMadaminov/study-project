import React from 'react'
import { HiSpeakerWave } from 'react-icons/hi2'
import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const NumberChose = () => {
  const [speakText, setSpeakText] = useState('')
  const [twoClass, setTwoClass] = useState('')
  const [leftBubble, setLeftBubble] = useState('')
  const [changeColor, setChangeColor] = useState('')
  const inputLeftRef = useRef(null)
  const inputRightRef = useRef(null)

  const msg = new SpeechSynthesisUtterance()
  msg.text = speakText

  useEffect(() => {
    window.speechSynthesis.speak(msg)
  })

  const checkTenNumber = (e) => {
    if (e.target.textContent) {
      const a = parseInt(e.target.textContent, 10)
      if (a > 1) {
        return setTwoClass('add-border')
      } else {
        return setTwoClass('bad-border')
      }
    }
  }

  const checkLeftBubble = (e) => {
    const b = parseInt(e.target.value, 10)
    if (e.target.value) {
      if (b !== 3) {
        setChangeColor('padding-color-change')
        return setLeftBubble('add-border')
      } else {
        setChangeColor('')
        return setLeftBubble('')
      }
    }
  }

  const checkFunction = (e) => {
    inputLeftRef.current.value = e.target.textContent
    if (parseInt(inputLeftRef.current.value, 10) === 1) {
      setChangeColor('')
      return leftFunction(e)
    } else {
      return enterNumber(e)
    }
  }

  const leftFunction = (e) => {
    setTwoClass('')
    inputRightRef.current.focus()
    inputRightRef.current.value = e.target.textContent
  }

  const enterNumber = (e) => {
    let b = parseInt(e.target.textContent)
    if (b !== 1) {
      inputLeftRef.current.value = b
      setChangeColor('padding-color-change')
      setTwoClass('add-border')
    } else {
      inputLeftRef.current.value = b
      return setTwoClass('bad-border')
    }
  }

  return (
    <div>
      <div className='speak-info'>
        <button
          onClick={() =>
            setSpeakText("To'liq o'nlikni ajrating va sharlarni sanang")
          }
          className='speak-btn'
        >
          <HiSpeakerWave className='speak-icon' />
        </button>
        <h1>To'liq o'nlikni ajrating va sharlarni sanang.</h1>
      </div>
      <div className='bubble-box'>
        <div className={`bad-border ${twoClass}`}>
          <div className='first-five-box five-box'>
            <div className='bubble-item'></div>
            <div className='bubble-item'></div>
            <div className='bubble-item'></div>
            <div className='bubble-item'></div>
            <div className='bubble-item'></div>
          </div>
          <div className='bottom-box'>
            <div className='bubble-item'></div>
            <div className='bubble-item'></div>
            <div className='bubble-item'></div>
            <div className='bubble-item'></div>
            <div className='bubble-item'></div>
          </div>
        </div>
        <div className={`right-bubble ${leftBubble}`}>
          <div className='bubble-item'></div>
          <div className='bubble-item'></div>
          <div className='bubble-item'></div>
        </div>
      </div>
      <button className={`check-btn ${changeColor}`}>
        <input
          type='text'
          className='ten-input'
          onChange={checkTenNumber}
          ref={inputLeftRef}
        />
        <div className='line-box'>
          <span className='small-line'></span>
          <span className='small-line'></span>
        </div>
        <input
          type='text'
          className='leftInput'
          onChange={checkLeftBubble}
          ref={inputRightRef}
        />
      </button>
      <button className='enter-bottom-btn' onClick={checkFunction}>
        0
      </button>
      <button className='enter-bottom-btn' onClick={checkFunction}>
        1
      </button>
      <button className='enter-bottom-btn' onClick={checkFunction}>
        2
      </button>
      <button className='enter-bottom-btn' onClick={checkFunction}>
        3
      </button>
      <button className='enter-bottom-btn' onClick={checkFunction}>
        4
      </button>
      <button className='enter-bottom-btn' onClick={checkFunction}>
        5
      </button>
      <button className='enter-bottom-btn' onClick={checkFunction}>
        6
      </button>
      <button className='enter-bottom-btn' onClick={checkFunction}>
        7
      </button>
      <button className='enter-bottom-btn' onClick={checkFunction}>
        8
      </button>
      <button className='enter-bottom-btn' onClick={checkFunction}>
        9
      </button>
      <button className='move-btn'>
        <Link to='/image'>Next</Link>{' '}
      </button>
    </div>
  )
}

export default NumberChose

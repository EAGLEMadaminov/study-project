import React from 'react'
import { HiSpeakerWave } from 'react-icons/hi2'
import { useEffect, useState, useRef } from 'react'

const NumberChose = () => {
  const [speakText, setSpeakText] = useState('')
  const [twoClass, setTwoClass] = useState('')
  const [leftBubble, setLeftBubble] = useState('')
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
    if (b !== 3) {
      return setLeftBubble('add-border')
    } else {
      return setLeftBubble('')
    }
  }

  const enterNumber = (e) => {
    let b = parseInt(e.target.textContent)
    if (b !== 1) {
      inputLeftRef.current.value = e.target.textContent
      return setTwoClass('add-border')
    } else {
      inputLeftRef.current.value = e.target.textContent
      return setTwoClass('bad-border')
    }

    if (b !== 3) {
      inputRightRef.current.value = e.target.textContent
      return setLeftBubble('add-border')
    } else {
      inputRightRef.current.value = e.target.textContent
      return setLeftBubble('bad-border')
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
      <button className='check-btn'>
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
        <input type='text' onChange={checkLeftBubble} ref={inputRightRef} />
      </button>
      <button className='enter-bottom-btn' num='0' onClick={enterNumber}>
        0
      </button>
      <button className='enter-bottom-btn' num='1' onClick={enterNumber}>
        1
      </button>
      <button className='enter-bottom-btn' num='2' onClick={enterNumber}>
        2
      </button>
      <button className='enter-bottom-btn' num='3' onClick={enterNumber}>
        3
      </button>
      <button className='enter-bottom-btn' num='4' onClick={enterNumber}>
        4
      </button>
      <button className='enter-bottom-btn' num='5' onClick={enterNumber}>
        5
      </button>
      <button className='enter-bottom-btn' num='6' onClick={enterNumber}>
        6
      </button>
      <button className='enter-bottom-btn' num='7' onClick={enterNumber}>
        7
      </button>
      <button className='enter-bottom-btn' num='8' onClick={enterNumber}>
        8
      </button>
      <button className='enter-bottom-btn' num='9' onClick={enterNumber}>
        9
      </button>
    </div>
  )
}

export default NumberChose

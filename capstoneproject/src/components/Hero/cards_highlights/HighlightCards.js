import React from 'react'
import greekSalad from './greek_salad.jpg'
import './highlight_cards.css'

export const HighlightCards = () => {
  return (
    <div className='high_card'>
        <div className='high_photo'>
        <img src={greekSalad} alt='Greek Salad' className='greekPhoto' />
        </div>
        <div className='high_title'>
        Greek Salad
        </div>
    </div>
  )
}

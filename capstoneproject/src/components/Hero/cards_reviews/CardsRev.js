import React from 'react'
import './cardsRev.css'

export const CardsRev = ({customerRev, customerName, imgSrc}) => {
  return (
    <main className='rev_card'>
      <div className='profilePic'>
        <img src={imgSrc} alt='Profile Pic' />
      </div>
      <div className='customerRev'>
        {customerRev}
      </div>
      <div className='profileName'>
        {customerName}
      </div>
    </main>
  )
}

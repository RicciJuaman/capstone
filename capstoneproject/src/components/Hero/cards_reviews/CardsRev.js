import React from 'react'
import './cardsRev.css'

export const CardsRev = ({customerRev, customerName}) => {
  return (
    <main className='rev_card'>
      <div className='profilePic'>
        <img src='' alt='Profile Pic' />
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

import React from 'react'
import greekSalad from './GreekSalad.jpeg'
import caesarSalad from './CS.jpg'
import chickenSoup from './chickenSoup.jpg'
import './highlight_cards.css'

export const HighlightCards = () => {
  return (
    <main className='hc-cont'>
      <div className='high_card'>
        <div className='high_photo'>
          <img src={greekSalad} alt='Greek Salad' className='greekPhoto' />
        </div>
        <div className='high_text'>
          <div className='high_title'>
            Greek Salad
          </div>
          <div className='high_desc'>
            Experience the taste of Greece with our refreshing Greek Salad at Little Lemon. Crisp cucumbers, tomatoes, feta, and Kalamata olives, perfectly dressed in olive oil. A Mediterranean delight in every bite.
          </div>
          <div className='high_order'>
            Order now!
          </div>
        </div>
      </div>



      {/* Second Card */}
      <div className='high_card'>
        <div className='high_photo'>
          <img src={caesarSalad} alt='Caesars Salad' className='greekPhoto' />
        </div>
        <div className='high_text'>
          <div className='high_title'>
            Caesar’s Salad
          </div>
          <div className='high_desc'>
          Experience classic elegance with our Caesar Salad at Little Lemon. Crisp romaine, creamy dressing, Parmesan, and croutons create a perfect blend of flavors and textures.          </div>
          <div className='high_order'>
            Order now!
          </div>
        </div>
      </div>



      {/* Second Card */}
      <div className='high_card'>
        <div className='high_photo'>
          <img src={chickenSoup} alt='Chicken Soup' className='greekPhoto' />
        </div>
        <div className='high_text'>
          <div className='high_title'>
          Chicken Soup          </div>
          <div className='high_desc'>
          Warm your soul with our comforting Chicken Soup at Little Lemon. Tender chicken, fresh vegetables, and aromatic herbs simmered to perfection.          </div>
          <div className='high_order'>
            Order now!
          </div>
        </div>
      </div>
    </main>
  )
}

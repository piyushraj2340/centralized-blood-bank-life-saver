import React from 'react';
import { Link } from 'react-router-dom';

import donorImage1 from '../../asset/images/donor_image_1.png';
// import donorImage2 from '../asset/images/donor_image_2.png';
// import donorImage3 from '../../asset/images/donor_image_3.png';

function FindAndDonor() {
  return (
    <header className='header header-join-us'>
      <div className='header-info header-join-us-info'>
        <h2>LIFE SAVER PROJECT</h2>
        <p>ONE DONAR CAN SAVE 4 LIVES!!!</p>
        <div className='info-btn'>
          <Link to='/search-blood' className='btn btn-find-blood'>Find Bloods</Link>
          <Link to='/signup' className='btn btn-donor'>Be A Donor</Link>
        </div>
      </div>
      <div className='header-image header-join-us-image'>
        <img src={donorImage1} alt="Blood Donor" />
      </div>
    </header>
  )
}

export default FindAndDonor;
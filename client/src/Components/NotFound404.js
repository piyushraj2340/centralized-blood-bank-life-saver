import React from 'react'
import lostPage404 from '../asset/images/404.gif';

const NotFound404 = () => {
  return (
    <div className="container-404">
      <div className="content-404">
        <img src={lostPage404} alt="lost 404" />
      </div>
    </div>
  )
}

export default NotFound404
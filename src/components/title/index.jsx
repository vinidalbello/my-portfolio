import React from 'react'
import './style.css'

function Title() {
  return (
    <div>
      <div className="title">
      <div className='circle'>
      <div style={{ textAlign: "left", marginBottom: 20 }}>Vinicius</div>
        <div style={{ textAlign: "center", marginBottom: 20, marginLeft: 20}}>Dal</div>
        <div style={{ textAlign: "right" }}>Bello</div>
      </div>
      </div>
      <div className='subtitle'>Junior Software Developer</div>
    </div>
  )
}

export default Title;

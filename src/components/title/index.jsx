import React from 'react'
import './style.css'

function Title() {
  return (
    <div style={{ 
      marginTop: 100,
      marginLeft: 75,
      display: "flex",
      flexDirection: "column",
      width: 200,
      fontFamily: "'Lato', sans-serif",
      fontSize: 35,
      
       }}>
      <div style={{ textAlign: "left", marginBottom: 20 }}>Vinicius</div>
      <div style={{ textAlign: "center", marginBottom: 20, marginLeft: 20}}>Dal</div>
      <div style={{ textAlign: "right" }}>Bello</div>
    </div>
  )
}

export default Title;

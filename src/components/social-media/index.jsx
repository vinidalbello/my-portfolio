import React from 'react'
import { SocialIcon } from 'react-social-icons';
import "./style.css"


function SocialMedia() {
  return (
    <div>
        <SocialIcon style={{ marginRight: 15, marginLeft: 30}} url="https://www.linkedin.com/in/viniciusdb/" />
        <SocialIcon style={{ marginRight: 15}} url="https://github.com/vinidalbello" />
        <SocialIcon url="https://www.instagram.com/vinidb__/" />
    </div>
  )
}

export default SocialMedia
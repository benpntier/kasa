import './index.scss'
import React, { useState } from 'react'

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false)

  //fonction pour gérer l'afichage du contenu des collapses
  function open() {
    setIsOpen(!isOpen)
  }

  return (
    <div onClick={open} className="collapse">
      <div className="collapse__title">
        <h2 className="collapse__title__content">{title}</h2>
        <div className="collapse__icon">
          <i className={'fa-solid fa-chevron-' + (isOpen ? 'up' : 'down')}></i>
        </div>
      </div>
      <div className="collapse__text">
        {isOpen && <p className="collapse__text__content">{text}</p>}
      </div>
    </div>
  )
}

export default Collapse

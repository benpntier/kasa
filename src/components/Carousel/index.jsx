import React, { useState } from 'react'
import './index.scss'

function Carousel({ pictures }) {
  const [visibleIndex, setVisibleIndex] = useState(0)
  const nbPictures = pictures.length

  const prevPicture = () => {
    setVisibleIndex(visibleIndex === 0 ? nbPictures - 1 : visibleIndex - 1)
  }

  const nextPicture = () => {
    setVisibleIndex(visibleIndex === nbPictures - 1 ? 0 : visibleIndex + 1)
  }

  if (!Array.isArray(pictures) || nbPictures <= 0) {
    return null
  }

  return (
    <section className="carousel">
      {nbPictures > 1 && (
        <div
          onClick={prevPicture}
          className="carousel__arrow carousel__arrow--left"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </div>
      )}
      {nbPictures > 1 && (
        <div
          onClick={nextPicture}
          className="carousel__arrow carousel__arrow--right"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      )}
      {pictures.map((picture, i) => {
        return (
          <div
            key={i}
            className={
              'carousel__picture' +
              (i === visibleIndex ? ' carousel__picture--visible' : '')
            }
          >
            {i === visibleIndex && (
              <img
                src={picture}
                alt={'image' + { i }}
                className="carousel__picture__img"
              />
            )}
          </div>
        )
      })}
      {nbPictures > 1 && (
        <p className="carousel__number">
          {visibleIndex + 1}/{nbPictures}
        </p>
      )}
    </section>
  )
}

export default Carousel

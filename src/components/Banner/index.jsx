import './index.scss'

function Banner({ img, text }) {
  return (
    <div className="banner">
      <img className="banner__img" src={img} alt="Kasa" />
      <h1 className="banner__text">{text}</h1>
    </div>
  )
}

export default Banner

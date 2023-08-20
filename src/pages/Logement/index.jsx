import { useParams, Navigate } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import Data from '../../data/logements.json'
import './index.scss'

function Logement() {
  document.title = 'Kasa'

  /* Récupère la bonne fiche */
  const { id } = useParams()

  const logement = Data.find((logement) => logement.id === id)

  const tags = logement.tags.map((tag, i) => {
    return <Tag key={i} tag={tag} />
  })

  const equipments = logement.equipments.map((equipment, i) => {
    return (
      <span key={i} className="equipment-element">
        {equipment}
      </span>
    )
  })

  return (
    <>
      {logement ? (
        <main className="logement max-width">
          <div className="logement__header">
            <div className="logement__infos">
              <h1 className="logement__name">{logement.title}</h1>
              <h2 className="logement__location">{logement.location}</h2>
              <div className="logement__tags">{tags}</div>
            </div>
            <div className="logement__details">
              <div className="logement__host">
                <p className="logement__host__name">
                  {logement.host.name.split(' ').join('\n')}
                </p>
                <img
                  src={logement.host.picture}
                  alt={logement.host.name}
                  className="logement__host__picture"
                />
              </div>
              <Rating stars={logement.rating} />
            </div>
          </div>
          <div className="logement__content">
            <div className="logement__collapse">
              <Collapse title="Description" text={logement.description} />
            </div>
            <div className="logement__collapse">
              <Collapse
                title="Équipements"
                text={<div className="equipment-list">{equipments}</div>}
              />
            </div>
          </div>
        </main>
      ) : (
        <Navigate replace to="/404" />
      )}
    </>
  )
}

export default Logement

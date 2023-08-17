import { Link } from 'react-router-dom'
import './index.scss'

function Error() {
  return (
    <main class="error max-width">
      <div class="error__message">
        <h1 class="error__message__404">404</h1>
        <h2 class="error__message__notfound">
          Oups! La page que vous demandez n'existe pas.
        </h2>
      </div>
      <Link to="/" class="error__home">
        Retourner sur la page d'accueil
      </Link>
    </main>
  )
}

export default Error

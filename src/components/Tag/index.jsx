import './index.scss'

function Tag({ key, tag }) {
  return (
    <p key={key} className="tag">
      {tag}
    </p>
  )
}

export default Tag

import "./Card.css"

function Card({ content }) {
  return (
    <div className="card-container">
      <section className="card-section">
        {content}
      </section>
      
    </div>
  )
}

export default Card

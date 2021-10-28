import "./Card.css";

function Card({ content }) {
  return (
    <div className="card-container">
      <section className="card-section">
        <h1>
          Id : {content.UserId} - Nom : {content.Name}{" "}
        </h1>
        {content.Devanture && (
          <img src={content.Devanture} alt="Devanture Commerce"></img>
        )}
      </section>
    </div>
  );
}

export default Card;

function Card({ title, category, description, link}) {
    return (
        <div className="card">
        <span className="category">{category}</span>

        <h2>{title}</h2>

        <p>{description}</p>

        <a href={link} target="_blank" rel="noreferrer">
            Learn More
        </a>
        </div>
    );
}

export default Card;
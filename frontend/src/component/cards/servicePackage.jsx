const PackageCard = ({
  title,
  duration,
  price,
  features,
  popular
}) => {
  return (
    <div className={`package-card ${popular ? "popular" : ""}`}>

      {popular && (
        <div className="popular-badge">
          MOST POPULAR
        </div>
      )}

      <h2>{title}</h2>

      <p className="duration">
        {duration}
      </p>

      <h3>{price}</h3>

      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <button>BOOK NOW</button>

    </div>
  );
};

export default PackageCard;
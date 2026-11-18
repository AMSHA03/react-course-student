import "./App.css";

export default function PizzaItem({ pizza }) {
  return (
    <article className="pizza-card">
      <div className="card-img">
        <img src={pizza.imgUrl} alt="" />
      </div>
      <div className="card-content">
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <p>{pizza.price}</p>
      </div>
    </article>
  );
}

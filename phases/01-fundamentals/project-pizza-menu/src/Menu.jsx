import PizzaItem from "./PizzaItem";
import "./App.css";

export default function Menu({ pizzas }) {
  return (
    <section className="menu-list">
      <h2 className="menu-heading">Our Menu</h2>
      {pizzas.map((pizza) => (
        <PizzaItem key={pizza.id} pizza={pizza} />
      ))}
    </section>
  );
}

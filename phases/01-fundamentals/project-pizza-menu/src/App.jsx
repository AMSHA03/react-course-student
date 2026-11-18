import Header from "./Header";
import Menu from "./Menu";

import "./App.css";

const pizzas = [
  {
    id: 0,
    name: "Pepperonni",
    ingredients: "Onion, Tomatoe, and mozzarella",
    price: 15000,
    imgUrl:
      "https://images.pexels.com/photos/15491639/pexels-photo-15491639.jpeg",
  },
  {
    id: 1,
    name: "Spinach",
    ingredients: "Spinach and ricotta",
    price: 18000,
    imgUrl:
      "https://images.pexels.com/photos/29272548/pexels-photo-29272548.jpeg",
  },
  {
    id: 2,
    name: "Chicken Suya",
    ingredients: "Chicken, Pepper and cheese",
    price: 12000,
    imgUrl:
      "https://images.pexels.com/photos/5639547/pexels-photo-5639547.jpeg",
  },
  {
    id: 3,
    name: "Chicken Suya",
    ingredients: "Chicken, Pepper and cheese",
    price: 12000,
    imgUrl:
      "https://images.pexels.com/photos/5639547/pexels-photo-5639547.jpeg",
  },
];

function App() {
  return (
    <main>
      <Header />
      <hr />
      <Menu pizzas={pizzas} />
    </main>
  );
}

export default App;

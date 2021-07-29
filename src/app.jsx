import ReactDOM from "react-dom";
import { Card } from "./components/Card/Card";
import { SearchBar } from "./components/Search-Bar/Search-Bar";
import "./style.scss";

const dataArr = [
  {
    id: 0,
    img: "",
    country: "Turkey",
    hotel: "Plaza Royal",
    nights: "7",
    price: "400",
  },
  {
    id: 1,
    img: "",
    country: "Gonduras",
    hotel: "Dungeon",
    nights: "14",
    price: "300",
  },
  {
    id: 2,
    img: "",
    country: "Mexico",
    hotel: "Burrito Paradise",
    nights: "12",
    price: "50",
  },
  {
    id: 3,
    img: "",
    country: "Egypt",
    hotel: "Arabian night",
    nights: "9",
    price: "3400",
  },
];

function App() {
  return (
    <main className="main">
      <SearchBar />
      <section className="cards-container">
        {dataArr.map((card) => (
          <Card
            key={card.id}
            img={card.img}
            title={card.hotel}
            subtitle={card.country}
            nights={card.nights}
            price={card.price}
          />
        ))}
      </section>
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

import ReactDOM from "react-dom";
import { Card } from "./components/Card/Card";
import { SearchBar } from "./components/Search-Bar/Search-Bar";
import { dataArr } from "./shared/data";
import "./style.scss";

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

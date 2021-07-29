import ReactDOM from "react-dom";
import { Card } from "./components/Card/Card";
import { SearchBar } from "./components/Search-Bar/Search-Bar";
import "./style.scss";

const dataArr = [
  {
    id: 0,
    img: "https://joinup.ua/media/2019/05/Mysea-Alara-Hotel-min.jpeg",
    country: "Turkey",
    hotel: "Plaza Royal",
    nights: "7",
    price: "400",
  },
  {
    id: 1,
    img: "https://thumbnails.expedia.com/Gt48N4ksyQgacrSYg3yKyfAtMig=/500x333/smart/filters:quality(60)/exp.cdn-hotels.com/hotels/1000000/920000/918000/917943/c03718b0_y.jpg",
    country: "Gonduras",
    hotel: "Dungeon",
    nights: "14",
    price: "300",
  },
  {
    id: 2,
    img: "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/25/52/2552912_v5.jpeg",
    country: "Mexico",
    hotel: "Burrito Paradise",
    nights: "12",
    price: "50",
  },
  {
    id: 3,
    img: "https://static.toiimg.com/thumb/30282584/WelcomHotel-Bella-Vista.jpg?width=1200&height=900",
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

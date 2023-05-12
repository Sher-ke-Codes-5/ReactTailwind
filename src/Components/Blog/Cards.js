import React from "react";
import logo from "../../assets/Screenshot_25.png";

import { Link } from "react-router-dom";
const data = [
  {
    id: 1,
    image: logo,
    title: "Space The  Final Frontier",
    head: "02 hours Ago",
    linking: "/page",
  },
  {
    id: 2,
    image: logo,
    title: "The Amazing Hubble ",
    head: "02 hours Ago",
    linking: "/page1",
  },
  {
    id: 3,
    image: logo,
    title: "Astronomy and Astrology ",
    head: "03 hours Ago",
    linking: "/page2",
  },
  {
    id: 4,
    image: logo,
    title: "Asteroid telescope ",
    head: "01 hours Ago",
    linking: "/page3",
  },
];
const Cards = ({ image, title, head, linking }) => {
  return (
    <div className="flex flex-row gap-4 w-72  ml-10  mt-10">
      <img src={image} alt="images" />
      <div className="flex flex-col ">
        <Link to={linking}>
          <span className="hover:text-yellow-300 focus:outline-none">
            {title}
          </span>
        </Link>
        <h1 className="text-gray-400">{head}</h1>
      </div>
    </div>
  );
};

function DummyCard() {
  return (
    <div>
      {data.map((item) => {
        return (
          <Cards
            key={item.id}
            image={item.image}
            title={item.title}
            head={item.head}
            linking={item.linking}
          />
        );
      })}
    </div>
  );
}
export default DummyCard;

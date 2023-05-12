import React from "react";
import logo6 from "../../assets/Screenshot_30.png";

const data = [
  {
    id: 1,
    images: logo6,
    Name: "Emily Brunt",
    Dates: "December 4, 2018 at 3:12 pm",
    Passage: "Never say goodbye till the end comes!",
  },
  {
    id: 2,
    images: logo6,
    Name: "Emily Brunt",
    Dates: "December 4, 2018 at 3:12 pm",
    Passage: "Never say goodbye till the end comes!",
  },
  {
    id: 3,
    images: logo6,
    Name: "Emily Brunt",
    Dates: "December 4, 2018 at 3:12 pm",
    Passage: "Never say goodbye till the end comes!",
  },
];

const Comment = ({ images, Name, Dates, Passage }) => {
  return (
    <div className="flex md:flex-col md:w-auto w-[20.1rem] flex-row md:mt-2  ">
      <div className="flex md:justify-center md:items-center md:mr-52"></div>
      <div className="flex md:flex-row flex-row md:ml-0 ml-4 md:mt-0 mt-10  ">
        <img
          src={images}
          alt="img"
          className="md:ml-20 md:mt-20 h-[60px] w-[60px]"
        />
        <div className="flex flex-col md:flex-col">
          <h1 className="md:ml-10 ml-8 text-sm md:text-base font-bold md:mt-20 w-42 ">
            {Name}
          </h1>
          <h1 className="md:mt-2 ml-8 text-xs md:text-base text-gray-400 md:ml-10">
            {Dates}
          </h1>
          <p className="md:mt-10 mt-6 ml-8 text-xs md:text-base text-gray-400 md:ml-10">
            {Passage}
          </p>
        </div>
        <button className="md:ml-[24rem] md:mr-0 mr-4 md:text-base text-sm  font-bold text-md border  h-[32px] md:h-[38px] md:w-24 w-20 hover:bg-red-600 md:mt-20 ">
          Reply
        </button>
      </div>
    </div>
  );
};

function DummyComment() {
  return (
    <div className="md:w-auto sm:w-[20rem]">
      {data.map((item) => {
        return (
          <Comment
            key={item.id}
            images={item.images}
            Name={item.Name}
            Dates={item.Dates}
            Passage={item.Passage}
          />
        );
      })}
    </div>
  );
}

export default DummyComment;

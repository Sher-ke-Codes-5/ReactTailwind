import React from "react";
const data = [
  {
    title: "Brands",
    items: [
      {
        id: 1,
        val: "Apple (29)",
      },
      {
        id: 2,
        val: "Asus (29)",
      },
      {
        id: 3,
        val: "Gionee (29)",
      },
      {
        id: 4,
        val: "Micromax (29)",
      },
      {
        id: 5,
        val: "Samsung (27)",
      },
    ],
  },
  {
    title: "Colors",
    items: [
      {
        id: 1,
        val: "Black (27)",
      },
      {
        id: 2,
        val: "Black width Red (23)",
      },
      {
        id: 3,
        val: "Black with Leather (21)",
      },
      {
        id: 4,
        val: "Gold (27)",
      },
      {
        id: 5,
        val: "Spacegrey (27)",
      },
    ],
  },
  {
    title: "Price",
    items: [
      {
        id: 1,
        val: "Price $500.00 to $55.00",
      },
    ],
  },
];

const Listing = ({ val }) => {
  return (
    <div className="flex flex-col w-[90%] shadow-lg md:ml-0 shadow-gray-300 border-gray-200 pl-20 md:pl-5 md:w-[100%]  bg-white">
      <ul className="   pb-4 gap-2 mt-5 flex flex-row ">
        <input
          type="radio"
          id="dataa"
          name="dataaa"
          className="relative h-4 w-4  rounded-full bg-white  border checked:bg-white checked: focus:outline-none focus:border-yellow-200 focus:ring-4 focus:ring-offset-2 focus:ring-yellow-300 focus:bg-white appearance-none"
        />
        <li className="text-sm text-gray-500">{val}</li>
      </ul>
    </div>
  );
};

function DummyListFunc() {
  return (
    <div className="w-[95%] md:w-full mt-10 md:ml-24  ">
      <h1 className="text-xl sm:mt-10 md:mt-0  md:pl-10 pl-10 py-4 text-white bg-slate-500 md:w-[100%] ">
        Product Filters
      </h1>
      {data.map((item) => {
        return (
          <div key={item.title}>
            <h2 className="text-lg font-semibold mt-3 pl-10 py-4 text-black  w-full ">
              {item.title}
            </h2>
            {item.items.map((val) => (
              <Listing key={val.id} val={val.val} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
export default DummyListFunc;

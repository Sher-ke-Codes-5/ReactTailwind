import React from "react";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
const data = [
  {
    id: 1,
    heading: "California,United States",
    icon: <AiOutlineHome />,
    paragraph: "Santa monica bullevard",
  },
  {
    id: 2,
    heading: "00(400) 9865 562",
    icon: <AiOutlineMail />,
    paragraph: "Mon to Fri 9am to 6 pm",
  },
  {
    id: 3,
    heading: "support@Sherjan.com",
    icon: <BsTelephone />,
    paragraph: "Send us your query anytime!",
  },
];
const Lists = ({ icon, heading, paragraph }) => {
  return (
    <div className="flex flex-col md:pl-32 pt-10 md:h-[4rem] w-[20rem] md:w-full md:justify-normal   ">
      <div className="flex flex-row gap-2">
        <div className="text-orange-600 pl-6 pt-2 text-xl">{icon}</div>
        <h1 className="text-base  pl-6 font-bold">{heading}</h1>
      </div>
      <p className="text-base w-[20rem] md:w-auto pl-20 text-gray-500 ">{paragraph}</p>
    </div>
  );
};
function DummyFun() {
  return (
    <div className='mt-2'>
      {data.map((item) => {
        return (
          <Lists
            key={item.id}
            icon={item.icon}
            heading={item.heading}
            paragraph={item.paragraph}
          />
        );
      })}
    </div>
  );
}
export default DummyFun;

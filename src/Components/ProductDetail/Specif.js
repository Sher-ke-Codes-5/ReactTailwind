import React from "react";
const data = [
  {
    id: 1,
    title: "Width",
    val: "172mm",
  },
  {
    id: 2,
    title: "Depth",
    val: "152mm",
  },
  {
    id: 3,
    title: "Weight",
    val: "52gm",
  },
  {
    id: 4,
    title: "Quality checking",
    val: "yes",
  },
  {
    id: 5,
    title: "freshness duration",
    val: "03 days ",
  },
  {
    id: 6,
    title: "When Packing",
    val: "With out touching Hand",
  },
  {
    id: 7,
    title: "When Packing",
    val: "With out touching Hand",
  },
  {
    id: 8,
    title: "When Packing",
    val: "With out touching Hand",
  },

];
const Specif = ({ data }) => {
  return (
   <>
      <div className="flex flex-row mt-1 space-x-10 md:pl-32">
        <h1 className='md:w-[27rem] text-lg'>{data.title}</h1>
        <h2 className='md:pl-0   text-lg'>{data.val}</h2>
      
     
    </div>
      <div className='border md:w-[65rem] mt-3 border-gray-200 flex flex-row'>
      </div>
      </>
  );
};

const SpecifDummy = () => {
  return (
    <div className='flex flex-col md:h-auto h-[45rem]  md:my-10 sm:my-20 my-20  gap-y-10'>
      {data.map((data) => (
        <div key={data.id}>
          <Specif data={data} key={data.id} title={data.title} val={data.val} />
        </div>
      ))}
    </div>
  );
};

export default SpecifDummy;

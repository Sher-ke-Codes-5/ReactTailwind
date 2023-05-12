import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Form, Link } from "react-router-dom";
import "./style.css";
import CommentsDummy from "./Comments";
import SpecifDummy from "./Specif";
import Forms from "./Forms";
import RevDummy from "./Rev";
import Models from "../Home/Models";
import Footer from "../Footer";
const Bar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleFunc = (e) => {
    setActiveIndex(e.index);
  };

  return (
<div className='flex flex-col'>
    <div className="flex flex-wrap w-[21rem] ml-5 md:mt-1 mt-10  md:h-14 h-[5rem] mb-20 md:w-[80%] md:ml-32 md:mr-20   bg-slate-200">
      <TabView
        activeIndex={activeIndex}
        className=" md:w-32 flex-nowrap navbar"
        onTabChange={handleFunc}
      >
        <TabPanel
          header="Description"
          
          className="flex md:w-[67.5rem] md:text-base text-sm  mt-0  ml-0 md:pt-3  hover:bg-gradient-to-r from-orange-500  to-yellow-500  text-black bg-white px-4 py-2 panel"
        >
          <p className='hover:bg-white  text-gray-500 mt-20'>
            Beryl Cook is one of Britain’s most talented and amusing artists
            .Beryl’s pictures feature women of all shapes and sizes enjoying
            themselves .Born between the two world wars, Beryl Cook eventually
            left Kendrick School in Reading at the age of 15, where she went to
            secretarial school and then into an insurance office. After moving
            to London and then Hampton, she eventually married her next door
            neighbour from Reading, John Cook. He was an officer in the Merchant
            Navy and after he left the sea in 1956, they bought a pub for a year
            before John took a job in Southern Rhodesia with a motor company.
            Beryl bought their young son a box of watercolours, and when showing
            him how to use it, she decided that she herself quite enjoyed
            painting. John subsequently bought her a child’s painting set for
            her birthday and it was with this that she produced her first
            significant work, a half-length portrait of a dark-skinned lady with
            a vacant expression and large drooping breasts. It was aptly named
            ‘Hangover’ by Beryl’s husband and It is often frustrating to attempt
            to plan meals that are designed for one. Despite this fact, we are
            seeing more and more recipe books and Internet websites that are
            dedicated to the act of cooking for one. Divorce and the death of
            spouses or grown children leaving for college are all reasons that
            someone accustomed to cooking for more than one would suddenly need
            to learn how to adjust all the cooking practices utilized before
            into a streamlined plan of cooking that is more efficient for one
            person creating less
          </p>
        </TabPanel>
        <TabPanel
          header="Comments"
          
          className="flex md:w-[67.5rem] md:text-base text-sm  mt-0  ml-0 md:pt-3  hover:bg-gradient-to-r from-orange-500  to-yellow-500  text-black bg-white px-4 py-2 panel"
        >
            <CommentsDummy className='hover:bg-white'/>
        </TabPanel>

        <TabPanel
          header="Review"
          
          className="flex md:w-[67.5rem] md:text-base text-sm  mt-0  ml-0 md:pt-3  hover:bg-gradient-to-r from-orange-500  to-yellow-500  text-black bg-white px-4 py-2 panel"
        >
          <RevDummy/>
        </TabPanel>
        <TabPanel
          header="Specification"
          
          className="md:flex md:ml-0 md:mt-0 md:w-[67.5rem] md:text-base text-sm     md:pt-3  hover:bg-gradient-to-r from-orange-500  to-yellow-500  text-black bg-white px-4 py-2 panel"
        >

          <div className='flex flex-row'>
          <div className='flex-1 '>
          <SpecifDummy/>
          </div>
         
          </div>
        </TabPanel>
      </TabView>
    </div>
    <div className='flex flex-col mt-[40rem]'>
    <Models/>
    
    </div>
    </div>
  );
};

export default Bar;

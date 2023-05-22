import React, { useState} from "react";
import { BiFullscreen } from "react-icons/bi";

const Map = () => {
  const [isFull, setIsFull] = useState(false);

  const handleView = () => {
   
    setIsFull(!isFull);
    
  };
  return (
    <div
      //ref={fullScreenRef}
      className="relative  pt-2 mb-10 h-full  overflow-hidden md:w-auto w-[22.5rem]   "
    >
      <button onClick={handleView}>
        <BiFullscreen className=" absolute md:block hidden top-[70px] h-14 text-gray-700 bg-white pt-2 pb-2 w-12 right-[180px]" />
      </button>
     
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1977.663801335582!2d74.23805242046431!3d31.46029402998039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190352efdc3ffb%3A0xf6ce968437d7ca15!2sZarwa%20Rice!5e0!3m2!1sen!2s!4v1683099210657!5m2!1sen!2s"
          allowFullScreen={isFull}
          title="map"
          className={`md:w-${isFull ? "[100%]" : "[80%]"} md:h-${
            isFull ? "screen" : "[25rem]"
          } md:ml-${isFull ? "0" : "36 "} md:mr-${isFull ? "0" : "0"}  ml-10  `}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    
    </div>
  );
};
export default Map;

// h-[28rem] w-[100%]

import React ,{useState} from "react";

const Forms = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const name = e.target.name;

    const value = e.target.value;
    setUser(() => ({
      ...user,
      [name]: value,
    }));
  };
  return (
    <div className='flex flex-col md:mr-0 mr-10'>
      <form className="space-y-4 mt-5 flex flex-col  md:w-auto w-[10rem] mr-10  ">
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          onChange={handleInputChange}
          value={user.name}
          className="md:w-[25rem] w-[20rem] flex md:py-2 border-2 border-gray-200 md:px-11 py-2 px-5 text-left  focus:outline-none"
          id="name"
          autoComplete="off"
        />
        <input
          type="text"
          name="email"
          placeholder="Your Email address"
          onChange={handleInputChange}
          value={user.email}
          className="md:w-[25rem] w-[20rem] flex border-2 border-gray-200 md:py-2 md:px-11 py-2 px-5 text-left focus:outline-none"
          id="email"
          autoComplete="off"
        />
        <input
          type="text"
          name="phone"
          placeholder="Your phone Number"
          onChange={handleInputChange}
          value={user.phone}
          className="md:w-[25rem] w-[20rem] border-2 border-gray-200 flex md:py-2 md:px-11 py-2 px-5 text-left  focus:outline-none"
          id="phone"
          autoComplete="off"
        />
        <input
          type="text"
          name="message"
          placeholder="Message"
          onChange={handleInputChange}
          value={user.message}
          className="md:w-[25rem] w-[20rem] border-2 border-gray-200 h-[10rem] md:pb-[127px]  flex md:pt-0 md:px-11 py-2 px-5 text-left focus:outline-none"
          id="message"
          autoComplete="off"
        />
      </form>
    </div>
  );
};

export default Forms;

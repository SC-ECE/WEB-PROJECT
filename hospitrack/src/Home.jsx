import React from "react";
import { Tab } from "@headlessui/react";
import "./Home.css";

function Home() {
  return (
    <div>
      <Tab.Group>
        <Tab.List
          className=" tab_body  flex space-x-0.5 rounded-xl bg-blue-900/20 p-1 bg-gradient-to-tr
    from-pink-500
    via-red-400
    to-blue-500
    background-animate shadow-lg"
        >
          <Tab className="px-4 py-2 font-medium leading-5 text-gray-700 transition ease-in-out margin-3 text-md duration-450 hover:text-gray-500 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:text-gray-500">
            Home
          </Tab> &nbsp;
          <Tab className="px-4 py-2 font-medium leading-5 text-gray-700 transition ease-in-out margin-3 text-md duration-450 hover:text-white-600 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:text-gray-500">
            About
          </Tab> &nbsp;
          <Tab className="px-4 py-2 font-medium leading-5 text-gray-700 transition ease-in-out margin-3 text-md duration-450 hover:text-white-600 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:text-gray-500">
            Ambulance 
          </Tab> &nbsp;
          <Tab className="px-4 py-2 font-medium leading-5 text-gray-700 transition ease-in-out margin-3 text-md duration-450 hover:text-white-600 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:text-gray-500">
            Hospital 
          </Tab> &nbsp;
          <Tab className="px-4 py-2 font-medium leading-5 text-gray-700 transition ease-in-out margin-3 text-md duration-450 hover:text-white-600 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:text-gray-500">
            Contact
          </Tab> &nbsp;
          <Tab className="px-4 py-2 font-medium leading-5 text-gray-700 transition ease-in-out margin-3 text-md duration-450 hover:text-white-600 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:text-gray-500">
            Payments
          </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  );
}

export default Home;

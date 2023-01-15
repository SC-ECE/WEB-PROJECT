/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from "react";
import { Menu,Transition,Tab } from "@headlessui/react";
import { Fragment } from "react";
import Marquee from "react-fast-marquee";


const aboutus = [
  { href: '/Don Bosco School', label: 'Don Bosco School' },
  { href: '/Aim,Vision&Mission', label: 'Aim,Vision & Mission ' },
  { href: '/Don Bosco', label: 'Don Bosco' },
  
]

const school = [
  { href: '/Facilities', label: 'Facilities' },
  { href: '/Curriculum', label: 'Curriculum ' },
  { href: '/Co-Curriculum', label: 'Co-Curriculum' },
  { href: '/Syllabus', label: 'Syllabus' },
  { href: '/Prospectus', label: 'Prospectus' },
]

const staff = [
  { href: '/Salesians', label: 'Salesians' },
  { href: '/JuniorSectionTeachers', label: 'Junior Section Taechers ' },
  { href: '/SeniorSectionTeachers', label: 'Senior Section Teachers' },
  { href: '/NonTeachingStaff', label: 'Non-Teaching Staff' },
]

const noticeboard = [
  { href: '/juniorsection', label: 'Junior Section' },
  { href: '/seniorsection', label: 'Senior Section' },
  
]

const gallery = [
  { href: '/ImageGallery', label: 'Image Gallery' },
  { href: '/VideoGallery', label: 'Video Gallery' },
]

const contact = [
  { href: '/Login', label: 'Login' },
  { href: '/Signup', label: 'Signup' },
]


export default function Home() {
 
    return (
      
      <>
    <div
  
>
      <Marquee className="relative  bg-gradient-to-bl  from-yellow-500
    via-red-500
    to-blue-500
    background-animate text-black" onMouseOver="this.stop()" onMouseOut="this.start()" >
        ADMISSION NOTICE FOR KINDERGARTEN(KG) AND CLASS 1 FOR 2026-24, PLEASE CHECK ADMISSION SECTION****** ISC-2022-ISSUE OF DOCUMENTS, KINDLY CHECK WEBSITE NOTICE BOARD****FEES CAN BE PAID ON ANY DAY BETWEEN 5TH AND 20TH OF EVERY MONTH.
        </Marquee>
       

      
      <br/>
      <br/>
      <br/>
      
      &nbsp;
      <Tab.Group >
        <Tab.List className="   flex space-x-0.5 rounded-xl bg-blue-900/20 p-1 bg-gradient-to-tr
    from-pink-500
    via-red-400
    to-blue-500
    background-animate shadow-lg">
        <Tab className="margin-3 px-4 py-2 text-md font-medium leading-5 text-gray-700 bg-yellow-700 transition duration-450 ease-in-out   hover:text-gray-500 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
        Home</Tab>
      
        <div className = "flex items-center justify-center p-6">
          <div className="relative inline-block text-left">
       <Menu >
          {({ open }) => (
        <>
      <span className="rounded-md shadow-sm">
      <Menu.Button className="inline-block overflow-y w-full px-4 py-2 text-md font-medium leading-5 text-gray-700 transition duration-450 ease-in-out   hover:text-gray-500 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                  <span>AboutUs</span>
                  
                </Menu.Button>
                </span>
      <Transition
       show={open}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-95 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      ></Transition>
      <Menu.Items  className=" right-100 w-50 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
        {aboutus.map((link) => (
          /* Use the `active` state to conditionally style the active item. */
          <Menu.Item key={link.href} as={Fragment}>
            {({ active }) => (
              <a
                          href={link.href}
                          className={`${
                            active
                              ? "bg-red-100 text-gray-900"
                              : "text-gray-700"
                          } flex justify-between w-full px-4 py-2 text-md leading-5 text-left`}
                        >
                {link.label}<br/>
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items> 
  </>
      )}
      </Menu>
      </div>
      </div>
  <div className = "flex items-center justify-center p-9">
    <div className="relative inline-block text-left">
       <Menu>
          {({ open }) => (
        <>
      <span className="rounded-md shadow-sm">
      <Menu.Button className="inline-block overflow-y w-full px-4 py-2 text-md font-medium leading-5 text-gray-700 transition duration-450 ease-in-out   hover:text-gray-500 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                  <span>School</span>
                  
                </Menu.Button>
                </span>
      <Transition
       show={open}
        enter="transition duration-500 ease-out"
        enterFrom="transform scale-500 opacity-0"
        enterTo="transform scale-500 opacity-100"
        leave="transition duration-575 ease-out"
        leaveFrom="transform scale-500 opacity-100"
        leaveTo="transform scale-500 opacity-0"
      ></Transition>
      <Menu.Items  className=" right-100 w-50 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
        {school.map((link) => (
          /* Use the `active` state to conditionally style the active item. */
          <Menu.Item key={link.href} as={Fragment}>
            {({ active }) => (
              <a
                          href={link.href}
                          className={`${
                            active
                              ? "bg-blue-100 text-gray-900"
                              : "text-gray-700"
                          } flex  w-full px-4 py-2 text-md leading-5 text-left`}
                        >
                {link.label}<br/>
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items> 
  </>
      )}
      </Menu>
      </div>
      </div>
      

  <div className = "flex items-center justify-center p-9">
    <div className="relative inline-block text-left">
       <Menu >
          {({ open }) => (
        <>
         <span className="rounded-md shadow-sm">
      <Menu.Button className="inline-block overflow-y w-full px-4 py-2 text-md font-medium leading-5 text-gray-700 transition duration-450 ease-in-out   hover:text-gray-500 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                  <span>Staff</span>
                  
                </Menu.Button>
                </span>
      <Transition
       show={open}
        enter="transition duration-5000 ease-out"
        enterFrom="transform scale-500 opacity-0"
        enterTo="transform scale-500 opacity-100"
        leave="transition duration-5000 ease-out"
        leaveFrom="transform scale-500 opacity-100"
        leaveTo="transform scale-500 opacity-0"
      ></Transition>
      <Menu.Items  className=" right-100 w-50 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
        {staff.map((link) => (
          /* Use the `active` state to conditionally style the active item. */
          <Menu.Item key={link.href} as={Fragment}>
            {({ active }) => (
              <a
                          href={link.href}
                          className={`${
                            active
                              ? "bg-green-100 text-gray-900"
                              : "text-gray-700"
                          } flex  w-full px-4 py-2 text-md leading-5 text-left`}
                        >
                {link.label}<br/>
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items> 
  </>
      )}
      </Menu>
      </div>
      </div>


      
        <div className = "flex items-center justify-center p-9">
          <div className="relative inline-block text-left">
       <Menu >
          {({ open }) => (
        <>
        <span className="rounded-md shadow-sm">
      <Menu.Button className="inline-block overflow-y w-full px-4 py-2 text-md font-medium leading-5 text-gray-700 transition duration-450 ease-in-out  hover:text-gray-500 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                  <span>NoticeBoard</span>
                  
                </Menu.Button>
                </span>
      <Transition
       show={open}
        enter="transition duration-500 ease-out"
        enterFrom="transform scale-500 opacity-0"
        enterTo="transform scale-500 opacity-100"
        leave="transition duration-575 ease-out"
        leaveFrom="transform scale-500 opacity-100"
        leaveTo="transform scale-500 opacity-0"
      ></Transition>
      <Menu.Items className=" right-100 w-50 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
        {noticeboard.map((link) => (
          /* Use the `active` state to conditionally style the active item. */
          <Menu.Item key={link.href} as={Fragment}>
            {({ active }) => (
              <a
                          href={link.href}
                          className={`${
                            active
                              ? "bg-yellow-100 text-gray-900"
                              : "text-gray-700"
                          } flex  w-full px-4 py-2 text-md leading-5 text-left`}
                        >
                {link.label}<br/>
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items> 
  </>
      )}
      </Menu>
      </div>
      </div>
      
      <Tab className=" px-4 py-2 text-md font-medium leading-5 text-gray-700 transition duration-450 ease-in-out   hover:text-gray-500 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
        Admission</Tab>

      <Tab className=" px-4 py-2 text-md font-medium leading-5 text-gray-700 transition duration-450 ease-in-out  hover:text-gray-500 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
        Fees Payment
      </Tab>
&nbsp;&nbsp;&nbsp;
    
        <div className = "flex items-center justify-center p-9">
          <div className="relative inline-block text-left">
       <Menu >
          {({ open }) => (
        <>
      <Menu.Button className="inline-block overflow-y w-full px-4 py-2 text-md font-medium leading-5 text-gray-700 transition duration-450 ease-in-out  hover:text-gray-500 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                  <span>Gallery</span>
                  
                </Menu.Button>
      <Transition
       show={open}
        enter="transition duration-500 ease-out"
        enterFrom="transform scale-500 opacity-0"
        enterTo="transform scale-500 opacity-100"
        leave="transition duration-575 ease-out"
        leaveFrom="transform scale-500 opacity-100"
        leaveTo="transform scale-500 opacity-0"
      ></Transition>
      <Menu.Items   className="right-100 w-50 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
        {gallery.map((link) => (
          /* Use the `active` state to conditionally style the active item. */
          <Menu.Item  key={link.href} as={Fragment}>
            {({ active }) => (
              <a
                          href={link.href}
                          className={`${
                            active
                              ? "bg-blue-100 text-gray-900"
                              : "text-gray-700"
                          } flex  w-full px-4 py-2 text-md leading-5 text-left`}
                        >
                {link.label}<br/>
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items> 
  </>
      )}
      </Menu>
      </div>
    </div>
    
      <div className = "flex items-center justify-center p-6">
          <div className="relative inline-block text-left">
       <Menu >
          {({ open }) => (
        <>
      <span className="rounded-md shadow-sm">
      <Menu.Button className="inline-block overflow-y w-full px-4 py-2 text-md font-medium leading-5 text-gray-700 transition duration-450 ease-in-out   hover:text-gray-500 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                  <span>Contact</span>
                  
                </Menu.Button>
                </span>
      <Transition
       show={open}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-95 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      ></Transition>
      <Menu.Items  className=" right-100 w-50 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
        {contact.map((link) => (
          /* Use the `active` state to conditionally style the active item. */
          <Menu.Item key={link.href} as={Fragment}>
            {({ active }) => (
              <a
                          href={link.href}
                          className={`${
                            active
                              ? "bg-red-100 text-gray-900"
                              : "text-gray-700"
                          } flex justify-between w-full px-4 py-2 text-md leading-5 text-left`}
                        >
                {link.label}<br/>
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items> 
  </>
      )}
      </Menu>
      </div>
      </div>
</Tab.List>
   </Tab.Group>
 </div>
    </>
    
    
    );
}
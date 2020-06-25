import Link from 'next/link'

import Scrollspy from 'react-scrollspy';

const HeaderLink = ({anchor, label}) => (
  <li className="pr-2 text-gray-800 hover:text-indigo-600"><a href={anchor}>{label}</a></li>
)

const Header = () => (
  <header className="fixed top-0 inset-x-0 z-30 bg-white shadow border-t-4 border-indigo-600">
    <nav className="flex items-center justify-between flex-wrap p-6">

      {/* <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between"> */}
          <div>
            <a className="flex items-center text-gray-800 hover:text-indigo-600" href="#">
              <svg className="h-6 w-6 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>

              <span className="ml-3 font-medium text-sm md:text-base">Jason Ludden</span>
            </a>
          </div>

        {/* Icon Links - only show >= medium */}
        <div className="hidden md:flex items-center mx-2">
            <a className="flex items-center mx-2 text-gray-800 hover:text-indigo-600"
              title="View Resume"
              href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </a>

            <a className="flex items-center mx-2 text-gray-800 hover:text-indigo-600"
              title="LinkedIn"
              href="https://www.linkedin.com/in/jason-ludden/">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
              </svg>
            </a>

            <a className="flex items-center mx-2 text-gray-800 hover:text-indigo-600"
              title="Github"
              href="https://github.com/jludden/">
              <svg className="h-5 w-5 sm:h-6 sm:w-6 fill-current" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                <path d='M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z' />
              </svg>
            </a>
          </div>



{/* 
          <HeaderLink anchor="#About" text="About" />
            <HeaderLink anchor="#Showcase" text="Showcase" />
            <HeaderLink anchor="#CV" text="CV" />
            <HeaderLink anchor="#Contact" text="Contact" /> */}
          {/* Scrollspy Nav - only show >= medium */}
          <Scrollspy items={['About', 'Showcase', 'CV', 'Contact']} currentClassName="is-current" className="md:ml-auto flex flex-wrap items-center text-base justify-center">
         
            <li className="pr-2 text-gray-800 hover:text-indigo-600">
              <a className="text-sm md:text-base" href="#About">About</a>
            </li>
            <li className="pr-2 text-gray-800 hover:text-indigo-600">
              <a className="text-sm md:text-base" href="#Showcase">Showcase</a>
            </li>
            <li className="pr-2 text-gray-800 hover:text-indigo-600">
              <a className="text-sm md:text-base" href="#CV">CV</a>
            </li>
            <li className="pr-2 text-gray-800 hover:text-indigo-600">
              <a className="text-sm md:text-base" href="#Contact">Contact</a>
            </li>
            <style jsx>{`
                          .is-current {
                            text-decoration: underline;
                          }
                          `                        
                        }
            </style>
          </Scrollspy>


          

          {/* Hamburger - only show < medium */}
          {/* <div className="block md:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-800 hover:text-indigo-600 hover:border-indigo-600">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title> 
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
            </button>
          </div> */}



        {/* </div>
      </div> */}
    </nav>
  </header>

)


const Header2 = () => (
  <header className="text-gray-500 bg-gray-900 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">tailblocks</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-white">First Link</a>
        <a className="mr-5 hover:text-white">Second Link</a>
        <a className="mr-5 hover:text-white">Third Link</a>
        <a className="mr-5 hover:text-white">Fourth Link</a>
      </nav>
      <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
)
export default Header;

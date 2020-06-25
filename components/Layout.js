import React, { useRef } from 'react';
// import useScrollSpy from 'react-use-scrollspy';

export default function Layout({ children, pageTitle }) {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  // const activeSection = useScrollSpy({
  //   sectionElementRefs: sectionRefs,
  //   offsetPx: -80,
  // });
  return (
    <>
    <main className="font-sans">
    <div className="relative">
        {children}
        

        <footer className="bg-white">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div>
                        <div className="text-gray-600">&copy; Jason Ludden 2020</div>
                    </div>

                    <div className="flex items-center -mx-2">
                        <a className="flex items-center mx-2 text-gray-600 hover:text-indigo-600" 
                         title="View Resume"
                         href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        </a>

                        <a className="flex items-center mx-2 text-gray-600 hover:text-indigo-600" 
                          title="LinkedIn"
                          href="https://www.linkedin.com/in/jason-ludden/">
                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" viewBox="0 0 24 24" width="24" height="24">
                              <path fill="none" d="M0 0h24v24H0z"/>
                              <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
                            </svg>
                        </a>

                        <a className="flex items-center mx-2 text-gray-600 hover:text-indigo-600"  
                          title="Github"
                          href="https://github.com/jludden/">
                            <svg className="h-5 w-5 fill-current" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                                <path d='M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z'/>
                            </svg>
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    </div>
</main>
</>
  )
}


{/* 
export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <section className="layout">
        <div className="content">{children}</div>
      </section>
      <footer>Built by me!</footer>
    </>
  )
} */}
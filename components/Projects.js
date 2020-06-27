// import rls_bg from '../public/static/rls_cardview';


export const Chip = ({ text }) => (
    // <div className="rounded-full leading-snug p-2 m-1 bg-gray-600 text-white text-xs  items-center justify-center">{t}</div>
    // ))}  
     <div className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-indigo-100 bg-indigo-600 border border-indigo-700 ">
        <span className="text-xs font-semibold leading-none max-w-full flex-initial">{text}</span>            
    </div>
)

// export const Chip = ({ text }) => (
//     // <div className="rounded-full leading-snug p-2 m-1 bg-gray-600 text-white text-xs  items-center justify-center">{t}</div>
//     // ))}  
//      <div className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-indigo-100 bg-indigo-700 border border-indigo-700 ">
//         <div className="text-xs uppercase leading-none tracking-wide max-w-full flex-initial">{text}</div>            
//     </div>
// )

export const LandscapeImageCard = ({ titleText, detailsText, chips, children }) => (

    
    <div className="flex-1 bg-white border m-6 rounded-lg shadow-lg overflow-hidden">

        {children}

{/* border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 */}
                <div className="bg-white px-4 py-2 flex flex-col h-full">            
                        <div className="flex content-start flex-wrap -mx-1 mt-1 mb-2 bottom-0">
                            {chips && chips.map(t => <Chip text={t} key={t} />)}                             
                        </div>
                        <div className="font-semibold text-lg">{titleText}</div>
                        <p className="text-gray-600 text-base pb-2">{detailsText}</p>
                </div>
        </div>
)



export const PortraitImageCard = ({ imgSrc, imgHeight, altText, titleText, detailsText, chips, children }) => (    
    <div className="flex-grow m-6 max-w-md lg:max-w-lg rounded-lg shadow-lg overflow-hidden">

        <div className="flex flex-grow">

                <div className="content-center md:flex">
                    <div className="overflow-hidden">
                    <img className="w-full" src={imgSrc} alt={altText} />
                    </div>
                </div>


                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">            
                    <div className="px-4 py-6">
                        <div className="font-bold text-xl mb-2">{titleText}</div>
                        <p className="text-gray-600 text-base">{detailsText}</p>
                        {children}
                        <div className="flex content-start flex-wrap  bottom-0">
                            {chips && chips.map(t => <Chip text={t} key={t} />)}                             
                        </div>
                    </div>
                </div>
        </div>
    </div> 
)

export const ProjectCard1 = ({ imgSrc, altText, titleText, detailsText, children }) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={imgSrc} alt={altText} />
        <div className="px-4 py-6">
            <div className="font-bold text-xl mb-2">{titleText}</div>
            <p className="text-gray-600 text-base">{detailsText}</p>
            {children}
        </div>
    </div>
)

export default function () {
    return (
        <>
        <section>
            <div className="flex flex-col md:flex-row">
                {/* <PortraitImageCard 
                    imgSrc="static/rls_portrait.png"
                    imgHeight="36rem"
                    altText="ReefLifeSurvey card view layout"   
                    titleText="ReefLifeSurvey - Species Explorer" 
                    detailsText="Android application for browsing fish species and survey site locations based on data collected by the Australian non-profit ReefLifeSurvey"
                    chips={["Java", "Kotlin", "Android", "Material Design"]}
                />

                <PortraitImageCard 
                    imgSrc="static/rmc_portait.png"
                    imgHeight="14rem"
                    altText="Developer reviewing code"   
                    titleText="Roast My Code" 
                    detailsText="React web app to perform code reviews, loading data from Github via GraphQL."                    
                    chips={["JS", "React", "GraphQL"]}
                /> */}

                <LandscapeImageCard 
                    titleText="Reef Life Species Explorer" 
                    detailsText="Android application for browsing fish species and survey site locations based on data collected by the Australian non-profit ReefLifeSurvey"
                    chips={["Java", "Kotlin", "Android", "Material Design"]}
                >
                    <div className="bg-black relative" style={{ paddingBottom: '49%' }} >
                        <img className="w-full h-full absolute object-center" 
                            src={"static/rls_landscape.png"} 
                            alt={"ReefLifeSurvey - mobile app to view high quality images of aquatic species"} />
                    </div>
                </LandscapeImageCard>

                <LandscapeImageCard  
                    titleText="Roast My Code" 
                    detailsText="React web application to perform code reviews on Github repositories, leveraging GraphQL with TypeScript for type safety"                   
                    chips={["TypeScript", "React", "GraphQL"]}
                >
                    <div className="bg-gray-700 relative" style={{ paddingBottom: '49%' }} >
                        <img className="w-full h-full absolute object-cover" 
                            src={"static/rmc_landscape.png"} 
                            alt={"Roast my code - code review platform with inline commenting"} />
                    </div>
                </LandscapeImageCard>
            </div>
        </section>

            {/* todo - try with https://github.com/cyrilwanner/next-optimized-images  */}
        {/* <container>
            <h2> test</h2>
            <div className="mybackground"></div>
            <style jsx>{`
                .mybackground {
                    background: url(${rls_bg})
                }
            `}

            </style>
        </container> */}


        <section id="Showcase" className="bg-gray-800 pattern py-20">
            <div className="max-w-5xl px-6 mx-auto text-center">
                <h2 className="text-2xl font-semibold text-white">Selected Projects</h2>

                <div className="flex items-center justify-center mt-10">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="max-w-xs w-full">
                            <div className="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                                <img className="object-cover h-8" src="https://premium-tailwindcomponents.netlify.app/assets/svg/tailwindcomponent-dark.svg" alt="" />
                            </div>

                            <a href="#" className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div className="py-2 px-3 text-center text-sm">
                                    <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                    <span className="block text-gray-500 mt-2">tailwindcomponents.com</span>
                                </div>
                            </a>
                        </div>

                        <div className="max-w-xs w-full">
                            <div className="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                                <img className="object-cover h-8" src="https://premium-tailwindcomponents.netlify.app/assets/svg/tailwindcomponent-dark.svg" alt=""/>
                            </div>

                            <a href="#" className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div className="py-2 px-3 text-center text-sm">
                                    <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                    <span className="block text-gray-500 mt-2">tailwindcomponents.com</span>
                                </div>
                            </a>
                        </div>

                        <div className="max-w-xs w-full">
                            <div className="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                                <img className="object-cover h-8" src="https://premium-tailwindcomponents.netlify.app/assets/svg/tailwindcomponent-dark.svg" alt=""/>
                            </div>

                            <a href="#" className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div className="py-2 px-3 text-center text-sm">
                                    <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                    <span className="block text-gray-500 mt-2">tailwindcomponents.com</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center mt-12">
                    <a className="flex items-center text-white hover:underline hover:text-gray-200" href="#">
                        <span>View More On Github</span>

                        <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
        </>
    );
}
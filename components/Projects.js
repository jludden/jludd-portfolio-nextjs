
export const Chip = ({ text }) => (
    <div className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-indigo-100 shadow-sm bg-indigo-600 border border-indigo-700 ">
        <span className="text-xs font-semibold leading-none max-w-full flex-initial">{text}</span>            
    </div>
)

export const LandscapeImageCard = ({ titleText, detailsText, chips, link, children }) => (    
    <div className="flex-1 m-6
        "> 
        {children}
        <div className="px-4 -mt-16 relative">
            <a href={link}  target="_blank" 
                className="bg-gray-100 px-4 py-2 flex flex-col h-full rounded-lg shadow-lg
                transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
                    ">            
                <div className="flex content-start flex-wrap -mx-1 mt-1 mb-2 bottom-0">
                    {chips && chips.map(t => <Chip text={t} key={t} />)}                             
                </div>
                <div className="font-semibold text-lg">{titleText}</div>
                <p className="text-gray-600 text-base pb-2">{detailsText}</p>
            </a>
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



export default function () {
    return (
        <>
        <section id="Showcase" className="bg-gray-200">
            <h2 className="text-2xl pt-10 font-semibold text-gray-800 text-center">Selected Projects</h2>
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
                    detailsText="Android application for browsing fish species and survey site locations based on data collected by the Australian non-profit ReefLifeSurvey."
                    link="https://github.com/jludden/ReefLifeSurvey---Species-Explorer#reeflifesurvey---species-explorer"
                    chips={["Java", "Kotlin", "Android"]}
                >
                    <div className="relative" style={{ paddingBottom: '49%' }} >
                        <img className="w-full h-full absolute object-center rounded-lg shadow-md" 
                            src={require("../public/static/rls_landscape.png")} 
                            alt={"ReefLifeSurvey - mobile app to view high quality images of aquatic species"} />
                    </div>
                </LandscapeImageCard>

                <LandscapeImageCard  
                    titleText="Roast My Code" 
                    detailsText="React web application to perform code reviews on Github repositories, leveraging GraphQL with TypeScript for type safety."                   
                    link="https://github.com/jludden/react-ts-tdd#roast-my-code"
                    chips={["TypeScript", "GraphQL", "React" ]}
                >
                    <div className="relative" style={{ paddingBottom: '49%' }} >
                        <img className="w-full h-full absolute object-cover rounded-lg shadow-md" 
                            src={require("../public/static/rmc_landscape.png")} 
                            alt={"Roast my code - code review platform with inline commenting"} />
                    </div>
                </LandscapeImageCard>
            </div>
        </section>
        </>
    );
}
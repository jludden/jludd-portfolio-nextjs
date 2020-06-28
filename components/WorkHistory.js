// export const TimelineItem1 = ({ position, title, date }) => {
//     return (
//         <div className="w-full h-64 my-12 relative">
//             <div className={position}>
//             <a className="max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
//                         <div className="flex items-center justify-between px-4 py-2">
//                             <h3 className="text-lg font-medium text-gray-700">{title}</h3>
//                             <span className="block text-gray-600 font-light text-sm">{date}</span>
//                         </div>
//                     </a>
//             </div>
//         </div>
//     )
// }

export const TimelineItem = ({ position, title, date }) => (
    <div className="w-full h-64 my-12">
        <div className="timeline-img left-auto md:left-1/2" />
        <div className={position}>
            <ProjectCard1 title={title} date={date}
            altText="hi"
            imgSrc="static/rmc_temp.svg"
            >

            </ProjectCard1>

        </div>
        <style jsx>
            {`
             .timeline-img {
                width: 30px;
                height: 30px;
                background: #3F51B5;
                border-radius: 50%;
                position: absolute;
                margin-top: 25px;
                margin-left: -15px;
            }
            `}
        </style>
    </div>
)


export const ProjectCard1 = ({ imgSrc, altText, title, date, children }) => (
   
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full bg-gray-200" src={imgSrc} alt={altText} />
        <div className="px-4 py-6 bg-gray-200">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-600 text-base">{date}</p>
            {children}
        </div>
    </div>
    
)

export const Timeline = ({ items }) => {
    return (
        <div className="timeline relative w-full">
            {items.map((item, index) => <TimelineItem {...item} key={item.title}  
                position={index % 2 == 0 ? "float-left" : "float-right" } />)}
            <style jsx>
                {`
                    .timeline ::before {
                        
                        content: '';
                        background: #5a67d8;
                        width: 5px;
                        height: 95%;
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%);
                        
                    }
                    
                   
                `}
            </style>
        </div>
    )
}


export default function WorkHistory() {

    const items = [
        {
            title: "Birth",
            date: "Oct 1992"
        },
        {
            title: "Graduated from Western Kentucky University",
            date: "May 2012"
        },
        {
            title: "Software Developer - Epic",
            date: "July 2012 - July 2015"
        },
        {
            title: "Senior Software Developer - EPAM",
            date: "Sep 2018 - current"
        },
    ];

    return (
        <section id="CV" className="bg-gray-800 pattern py-20">
            <div className="max-w-5xl px-6 mx-auto text-center">
                <h2 className="text-2xl font-semibold text-white">Work History</h2>

                <div className="flex flex-col items-center justify-center mt-6">

                    <Timeline items={items} />

                </div>

                <div className="mt-10">                    
                    <a 
                        href="static/Jason_Ludden_Resume_2020_JUNE_V2.pdf"
                        target="_blank"
                        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 border border-indigo-700 rounded">
                            View Resume
                    </a>
                </div>



                {/* <div className="flex items-center justify-center mt-12">
                    <a className="flex items-center text-gray-300 hover:underline hover:text-gray-100" 
                    href="static/Jason_Ludden_Resume_2020_JUNE_V2.pdf">
                        <span>Download Resume</span>

                        <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </a>
                </div> */}
            </div>
        </section>
    );
}
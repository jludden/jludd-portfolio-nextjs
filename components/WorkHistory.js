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

import { Chip } from './Projects';

export const TimelineCard = (props) => {
    const { img, altText, title, startDate, endDate, details, chips, externalLink, children } = props;
   
    return (
        <div className="rounded overflow-hidden w-72 md:w-96 ml-8 lg:ml-0" >
            {children}
            
            <div className="flex h-16 bg-darkAccent justify-end ">
                <div className="w-3/4 flex-col flex-wrap">
                    <div className="flex-shrink text-white text-l md:text-xl font-medium py-1 pt-2 rounded-full justify-center items-center">
                        {title}
                    </div>
                   
                </div> 
                <a className="w-1/4 relative" style={{ paddingBottom: '10%' }} href={externalLink} >
                    <img className="absolute right-0 object-center rounded-lg p-1 bg-gray-100 m-1
                                    transition duration-500 ease-in-out transform hover:scale-110" 
                        src={img} 
                        alt={altText} />
                </a>
            </div>
            
                
            <div className="-mt-3 relative">
                 <a href={externalLink}  target="_blank" 
                        className="bg-gray-100 px-4 py-2 flex flex-col h-full rounded-br-lg
                            rounded-bl-lg shadow-lg">                     
                    <div className="">
                        <div className="font-semibold text-lg">{startDate} to {endDate}</div>
                        <p className="text-gray-600 text-base">{details}</p>
                    </div>
                    <div className="flex content-start flex-wrap mt-1 bottom-0">
                        {chips && chips.map(t => <Chip text={t} key={t} />)}                             
                    </div>
                </a>
            </div>            

        </div>
    );
}

export const TimelineCard1 = (props) => {
    const { img, altText, title, startDate, endDate, details, chips, externalLink, children } = props;
   
    return (
        <div className="rounded overflow-hidden w-72 md:w-96 ml-8 lg:ml-0" >
            {children}

            <div className="relative bg-gray-100" style={{ paddingBottom: '30%' }} >
                <img className="w-full h-full absolute object-center rounded-lg shadow-md" 
                    src={img} 
                    alt={altText} />
            </div>
            
            <div className="-mt-3 relative">
                <div className="bg-lightAccent relative rounded-lg shadow-xl">
                    <span className="bg-darkAccent text-white shadow-sm font-medium py-1 px-2 rounded-full justify-center items-center">
                        {startDate}
                    </span>
                    <span className="ml-6 bg-darkAccent text-white shadow-sm font-medium py-1 px-2 rounded-full justify-center items-center">
                        {endDate}
                    </span>
                </div>
                 <a href={"google.com"}  target="_blank" 
                        className="bg-gray-100 px-4 py-2 flex flex-col h-full rounded-lg shadow-lg
                    ">                     
                    <div className="">
                        <div className="font-semibold text-lg">{title}</div>
                        <p className="text-gray-600 text-base">{details}</p>
                    </div>
                    <div className="flex content-start flex-wrap mt-1 bottom-0">
                        {chips && chips.map(t => <Chip text={t} key={t} />)}                             
                    </div>
                </a>
            </div>
            
        </div>
    );
}

export const TimelineItem = ({ position, ...item }) => (
    <div className="w-full h-84 my-12">
        <div className="timeline-icon left-auto lg:left-1/2 transition duration-500 ease-in-out transform hover:scale-110" />
        <div className={`relative float-left ${position === "float-left" ? "lg:float-left" : "lg:float-right"}`}>
            <TimelineCard {...item}
            >
                <div className={position === "float-left" ? "timeline-arrow-right" : "timeline-arrow-left"} />

            </TimelineCard>

        </div>
        <style jsx>
            {`
                .timeline-icon {
                    width: 30px;
                    height: 30px;
                    background: #5A67D8;
                    border-radius: 50%;
                    position: absolute;
                    margin-top: 25px;
                    margin-left: -15px;
                }
                .timeline-arrow-left {
                    content: '';
                    position: absolute;
                    border-style: solid;
                    width: 0;
                    height: 0;
                    left: auto;
                    margin-top: 30px;
                    margin-left: -15px;
                    border-width: 10px 15px 10px 0;
                    border-color: transparent #8B82CB transparent transparent;
                }
                .timeline-arrow-right {
                    content: '';
                    position: absolute;
                    border-style: solid;
                    width: 0;
                    height: 0;
                    left: auto;
                    margin-top: 30px;
                    margin-left: -15px;
                    border-width: 10px 15px 10px 0;
                    border-color: transparent #8B82CB transparent transparent;
                }
                @media (min-width: 1024px) {
                    .timeline-arrow-right {
                        content: '';
                        position: absolute;
                        border-style: solid;
                        width: 0;
                        height: 0;
                        margin-top: 30px;
                        right: -15px;
                        border-width: 10px 0 10px 15px;
                        border-color: transparent transparent transparent #8B82CB;
                    } 
                }
            `}
        </style>
    </div>
)

export const Timeline = ({ items }) => {
    return (
        <div className="timeline relative w-full">
            <div className="timeline-line left-auto lg:left-1/2" />
            {items.map((item, index) => <TimelineItem {...item} key={item.title}  
                position={index % 2 == 0 ? "float-left" : "float-right" } />)}

            <style jsx>
                {`
                    .timeline-line {                        
                        content: '';
                        background: #8B82CB;
                        width: 5px;
                        height: 95%;
                        position: absolute;
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
            title: "Software Engineer",
            startDate: "Sep 2020",
            endDate: "Present",
            img: "static/Olo_logo.png",
            altText:"Logo for Olo Online Ordering",
            externalLink: "https://www.olo.com/",
            details: "Contributed to platform responsible for handling millions of online orders per day. Implemented 3ds functionality using iFrames to limit PCI scope.",
            chips: ["C#", "F#", "AWS", "Docker", "Kafka"],
        },
        {
            title: "Senior Software Developer",
            startDate: "Sep 2018",
            endDate: "Sep 2020",
            img: "static/EPAM_logo.png",
            altText: "Logo for EPAM",
            externalLink: "https://www.epam.com/about/fact-sheet",
            companyTagline: "International Consulting Firm for Fortune 1000",
            chips: ["ReactJs", "C# .Net Core", "MongoDb", "Java", "Oracle"],
            details:'Consulted for a large international investment bank, developing applications for middle office and fund management integrations.',
            detailsExtended: `Contributed to a structured funds platform with heavy microservices and email integrations (Java, Play Framework, Oracle DB, React)
            Designed a greenfield web application to automate a previously manual workflow for processing corporate action events for a global investment bank (C#, .NET Core, React, Redux, JavaScript, mongoDB)
            Following an agile workflow, the initial proof of concept was demoed after the first two-week sprint
            Continued to integrate user feedback in an agile setting until shipping the full featured web application to the bank’s production system 
            Set up continuous integration and delivery via Bitbucket and TeamCity, ElasticSearch logging, and Nginx OpenResty for reverse proxy authentication
            Conducted technical coding interviews for applicants resulting in the hiring of 2 new members for the engineering team
            Mentored junior developers on Test Driven Development best practices for .NET Core and React, and presented lessons learned in a department brown bag meeting            
            `
        },
        {
            title: "Software Developer",
            startDate: "July 2012",
            endDate: "July 2015",
            img: "static/Epic_logo.png",
            altText: "Logo for Epic Health Systems",
            externalLink: "https://www.epic.com/about",
            details: 'Developed clinical and patient engagement software for healthcare organizations serving over 250 million patients globally.', 
            chips: ["C#", "Java", "TypeScript", "SQL", "InterSystems Caché"],
            companyTagline: "Software Vendor for Healthcare Organizations Serving 250 Million Patients Globally.",
            detailsExtended: `Coordinated with leading endocrinologists at the Stanford Children’s Hospital and the Park Nicollet International Diabetes Center on user stories and UX design to allow doctors to create insulin dosing regimens for diabetic patients in Epic (TypeScript, C#, .NET MVVM, SQL)
            Rigorously tracked development progress in a Gantt chart, and led daily stand-ups to meet strict timelines until the product was feature-complete
            Brought endocrinologists onto an advisory panel to continue to give feedback throughout the development and implementation process
            Contributed to the Epic MyChart mobile application, a top featured medical application on the iOS App Store and Android Google Play Store, including prototyping integration with Amazon Alexa and Google Assistant APIs via OAuth 2.0 (Java)
            Analyzed performance of a long-running batch job processing hundreds of thousands of patient billing records each night; optimization of disk reads and caching as well as an adaptive multi-threaded solution shaved hours off the run time at large hospitals (Caché, Epic Chronicles DB)
            `,
        },
        {
            title: "Computer Science Major",
            startDate: "Sep 2010",
            endDate: "May 2012",
            img: "static/WKU_logo.jpg",
            altText:"Logo for Western Kentucky University",
            externalLink: "https://www.wku.edu/",
            details: "B.S., Computer Science, minor in Mathematics, with honors.",
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
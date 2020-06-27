export const TimelineItem = ({ position, title, date }) => {
    return (
        <div className="w-full my-12 relative">
            <div className={position}>
            <a className="max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                        <div className="flex items-center justify-between px-4 py-2">
                            <h3 className="text-lg font-medium text-gray-700">{title}</h3>
                            <span className="block text-gray-600 font-light text-sm">{date}</span>
                        </div>
                    </a>
            </div>
        </div>
    )
}

export const Timeline = ({ items }) => {
    return (
        <>
            {items.map((item, index) => <TimelineItem {...item} key={item.title}  
                position={index % 2 == 0 ? "float-left" : "float-right" } />)}
        </>
    )
}


export default function WorkHistory() {

    const items = [
        {
            title: "Company ABC",
            date: "20 Jan 2020"
        },
        {
            title: "Western Kentucky University",
            date: "May 2012"
        }
    ];

    return (
        <section id="CV" className="bg-gray-800 pattern py-20">
            <div className="max-w-5xl px-6 mx-auto text-center">
                <h2 className="text-2xl font-semibold text-white">Work History</h2>

                <div className="flex flex-col items-center justify-center mt-6">

                    <Timeline items={items} />

                    {/* <TimelineItem 
                        title="Company ABC"
                        date="20 Jan 2020"
                    /> */}




                    <a className="max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                        <div className="flex items-center justify-between px-4 py-2">
                            <h3 className="text-lg font-medium text-gray-700">Company ABC</h3>
                            <span className="block text-gray-600 font-light text-sm">20 Jan 2020</span>
                        </div>
                    </a>

                    <a className="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                        <div className="flex items-center justify-between px-4 py-2">
                            <h3 className="text-lg font-medium text-gray-700">Sabbatical to Mars</h3>
                            <span className="block text-gray-600 font-light text-sm">29 Oct 2019</span>
                        </div>
                    </a>

                    <a className="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                        <div className="flex items-center justify-between px-4 py-2">
                            <h3 className="text-lg font-medium text-gray-700">Company XYZ</h3>
                            <span className="block text-gray-600 font-light text-sm">15 Oct 2019</span>
                        </div>
                    </a>

                    <a className="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                        <div className="flex items-center justify-between px-4 py-2">
                            <h3 className="text-lg font-medium text-gray-700">University of Moon</h3>
                            <span className="block text-gray-600 font-light text-sm">3 Oct 2019</span>
                        </div>
                    </a>
                </div>

                <div className="flex items-center justify-center mt-12">
                    <a className="flex items-center text-gray-300 hover:underline hover:text-gray-100" href="static/Jason_Ludden_Resume_2020_JUNE_V2.pdf">
                        <span>Download Resume</span>

                        <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
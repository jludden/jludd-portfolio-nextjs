export default function ContactForm({ contactMeMessage, contactMeEmail }){
  return (
  <section id="Contact" className="bg-gray-200 py-20">

  <div className="max-w-5xl px-6 mx-auto text-center">

    <h2 className="text-2xl font-semibold text-gray-700 mt-20">Contact Me</h2>
    <p className="text-gray-600 mt-4 mb-10">{`More coming soon! To get in touch please shoot me an email at `}
      <a href="mailto:jasonludden@gmail.com" className="underline hover:text-indigo-600">{contactMeEmail}</a>
    </p>
  </div>
  </section>
  )
}

function ContactForm1({ contactMeMessage, contactMeEmail }) {
  return (
    <section id="Contact" className="bg-gray-800 pattern py-20 mt-20">

      <div className="max-w-5xl px-6 mx-auto text-center">

        <h2 className="text-2xl font-semibold text-white">Contact Me</h2>
        <p className="text-gray-400 mt-4 mb-10">{contactMeMessage}
          <a href="mailto:jasonludden@gmail.com" className="underline hover:text-indigo-600">{contactMeEmail}</a>
        </p>

        <div className="bg-gray-300 max-w-2xl py-10 px-6 text-center rounded-lg mx-auto shadow-xl">
          <form className="w-full max-w-lg mx-auto">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  First Name
              </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                <p className="text-red-500 text-xs italic">Please fill out this field.</p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                  Last Name
               </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                  E-mail
              </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                  Message
              </label>
                <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                  Send
              </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
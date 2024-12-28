import { useRef } from "react";

const Contact = () => {



  return (
    <div className="bg-[#3F181C] py-14">
      <div className="container mx-auto grid lgl:grid-cols-[2fr_1fr] gap-10">
        {/* lgl:grid-cols-[2fr_1fr] الكود ده معناه ان الديف الاول هياخد ضعف الديف التاني  */}
        <div className="bg-[#1E1E1E] w-full"
        >
          <div className="my-10 px-10">
            <h1 className="text-3xl text-[#FDBA74] mb-4 font-bold">
              Need Help? Open a Ticket
            </h1>
            <p className="text-white my-2">
              Our support team will get back to you ASAP via email.
            </p>

            <form  >
              <div className="grid grid-cols-1 sml:grid-cols-2 sml:gap-10">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="text-sm mb-2 text-white   font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    required
                    className="w-full my-2 bg-[#3F181C] py-3 px-3 rounded-md text-white text-sm 
                      focus:ring-2 focus:ring-orange-400 outline-none transition
                     duration-200"
                    type="text"
                    placeholder="Enter Your Name"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="text-sm mb-2 text-white font-medium"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    required
                    className="w-full my-2 bg-[#3F181C] py-3 px-3 rounded-md text-white text-sm 
                      focus:ring-2 focus:ring-orange-400 outline-none transition
                     duration-200"
                    type="email"
                    placeholder="Enter Your Email"
                  />
                </div>
              </div>
              <div className="my-4">
                <textarea
                  id="message"
                  required
                  rows="5"
                  placeholder="Write your message here... "
                  className="w-full p-4 rounded-lg bg-[#3F181C] text-white focus:outline-none
                   focus:ring-2 focus:ring-orange-500
                   focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-[#F97316] hover:bg-[#bb5309] rounded-full text-white font-semibold  
                 shadow-md   focus:outline-none focus:ring-2
                   focus:ring-orange-500 transition duration-300"
              >
                Submit Ticket
              </button>
            </form>
          </div>
        </div>
        <div
          className="bg-[#1E1E1E] w-full"
          data-aos="fade-up" // AOS animation for the subscription form
        >
          <div className="px-6 my-7">
            <h1 className="text-2xl text-[#FDBA74] mb-4 font-bold">
              Subscribe to receive future updates
            </h1>
            <p className="text-white">
              Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae
              ornare massa quis lectus.
            </p>

            <p className="h-[1px] w-full my-4 bg-gray-700"></p>

            <div>
              <input
                className="w-full my-5 bg-[#3F181C] py-3 px-3 rounded-md text-gray-700 text-sm
                 focus:ring-2 focus:ring-orange-500 outline-none transition duration-200"
                type="text"
                placeholder="Enter Your Name"
              />
              <input
                className="w-full   bg-[#3F181C] py-3 px-3 rounded-md text-gray-700 text-sm
                 focus:ring-2 focus:ring-orange-500 outline-none transition duration-200"                type="email"
                placeholder="Enter Your Email"
              />
              <button
                className="w-full bg-[#F97316] hover:bg-[#bb5309] focus:ring-orange-500  mt-5 py-2 px-3 rounded-md text-gray-100 text-sm      transition duration-200"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
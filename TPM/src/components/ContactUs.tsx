import ShimmerButton from "./ui/shimmer-button";

export default function ContactUs() {
  return (
    <div className="bg-[#17116B] h-[550px]">
      {/* Contact Us */}

      <div className="flex flex-col items-center justify-center mb-10">
        <div className="font-poppins leading-tight flex justify-center">
          <div className="text-[56px] pb-5 text-glow text-white font-poppins">Contact Us</div>
        </div>
        <div className="rounded-[5px] border shadow-lg border-white">
          <div className="w-[650px] bg-gray-800 p-6 rounded-[5px]">
            <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 grid-rows-3 gap-3">

              {/* Form Fields */}
              <div className="flex flex-col">
                <label className="text-white">Name</label>
                <input
                  type="text"
                  className="bg-gray-700 text-gray-200 rounded-[14px] p-6 w-[268px] focus:bg-gray-600 focus:outline-none 
                  focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 h-[50px] mt-2"
                  placeholder="Name"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-white">Email</label>
                <input
                  type="email"
                  className="bg-gray-700 text-gray-200 rounded-[14px] p-6 w-[268px] focus:bg-gray-600 focus:outline-none 
                  focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 h-[50px] mt-2"
                  placeholder="Email"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-white">Subject</label>
                <input
                  type="text"
                  className="bg-gray-700 text-gray-200 rounded-[14px] p-6 w-[268px] focus:bg-gray-600 focus:outline-none 
                  focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 h-[50px] mt-2"
                  placeholder="Subject"
                />
              </div>

              {/* Message (aligned to the right) */}
              <textarea
                name="Your Message"
                className="col-span-2 row-span-3 col-start-2 row-start-1 bg-gray-700 mt-8
                text-gray-200 rounded-md p-3 w-full h-[238px] focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Message"
              ></textarea>
              <div className="flex items-center">
                <ShimmerButton className="shadow-2xl w-[200px] h-[50px]">
                  <span className="whitespace-pre-wrap text-center text-sm font-medium 
                  leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
                    Submit
                  </span>
                </ShimmerButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

  
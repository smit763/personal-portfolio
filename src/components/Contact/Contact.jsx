import React from "react";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        class="container max-w-[1320px] mx-auto px-5 md:px-10 xl:px-5 pt-24 xl:pt-28"
      >
        <div class="w-full lg:flex space-y-6 lg:space-y-0">
          <div class="w-full lg:w-1/3">
            <h6 class="pl-[20px] relative font-outfit font-medium text-sm uppercase tracking-wider text-white/40 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[12px] before:h-[12px] before:rounded-full before:border-2 before:border-white/30">
              Contact
            </h6>
            <h2 class="font-outfit font-medium text-4xl md:text-5xl lg:text-6xl text-white mt-2">
              Let's
              <span class="bg-themeGradient bg-clip-text text-transparent">
                Talk
              </span>
            </h2>
          </div>
          <div class="w-full lg:w-2/3">
            <div class="flex">
              <div class="w-1/2">
                <h6 class="font-outfit font-medium uppercase text-sm tracking-wider text-white mb-2">
                  Email:
                </h6>
                <h3 class="font-outfit font-medium text-2xl lg:text-3xl text-white">
                  contact@flatheme.net
                </h3>
              </div>
              <div class="w-1/2">
                <h6 class="font-outfit font-medium uppercase text-sm tracking-wider text-white mb-2">
                  Call:
                </h6>
                <h3 class="font-outfit font-medium text-2xl lg:text-3xl text-white">
                  +12 3456 7890
                </h3>
              </div>
            </div>
            <div class="mt-8 lg:text-right">
              <form class="space-y-4" method="post" id="contactform">
                <div class="flex space-x-4">
                  <div class="w-1/2">
                    <input
                      class="w-full bg-darkBg px-5 py-4 rounded-lg placeholder:text-white/40 text-white/70 focus:outline-none"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div class="w-1/2">
                    <input
                      class="w-full bg-darkBg px-5 py-4 rounded-lg placeholder:text-white/40 text-white/70 focus:outline-none"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="E-Mail"
                      required
                    />
                  </div>
                </div>
                <input
                  class="w-full bg-darkBg px-5 py-4 rounded-lg placeholder:text-white/40 text-white/70 focus:outline-none"
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                />
                <textarea
                  class="w-full bg-darkBg px-5 py-4 rounded-lg placeholder:text-white/40 text-white/70 h-[160px] focus:outline-none"
                  name="message"
                  id="message"
                  placeholder="Message"
                ></textarea>
                <button
                  class="inline-block relative group overflow-hidden bg-white/15 px-7 py-3 pr-11 rounded-3xl font-outfit font-medium uppercase text-sm tracking-wider text-white before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100 after:content-[''] after:absolute after:top-1/2 after:right-[28px] after:-translate-y-1/2 after:bg-white after:w-[5px] after:h-[5px] after:rounded-full after:transition-all after:duration-[60ms] hover:after:opacity-40 hover:after:scale-[2.7]"
                  type="submit"
                >
                  <span
                    class="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-white before:transition-all before:ease-out before:duration-200 group-hover:before:-top-full group-hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-white after:transition-all after:ease-out after:duration-200 group-hover:after:top-0 group-hover:after:opacity-100"
                    data-text="Send Message"
                  >
                    Send Message
                  </span>
                </button>
              </form>
              {/* <div class="submit-result">
                <span
                  class="transition duration-200 ease-out text-green-700"
                  id="success"
                >
                  Thank you! Your Message has been sent.
                </span>
                <span
                  class="transition duration-200 ease-out text-red-600"
                  id="error"
                >
                  Something went wrong, Please try again!
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

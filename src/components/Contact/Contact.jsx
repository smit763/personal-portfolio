import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    const templateParams = {
      from_name: data.email,
      user_name: data.name,
      to_name: import.meta.env.VITE_USER_EMAIL,
      message: data.message,
    };
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      id="contact"
      className="container bg-darkBg max-w-[1320px] rounded-2xl mx-auto px-5 md:px-10 xl:px-5 py-16"
    >
      <div className="w-full lg:flex space-y-6 lg:space-y-0">
        <div className="w-full lg:w-1/3">
          <h6 className="pl-[20px] relative font-outfit font-medium text-sm uppercase tracking-wider text-white/40 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[12px] before:h-[12px] before:rounded-full before:border-2 before:border-white/30">
            Contact
          </h6>
          <h2 className="font-outfit font-medium text-4xl md:text-5xl lg:text-6xl text-white mt-2">
            {" Let's"}
            <span className="bg-themeGradient bg-clip-text text-transparent">
              Talk
            </span>
          </h2>
        </div>
        <div className="w-full lg:w-2/3">
          <div className="mt-8 lg:text-right">
            <form
              className="space-y-4"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4">
                <div className="sm:w-1/2">
                  <input
                    className={`w-full bg-black px-5 py-4 rounded-lg placeholder:text-white/40 text-white/70 focus:outline-none ${
                      errors.name ? "border border-red-500" : ""
                    }`}
                    type="text"
                    placeholder="Name"
                    {...register("name", {
                      required: "Name is required",
                      maxLength: {
                        value: 50,
                        message: "Name must not exceed 50 characters",
                      },
                    })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="sm:w-1/2">
                  <input
                    className={`w-full bg-black px-5 py-4 rounded-lg placeholder:text-white/40 text-white/70 focus:outline-none ${
                      errors.email ? "border border-red-500" : ""
                    }`}
                    type="email"
                    placeholder="E-Mail"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <input
                className={`w-full bg-black px-5 py-4 rounded-lg placeholder:text-white/40 text-white/70 focus:outline-none ${
                  errors.subject ? "border border-red-500" : ""
                }`}
                type="text"
                placeholder="Subject"
                {...register("subject", { required: "Subject is required" })}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject.message}</p>
              )}
              <textarea
                className={`w-full bg-black px-5 py-4 rounded-lg placeholder:text-white/40 text-white/70 h-[160px] focus:outline-none ${
                  errors.message ? "border border-red-500" : ""
                }`}
                placeholder="Message"
                {...register("message", {
                  required: "Message is required",
                  maxLength: {
                    value: 500,
                    message: "Message must not exceed 500 characters",
                  },
                })}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
              <button
                className="inline-block relative group overflow-hidden bg-white/15 px-7 py-3 pr-11 rounded-3xl font-outfit font-medium uppercase text-sm tracking-wider text-white before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100 after:content-[''] after:absolute after:top-1/2 after:right-[28px] after:-translate-y-1/2 after:bg-white after:w-[5px] after:h-[5px] after:rounded-full after:transition-all after:duration-[60ms] hover:after:opacity-40 hover:after:scale-[2.7]"
                type="submit"
              >
                <span
                  className="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-white before:transition-all before:ease-out before:duration-200 group-hover:before:-top-full group-hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-white after:transition-all after:ease-out after:duration-200 group-hover:after:top-0 group-hover:after:opacity-100"
                  data-text="Send Message"
                >
                  Send Message
                </span>
              </button>
              {isSubmitSuccessful && (
                <p className="text-green-500 text-sm mt-4">
                  Thank you! Your message has been sent.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

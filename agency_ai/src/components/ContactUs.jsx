import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import {easeOut, motion} from "motion/react"

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "044d8db4-3469-40b3-bd56-679102addcae"
    );

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        }
      );

      const data = await response.json();

      console.log("Web3Forms response:", data);

      if (data.success) {
        toast.success("Thank you for your submission!");
        form.reset();
      } else {
        toast.error(data.message || "Submission failed.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once:true}}
      transition={{staggerChildren:0.2}}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach Out to Us"
        desc="From strategy to execution, we craft digital solutions that move your business forward"
      />

      <motion.form
      initial={{opacity:0 , y:30}}
      whileInView={{opacity:1 , y:0}}
      transition= {{duration:0.5 , delay:0.4}}
      viewport={{once:true}}
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        <div>
          <p className="mb-2 text-sm font-medium">Your name</p>

          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="" />

            <input
              name="name"
              type="text"
              placeholder="Enter Your name"
              className="w-full p-3 text-sm outline-none bg-transparent"
              required
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">Email ID</p>

          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="" />

            <input
              name="email"
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-3 text-sm outline-none bg-transparent"
              required
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>

          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
            required
          />
        </div>

        <div className="sm:col-span-2 flex justify-center">
          <button
            type="submit"
            className="flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all"
          >
            Submit

            <img
              src={assets.arrow_icon}
              alt=""
              className="w-4"
            />
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;
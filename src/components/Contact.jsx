import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { ComputerCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Contact = () => {
  const [text] = useTypewriter({
    words: ["ideas?", "projects?", "goals?", "needs?", "dreams?"],
    loop: false,
  });

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_rwbe0m6",
        "template_rju82ah",
        {
          from_name: form.name,
          to_name: "Felipe Garzon Melguizo",
          from_email: form.email,
          to_email: "felipegarzon908@gmail.com",
          message: form.message,
        },
        "rbbVuTUvRFcGXrpKl"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          alert("Something went wrong :(");
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#222222] p-8 rounded-2xl"
      >
        <h3 className={`${styles.sectionHeadText}`}>Do you have any</h3>
        <span className={`${styles.sectionHeadText} text-primary`}>
          {text}
          <Cursor cursorColor="#08d108" />
        </span>

        <p className={`${styles.sectionSubText} text-primary`}>Get in touch!</p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-[#161616] py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium mb-4">Your Email</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-[#161616] py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium mb-4">Your message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-[#161616] py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            className="w-fit rounded-xl text-white shadow-md shadow-[#222222] py-3 px-8 outline-none bg-[#161616]"
            type="submit"
          >
            {loading ? "sending..." : "send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <ComputerCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

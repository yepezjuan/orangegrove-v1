import React from "react";
import { motion } from "motion/react";
import { div } from "motion/react-client";

const services = [
  {
    title: "Graphic Design",
    description:
      "Logos, flyers, brand identity, and more. Highly proficient in using Adobe Illustrator and Photoshop. Open to commision for any logo or graphic of your needs, Contact info is down below!",
  },
  {
    title: "Photo/Video-graphy",
    description:
      "Open to any project or idea. Feel free to send a message if interested, will work with your budget. ",
  },
  {
    title: "Web Development",
    description:
      "Build fast, no-nonsense websites for self-employed and small brick-and-mortar businesses. No monthly fees, no complicated setups — just a clean site that looks legit, loads fast on phones, and makes it easy for customers to call, book, or visit.",
  },
];

export default function Services() {
  return (
    <div
      className=" py-5 m-5 rounded-md text-center scroll-mt-20"
      id="services"
    >
      <div className="font-bold text-4xl align-center mb-4">SERVICES</div>
      <div className=" m-20 grid grid-cols-3 ">
        {services.map((service) => (
          <div key={service.id}>
            <h2 className="text-xl font-bold underline decoration-orange-400 decoration-2">
              {service.title}
            </h2>
            <p className="py-5 px-10 text-justify">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

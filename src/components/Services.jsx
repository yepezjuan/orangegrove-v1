import React from 'react';
import { motion } from 'motion/react';
import { div } from 'motion/react-client';


const services = [
    {
        title: "Graphic Design",
        description: "Logos, flyers, brand identity, and more.Highly proficient in using Adobe Illustrator and Photoshop. Open to commision for any logo or graphic that you may need"
    },
    {
        title: "Photography",
        description: "Open to any project or idea. Will work with your budget "
    },
    {
        title: "Videography",
        description: "Open  to any project or idea. Will work with your budget."
    }
];


export default function Services() {
    return (
        <div className=" py-15 m-5 rounded-md text-center">
            <div className='font-bold text-5xl align-center mb-4'>services</div>
            <div className=" grid grid-cols-3 ">
                {services.map(service => (
                    <div
                        key={service.id} >
                        <h2 className='text-xl font-bold underline decoration-orange-400 decoration-2'>{service.title}</h2>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}


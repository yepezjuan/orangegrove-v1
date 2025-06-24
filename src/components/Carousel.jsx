import React from 'react'


import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';
import pic7 from '../assets/pic7.jpeg';

const carouselData = [
    { src: pic4, alt: 'First Image' },
    { src: pic7, alt: 'Second Image' },
    { src: pic5, alt: 'Third Image' }
];

const Carousel = ({ data }) => {


    return (
        <div className='w-full overflow-hidden grid grid-cols-3'>
            {carouselData.map((item, idx) => (
                <img className=' h-auto object-cover' src={item.src} alt={item.alt} key={idx} />
            ))}
        </div>
    );


};

export default Carousel

// RAFC shortcut
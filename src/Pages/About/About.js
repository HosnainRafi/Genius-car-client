import React from 'react';
import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row ">
                <div className='w-4/5 relative'>
                <img src={person} alt="" className="rounded-lg shadow-2xl w-4/5 h-full" />
                <img src={parts} alt="" className="rounded-lg shadow-2xl absolute w-1/2 top-1/2 right-16 border-8 h-3/4 border-white" />
                </div>
                <div className='w-1/2 md:my-24 sm:mt-24'>
                    <h3 style={{color:'#FF3811'}} className='font-bold sm:mt-12'>About Us</h3>
                    <h1 className="text-6xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='mb-4'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button style={{backgroundColor:'#FF3811'}} className="btn">Get More info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
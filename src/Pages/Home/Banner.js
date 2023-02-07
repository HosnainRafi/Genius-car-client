import React from 'react';
import banner1 from '../../assets/images/banner/1.jpg';
import banner2 from '../../assets/images/banner/2.jpg';
import banner3 from '../../assets/images/banner/3.jpg';
import banner4 from '../../assets/images/banner/4.jpg';
import banner5 from '../../assets/images/banner/5.jpg';
import banner6 from '../../assets/images/banner/6.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full ">
                <div className="img-gradient">
                    <img src={banner1} className="w-full" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                    <a href="#slide4" className="btn btn-circle mr-5 hover:bg-orange-600">🡸</a>
                    <a href="#slide2" className="btn btn-circle hover:bg-orange-600">🡺</a>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 top-1/4 left-24">
                    <h1 className='text-6xl font-bold text-white'>Affordable
                        <br /> Price For Car
                        <br /> Servicing</h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 top-1/2 w-2/5 left-24">
                    <p className="text-white text-xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 top-3/4 w-2/5 left-24">
                    <button className="btn btn-error mr-5 text-white px-12" >Appointment</button>
                    <button className="btn btn-outline btn-warning px-12" >Appointment</button>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
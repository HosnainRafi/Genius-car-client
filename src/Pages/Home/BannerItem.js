import React from 'react';
import './BannerItem.css';

const BannerItem = ({ slide }) => {

    const { id, image, prev, next } = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
            <div className="img-gradient">
                <img src={image} className="w-full rounded-2xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-24 bottom-0 ">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5 hover:bg-orange-600  btn-outline text-white">🡸</a>
                <a href={`#slide${next}`} className="btn btn-circle hover:bg-orange-600 btn-outline text-white">🡺</a>
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
    );
};

export default BannerItem;



{/* <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
    <a href="#slide4" className="btn btn-circle mr-5 hover:bg-orange-600  btn-outline text-white">🡸</a>
    <a href="#slide2" className="btn btn-circle hover:bg-orange-600 btn-outline text-white">🡺</a>
</div> */}
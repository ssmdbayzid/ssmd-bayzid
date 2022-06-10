import React from 'react';
import htmlcss from '../../Image/Logo/htmlCss.png'
import bootstrap from '../../Image/Logo/bootstrap.jpeg'
import react from '../../Image/Logo/react.png'
import nodelogo from '../../Image/Logo/nodelogo.png'
import mongodb from '../../Image/Logo/mongodb.png'
import express from '../../Image/Logo/express.js.png'

const Technology = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <h1 className='text-5xl text-white font-bold py-12 text-center'> Technology</h1>
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
            <div>
                <div className="card bg-[#212129] text-white shadow-xl">
                    <figure className="pt-5">
                        <img src={htmlcss} alt="Shoes" className=" w-[200px] rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-xl">HTML & CSS</h2>
                    </div>
                </div>
            </div>
            <div>
                <div className="card bg-[#212129] text-white shadow-xl">
                    <figure className="pt-5">
                        <img src={bootstrap} alt="Shoes" className=" w-[200px] rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-xl">Bootstrap</h2>
                    </div>
                </div>
            </div>
            <div>
                <div className="card bg-[#212129] text-white shadow-xl">
                    <figure className="pt-5">
                        <img src={react} alt="Shoes" className=" w-[200px] rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-xl">React</h2>
                    </div>
                </div>
            </div>
            <div>
                <div className="card bg-[#212129] text-white shadow-xl">
                    <figure className="pt-5">
                        <img src={nodelogo} alt="Shoes" className=" w-[200px] rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-xl">Node</h2>
                    </div>
                </div>
            </div>
            <div>
                <div className="card bg-[#212129] text-white shadow-xl">
                    <figure className="pt-5">
                        <img src={mongodb} alt="Shoes" className=" w-[200px] rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-xl">Mongodb</h2>
                    </div>
                </div>
            </div>
            <div>
                <div className="card bg-[#212129] text-white shadow-xl">
                    <figure className="pt-5">
                        <img src={express} alt="Shoes" className=" w-[200px] rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-xl">Express</h2>
                    </div>
                </div>
            </div>
        </div>
        </div>
        


    );
};

export default Technology;
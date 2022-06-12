import React from 'react';
import img from '../../Image/photo.png'

const About = () => {
    return (
        <div id='about' className="hero text-white min-h-screen w-10/12 mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='m-8 w-1/2 text-justify'>
                    <h1 className="text-5xl tracking-wide font-bold">About Me</h1>
                    <h1 className="text-2xl font-bold">Web Developer <span className='text-[#EB0C83]'>& Designer</span></h1>

                    <p className="py-6">I am a frontend wev web developer. I can provide clean code and pixed perfect design. I also make the website more & more interactive with web animations. I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations. A responsive design makes yoyr website accessible to all users, regardless of their device</p>
                    <button className="btn bg-[#EB0C83] btn-primary">Lets Talk</button>
                </div>
            </div>
        </div>
    );
};

export default About;
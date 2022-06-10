import React from 'react';
import banner from '../../Image/Banner.jpg'
import './Banner.css'

const Banner = () => {
    // border = linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%);
    return (
        <div className="text-white">
            <div className="hero-content flex-col lg:flex-row-reverse"> 
            <img src={banner} className="max-w-sm rounded-lg" />           
                <div className='m-[50px]'>
                    <h1 className="pb-3 name text-5xl font-bold bg-clip-text bg-gradient-to-r from-purple-600 to-[#EB0C83]">S S Md. Bayzid</h1>
                    <p className="text-3xl">Full Stack Web Developer</p>
                    <p className="text-sm">Diploma In Engineering at Dhaka Polytectnic Institute</p>
                    <button class="btn mt-8 btn-primary"> <a href="https://drive.google.com/file/d/18IoPnhg3olutrF6N7nI4QVZnfQkawWni/view?usp=sharing"   target='_blank'>Download Resume</a></button>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;
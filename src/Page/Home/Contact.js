import React from 'react';

const Contact = () => {
    return (
        <div className="hero w-3/4 mx-auto min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-full text-white lg:text-left">
                    <h1 className="text-4xl text-[#EB0C83] w-full font-bold">Contact Me!</h1>
                    <p className=""><span className='mr-3'>Address:</span>CTG Road, SIddhirganj, Narayanganj, Dhaka</p>
                    <p className=""><span className='mr-3'>Mobile:</span>+88 01619 788808 / +88 01517 833810</p>
                </div>
                <div className=" flex-shrink-0 max-w-sm lg:w-[70%] bg-gary-100 shadow-2xl">
                        <form action="mailto:ssmd.bayzid@gmail.com">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input w-[80%] input-bordered" required/>
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" placeholder="your email" className="input w-[80%] input-bordered" required/>
                            <label className="label">
                                <span className="label-text text-white">description</span>
                            </label>
                            <textarea type="text" placeholder="description" className="input w-[80%] input-bordered" required/>
                            <input className='block btn w-[80%]' type='submit' value='Submit' />
                        </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
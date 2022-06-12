import React from 'react';

const Header = () => {


    const navbar = <>
        <li><a href='/home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='/project'>Project</a></li>
        <li><a href='https://drive.google.com/file/d/18IoPnhg3olutrF6N7nI4QVZnfQkawWni/view' target='_blank' download >My Resume</a></li>
        <li><a href='/blog'>Blogs</a></li>
    </>

    return (
        <div className="navbar text-[#EB0C83] w-3/4 margin-auto">
            <div className="justify-center navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li tabindex="0">
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                {navbar}
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navbar}

                </ul>
            </div>
        </div>
    );
};

export default Header;
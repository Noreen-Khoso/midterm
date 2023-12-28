import React from 'react';
import cover from "../Assets/mb.png"

const Hero = () => {

    return (
        <>
            <div className=' flex flex-col md:flex-row bg-[#2B2B2B] max-w-[1240px] '>
                <div className=' flex items-center justify-start    '>
                    <img src={cover} alt="" className=' ' />

                </div>
                <div className='  flex flex-col  justify-start items-center text-white bg-[#2B2B2B] w-screen py-7 m-auto '>
                    <div className=' flex flex-col items-center justify-stretch px-4'>
                        <div className=' flex flex-col items-center  justify-stretch py-7 px-4'>
                            <h1 className=' font-extrabold text-4xl  capitalize leading-tight  '>
                                Create account
                            </h1>
                            <p className=' font-normal text-base text-left leading-tight mt-4 pl-10   '>
                                Welcome! enter your details and start creating, <br />
                                collecting and selling NFTs.
                            </p>
                        </div>
                        <div className=' flex  gap-2 flex-col items-center  '>

                            <input type="text" placeholder='Username' className=' py-2 px-10 rounded-2xl items-center' />




                            <input type="text" placeholder='Email Address' className=' py-2 px-10 rounded-2xl items-center' />




                            <input type="password" placeholder='Password' className=' py-2 px-10 rounded-2xl items-center' />




                            <input type="Password" placeholder='Conform password' className=' py-2 px-10 rounded-2xl items-center' />
                            


                            <button className=' hover:text-purple-400 hover:bg-transparent hover:boder-2 border-purple-600 px-20 '> Create Account </button>
                            

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Hero;
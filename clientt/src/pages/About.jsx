import React from 'react';
import monkeyPng from '../assets/dog.png'
function About() {
    function handleClick(){

    }
    return (

        <div>
            <div className='text-white flex justify-center items-center mb-40 right-section'>
                <img src={monkeyPng} className='h-[700px]' alt="" />
                <div className>
                    <h1 className=' text-gradient-purple-pink text-9xl '>NFTs</h1>
                    <h3 className='w-[80%] text-2xl'>Non-fungible tokens are unique blockchain-based tokens that represent ownership of a digital or physical asset. </h3>
                    <button onClick={handleClick} className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-white mt-10" type="button">
                        Know More
                    </button>
                </div>
                
            </div>
            <div id="raodmap" className="container-md roadmap flex flex-col  text-white" >
                <h4 className="text-heading text-center mb-5 text-4xl" >Our Model</h4>
                <p style={{ textAlign: "left" }} className=' m-6 border-2    rounded-lg' >
                    <div className='m-12'>
                        <span className='text-4xl text-gradient-purple-pink-2'>Art Generation</span>
                        <h1 className='text-2xl'>People can mint thier NFTs.</h1>
                    </div>
                </p>
                <p style={{ textAlign: "right" }} className=' m-6 border-2    rounded-lg' >
                    <div className='m-12'>
                        <span className='text-4xl text-gradient-purple-pink-2'>Whitelisting</span><br />
                        <h1 className='text-2xl'>A NFT is generated and stored into IPFS.</h1>
                    </div>
                </p>
                <p style={{ textAlign: "left" }} className=' m-6 border-2    rounded-lg'>
                    <div className='m-12'>
                        <span className='text-4xl text-gradient-purple-pink-2'>Sale</span><br />
                        <h1 className='text-2xl'>Anyone can bye the NFTs anonymously</h1>
                    </div>
                </p>
                <p style={{ textAlign: "right" }} className=' m-6 border-2    rounded-lg'>
                    <div className='m-12'>
                        <span className='text-4xl text-gradient-purple-pink-2'>Charity</span><br />
                        <h1 className='text-2xl'>A part of the profit will be sent to charity</h1>
                    </div>
                </p>
                <p style={{ textAlign: "left" }} className=' m-6 border-2    rounded-lg'>
                    <div className='m-12'>
                        <span className='text-4xl text-gradient-purple-pink-2'>Royalty</span><br />
                        <h1 className='text-2xl'>Owner will get some royalties on every buying</h1>
                    </div>
                </p>
            </div>
        </div>
    )
}

export default About
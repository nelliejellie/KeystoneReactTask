import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import {BiPlus} from "react-icons/bi"
import profile from "../assets/profile.png"
import {BsThreeDots} from "react-icons/bs"
import guy from "../assets/guyjpg.jpg"

function Dashboard() {
  return (
    <div className='w-[80%] bg-[#F4F8FC] h-[90vh] rounded-tl-xl p-4 space-y-3'>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-row justify-between bg-[#EAEEF4] w-[20%] h-[30px] items-center p-1 px-2 rounded-md'>
                <p>Search...</p>
                <AiOutlineSearch className="text-[#AEB7BE]"/>
            </div>
            <div className='flex flex-row items-center space-x-2'>
                <div className='flex flex-col items-end'>
                    <h6 className='font-semibold text-sm'>jamesbrown@example.com</h6>
                    <small>Admin</small>
                </div>
                <img src={profile}
                    className="w-7 h-7"
                />
            </div>
        </div>
        <div className='bg-white rounded-md h-[30vh]'>
            <div className='flex flex-row justify-between'>
                <div className='m-2 font-semibold text-sm'>Sales OverView</div>
                <div className='bg-[#436DD9] w-[15%] h-[30px] flex flex-row items-center justify-center m-2 rounded-md'>
                    <BiPlus className='text-white'/>
                    <p className='text-white text-sm'>Add Offer</p>
                </div>
            </div>
            
        </div>
        <div className='flex flex-row space-x-2'>
            <div className='h-[15vh] bg-[#436DD9] w-[15vw] rounded-md'>

            </div>
            <div className='h-[15vh] bg-white w-[15vw] rounded-md'>

            </div>
            <div className='h-[15vh] bg-white w-[15vw] rounded-md'>

            </div>
            <div className='h-[15vh] bg-white w-[15vw] rounded-md'>

            </div>
            <div className='h-[15vh] bg-white w-[15vw] rounded-md'>

            </div>
        </div>
        <div className='flex flex-row space-x-2'>
            <div className='w-[30%] h-[30vh] bg-white'>

            </div>
            <div className='w-[70%] h-[35vh] bg-white px-8 p-2'>
                <div className='flex flex-row justify-between'>
                    <p className='text-sm text-gray-400'>Latest Added Products</p>
                    <BsThreeDots />
                </div>
                
                <div className='flex flex-row justify-between mt-6'>
                    <img src={guy} alt="" className='w-7 h-7'/>
                    <div className='flex flex-col items-start'>
                        <p className='text-sm font-bold'>PSG Stadium 20/21</p>
                        <small className='text-gray-400 text-xm'>3 Variants</small>
                    </div>
                    <div>
                        <p className='text-sm'><span className='text-gray-400'>SKU:</span>8600844</p>
                    </div>
                    <div>
                        <p className='text-sm'>Jerseys</p>
                    </div>
                    <div>
                        <p className='text-sm'>12/11/2020</p>
                    </div>
                    <div className=''>
                        <p className='text-sm text-[#78D4D1] bg-[#EAF7F7] px-1 rounded-full'>published</p>
                    </div>
                </div>
                <div className='flex flex-row justify-between mt-6'>
                    <img src={guy} alt="" className='w-7 h-7'/>
                    <div className='flex flex-col items-start'>
                        <p className='text-sm font-bold'>PSG Stadium 20/21</p>
                        <small className='text-gray-400 text-xm'>3 Variants</small>
                    </div>
                    <div>
                        <p className='text-sm'><span className='text-gray-400'>SKU:</span>8600844</p>
                    </div>
                    <div>
                        <p className='text-sm'>Jerseys</p>
                    </div>
                    <div>
                        <p className='text-sm'>12/11/2020</p>
                    </div>
                    <div className=''>
                        <p className='text-sm text-[#FDC2B0] bg-[#FFF2EE] px-1 rounded-full'>pending</p>
                    </div>
                </div>
                <div className='flex flex-row justify-between mt-6'>
                    <img src={guy} alt="" className='w-7 h-7'/>
                    <div className='flex flex-col items-start'>
                        <p className='text-sm font-bold'>PSG Stadium 20/21</p>
                        {/* <small className='text-gray-400 text-xm'>3 Variants</small> */}
                    </div>
                    <div>
                        <p className='text-xm'><span className='text-gray-400'>SKU:</span>8600844</p>
                    </div>
                    <div>
                        <p className='text-xm'>Jerseys</p>
                    </div>
                    <div>
                        <p className='text-xm'>12/11/2020</p>
                    </div>
                    <div className=''>
                        <p className='text-sm text-[#78D4D1] bg-[#EAF7F7] px-1 rounded-full'>published</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
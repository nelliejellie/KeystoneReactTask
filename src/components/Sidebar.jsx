import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineLineChart, AiOutlineShoppingCart, AiOutlineTransaction} from "react-icons/ai"
import {BiBox} from "react-icons/bi";
import {FiUsers, FiSettings} from "react-icons/fi";
import {BsBarChartLine, BsFlag} from "react-icons/bs";
import {RxEnvelopeOpen} from "react-icons/rx";


function Sidebar() {
  return (
    <div className='w-[20%] md:w-[90%] h-[90vh] md:h-[45vh]'>
        <div className='space-y-5 pl-5'>
            <h1 className='text-[#12477E] font-bold text-[40px] text-left'>RETRO</h1>
            <div className='flex flex-col justify-start items-start'>
                <div className='flex flex-row w-[160px] space-x-2 items-center px-3 py-1 hover:bg-[#EDEFFA] hover:rounded-tr-md hover:rounded-br-md hover:rounded-bl-md '>
                    <AiOutlineLineChart className="text-[#AEB7BE]"/>
                    <Link to={"/"} className="text-[#AEB7BE] hover:text-[#3B78DE] hover:font-semibold">dashboard</Link>
                </div>
                <div className='flex flex-row w-[160px] space-x-2 items-center px-3 py-1 hover:bg-[#EDEFFA] hover:rounded-tr-md hover:rounded-br-md hover:rounded-bl-md'>
                    <BiBox className="text-[#AEB7BE]"/>
                    <Link to={"products"} className="text-[#AEB7BE] hover:text-[#3B78DE] hover:font-semibold">Products</Link>
                </div>
                <div className='flex flex-row w-[160px] space-x-2 items-center px-3 py-1 hover:bg-[#EDEFFA] hover:rounded-tr-md hover:rounded-br-md hover:rounded-bl-md'>
                    <AiOutlineShoppingCart className="text-[#AEB7BE]"/>
                    <Link to={"blog"} className="text-[#AEB7BE] hover:text-[#3B78DE] hover:font-semibold">Blog</Link>
                </div>
                <div className='flex flex-row w-[160px] space-x-2 items-center px-3 py-1 hover:bg-[#EDEFFA] hover:rounded-tr-md hover:rounded-br-md hover:rounded-bl-md'>
                    <AiOutlineTransaction className="text-[#AEB7BE]"/>
                    <Link to={"transaction"} className="text-[#AEB7BE] hover:text-[#3B78DE] hover:font-semibold">Transactions</Link>
                </div>
                <div className='flex flex-row w-[160px] space-x-2 items-center px-3 py-1 hover:bg-[#EDEFFA] hover:rounded-tr-md hover:rounded-br-md hover:rounded-bl-md'>
                    <FiUsers className="text-[#AEB7BE]"/>
                    <Link to={"users"} className="text-[#AEB7BE] hover:text-[#3B78DE] hover:font-semibold">Users</Link>
                </div>
                <div className='flex flex-row w-[160px] space-x-2 items-center px-3 py-1 hover:bg-[#EDEFFA] hover:rounded-tr-md hover:rounded-br-md hover:rounded-bl-md'>
                    <BsBarChartLine className="text-[#AEB7BE]"/>
                    <Link to={"analysis"} className="text-[#AEB7BE] hover:text-[#3B78DE] hover:font-semibold">Analysis</Link>
                </div>
                <div className='flex flex-row w-[160px] space-x-2 items-center px-3 py-1 hover:bg-[#EDEFFA] hover:rounded-tr-md hover:rounded-br-md hover:rounded-bl-md'>
                    <BsFlag className="text-[#AEB7BE]"/>
                    <Link to={"reports"} className="text-[#AEB7BE] hover:text-[#3B78DE] hover:font-semibold">Reports</Link>
                </div>
                <div className='flex flex-row w-[160px] space-x-2 items-center px-3 py-1 hover:bg-[#EDEFFA] hover:rounded-tr-md hover:rounded-br-md hover:rounded-bl-md'>
                    <RxEnvelopeOpen className="text-[#AEB7BE]"/>
                    <Link to={"investment"} className="text-[#AEB7BE] hover:text-[#3B78DE] hover:font-semibold">Investment</Link>
                </div>
                <div className='flex flex-row w-[160px] space-x-2 items-center px-3 py-1 hover:bg-[#EDEFFA] hover:rounded-tr-md hover:rounded-br-md hover:rounded-bl-md'>
                    <FiSettings className="text-[#AEB7BE]"/>
                    <Link to={"setting"} className="text-[#AEB7BE] hover:text-[#3B78DE] hover:font-semibold">Settings</Link>
                </div>
                
            </div>   
        </div>   
    </div>
  )
}

export default Sidebar